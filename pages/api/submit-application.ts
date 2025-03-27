import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const WEBHOOK_KEY = process.env.DISCORD_WEBHOOK_KEY;
const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

const emailConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const typeColors = {
  Engineering: 0x4f46e5, 
  Design: 0xec4899,      
  Operations: 0x10b981,  
};  

type ApplicationData = {
  name: string;
  email: string;
  experience: string;
  portfolio?: string;
  message?: string;
};

type Position = {
  title: string;
  type: string;
  commitment: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { position, application } = req.body;

    if (!position || !application) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate required fields
    if (!application.name || !application.email || !application.experience) {
      return res.status(400).json({ message: 'Missing required application fields' });
    }

    // Send to Discord webhook
    const timestamp = Date.now();
    const hash = crypto
      .createHmac('sha256', WEBHOOK_KEY!)
      .update(`${timestamp}${JSON.stringify(application)}`)
      .digest('hex');

    const formattedExperience = application.experience
      .split('\n')
      .map((line: string) => line.trim())
      .filter((line: string) => line.length > 0)
      .join('\n• ');

    const discordEmbed = {
      embeds: [{
        title: `🎯 New Application: ${position.title}`,
        color: typeColors[position.type as keyof typeof typeColors] || 0x6b7280,
        fields: [
          {
            name: '👤 Applicant Information',
            value: `**Name:** ${application.name}\n**Email:** ${application.email}`,
            inline: false
          },
          {
            name: '💼 Position Details',
            value: `**Role:** ${position.title}\n**Type:** ${position.type}\n**Commitment:** ${position.commitment}`,
            inline: false
          },
          {
            name: '🚀 Experience',
            value: formattedExperience || 'No experience provided',
            inline: false
          }
        ],
        footer: {
          text: 'Veloce Careers',
          icon_url: 'https://i.imgur.com/C2fTKQ1.png' 
        },
        timestamp: new Date().toISOString()
      }]
    };

    if (application.portfolio) {
      discordEmbed.embeds[0].fields.push({
        name: '🔗 Portfolio/GitHub',
        value: application.portfolio,
        inline: false
      });
    }

    if (application.message) {
      discordEmbed.embeds[0].fields.push({
        name: '💭 Additional Message',
        value: application.message,
        inline: false
      });
    }

    const discordResponse = await fetch(WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Signature': hash,
        'X-Timestamp': timestamp.toString(),
      },
      body: JSON.stringify(discordEmbed)
    });

    if (!discordResponse.ok) {
      throw new Error('Discord webhook failed');
    }

    // Try to send email, but don't fail if it doesn't work
    try {
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport(emailConfig);
        await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: application.email,
          subject: `Application Received - ${position.title} at Veloce`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4f46e5;">Thank you for applying!</h2>
              <p>Hi ${application.name},</p>
              <p>We've received your application for the ${position.title} position at Veloce.</p>
              <p>Our team will review your application and get back to you soon.</p>
              <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-radius: 8px;">
                <p style="margin: 0;"><strong>Position:</strong> ${position.title}</p>
                <p style="margin: 8px 0;"><strong>Type:</strong> ${position.type}</p>
                <p style="margin: 0;"><strong>Commitment:</strong> ${position.commitment}</p>
              </div>
              <p>Best regards,<br>The Veloce Team</p>
            </div>
          `
        });
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    return res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Application submission error:', error);
    return res.status(500).json({ message: 'Error submitting application' });
  }
} 
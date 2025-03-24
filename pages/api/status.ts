import { NextApiRequest, NextApiResponse } from 'next';
import { BetterStackClient, StatusResponse } from '@/lib/betterstack';

// Add cache duration (5 minutes)
const CACHE_DURATION = 300;

// Default response for development
const defaultStatus: StatusResponse = {
  status: {
    description: 'All systems operational',
    indicator: 'none',
  },
  page: {
    id: 'dev',
    name: 'Veloce Status',
    url: '',
    timeZone: 'UTC',
    updatedAt: new Date().toISOString(),
  },
  metrics: {
    uptime: 99.98,
    uptimeDay: 100,
    uptimeWeek: 99.99,
    uptimeMonth: 99.98,
    uptimeYear: 99.98,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', `s-maxage=${CACHE_DURATION}, stale-while-revalidate`);

  // Check if Better Stack credentials are configured
  if (!process.env.BETTER_STACK_API_KEY || !process.env.BETTER_STACK_STATUS_PAGE_ID) {
    console.log('Better Stack credentials not configured, using default status');
    return res.status(200).json(defaultStatus);
  }

  try {
    const client = new BetterStackClient(process.env.BETTER_STACK_API_KEY);
    const status = await client.getStatus();
    return res.status(200).json(status);
  } catch (error) {
    console.error('Status API Error:', error);
    // Return default status on error
    return res.status(200).json(defaultStatus);
  }
} 
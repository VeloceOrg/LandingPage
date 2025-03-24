import DefaultLayout from "@/layouts/default";

export default function TermsPage() {
  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: March 19, 2024
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of Veloce's services, including our website, platform, and deployment services (collectively, the "Services"). By using our Services, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="mb-4">
              Veloce provides a deployment platform that allows users to deploy, manage, and scale applications. Our Services include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Application deployment and hosting</li>
              <li>Continuous integration and deployment</li>
              <li>Edge network distribution</li>
              <li>Monitoring and analytics</li>
              <li>Database management</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Account Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be 13 years or older to use this Service.</li>
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You are responsible for all content posted and activity under your account.</li>
              <li>You may not use the Service for any illegal purposes or to violate any laws.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="mb-4">
              Some of our Services are provided on a subscription basis. By choosing a paid subscription, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate billing information</li>
              <li>Pay all fees at the time they are due</li>
              <li>Maintain valid payment information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services to violate any law or regulation</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Use the Services to transmit malware or viruses</li>
              <li>Engage in abusive or excessive usage of the Services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>
              The Services and all related software, including our platform, are protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used without our prior written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Services at any time for any reason without notice. Upon termination, your right to use the Services will immediately cease.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@veloce.dev" className="text-primary-500 hover:text-primary-600">
                legal@veloce.dev
              </a>
            </p>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
} 
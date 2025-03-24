import DefaultLayout from "@/layouts/default";

export default function PrivacyPage() {
  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: March 19, 2024
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3">Information you provide to us:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Account information (name, email, password)</li>
              <li>Billing information</li>
              <li>Project and deployment configurations</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Information we automatically collect:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usage information</li>
              <li>Log data</li>
              <li>Device information</li>
              <li>Cookie data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Prevent fraud and abuse</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
            <p>
              Your data is stored in secure cloud infrastructure with encryption at rest and in transit. We regularly review and update our security practices to enhance protection.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to our processing of your data</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
            <p>
              Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@veloce.dev" className="text-primary-500 hover:text-primary-600">
                privacy@veloce.dev
              </a>
            </p>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
} 
import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";
import { NetworkIcon, ShieldIcon, LockIcon, ServerIcon, CloudIcon } from "@/components/icons";

export default function NetworkingFeatures() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Secure <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Zero-Trust</span> Networking
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Connect your applications, databases, and development machines with instant WireGuard® VPN tunnels and zero-config service discovery.
          </motion.p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* WireGuard VPN */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <LockIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant WireGuard® VPN</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Secure, high-performance VPN tunnels between your deployments and development machines. Connect to your resources from anywhere.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One-click VPN setup</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-region connectivity</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>End-to-end encryption</span>
                </li>
              </ul>
            </div>

            {/* Service Discovery */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mb-6">
                <NetworkIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Zero-Config Service Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Automatic service discovery and DNS resolution for all your deployments. No more managing IP addresses or complex networking configs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatic DNS resolution</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Service health monitoring</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cross-region connectivity</span>
                </li>
              </ul>
            </div>

            {/* Private Networks */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-6">
                <ShieldIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Private Networks</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Isolate your applications and databases in private networks. Full control over network topology and access policies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Network isolation</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom network policies</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Traffic monitoring</span>
                </li>
              </ul>
            </div>

            {/* Database Access */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                <ServerIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Database Access</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Connect to your databases securely through encrypted tunnels. No need to expose database ports to the public internet.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Encrypted connections</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access control</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connection monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">1. Connect Your Resources</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Install our lightweight agent on your development machine or server. One command to join the network.
                </p>
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl">
                <pre className="text-sm font-mono"><code>veloce network join</code></pre>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">2. Automatic Service Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Services automatically discover each other using DNS. No configuration needed.
                </p>
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl">
                <pre className="text-sm font-mono"><code>ping my-app.internal</code></pre>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">3. Secure Access</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect to your databases and services through encrypted tunnels from anywhere.
                </p>
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl">
                <pre className="text-sm font-mono"><code>psql postgres://db.internal:5432</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Deploy your first application and experience seamless networking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "solid",
                  size: "lg",
                  className: "font-medium"
                })}
              >
                Start for Free
              </Link>
              <Link
                href="/docs/networking"
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  size: "lg",
                  className: "font-medium"
                })}
              >
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} 
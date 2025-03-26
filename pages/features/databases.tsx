import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";
import { DatabaseIcon, LockIcon, NetworkIcon, CloudIcon } from "@/components/icons";

type Database = {
  name: string;
  description: string;
  versions: string[];
  features: string[];
  icon: string; // We'll use emoji for now, but we can create proper icons later
};

export default function DatabaseFeatures() {
  const databases: Database[] = [
    {
      name: "PostgreSQL",
      description: "Advanced open-source relational database with powerful features",
      versions: ["15", "14", "13"],
      features: [
        "Full JSON support",
        "Advanced indexing",
        "Robust replication",
        "Geographic queries",
      ],
      icon: "🐘"
    },
    {
      name: "MySQL",
      description: "World's most popular open source database",
      versions: ["8.0", "5.7"],
      features: [
        "High availability",
        "Scalable replication",
        "Enterprise backup",
        "Strong consistency",
      ],
      icon: "🐬"
    },
    {
      name: "MariaDB",
      description: "Community-developed fork of MySQL",
      versions: ["10.11", "10.6"],
      features: [
        "Drop-in MySQL replacement",
        "Enhanced features",
        "Better performance",
        "More storage engines",
      ],
      icon: "🔷"
    },
    {
      name: "Redis",
      description: "In-memory data structure store",
      versions: ["7.0", "6.2"],
      features: [
        "Caching",
        "Real-time analytics",
        "Queue management",
        "Pub/Sub messaging",
      ],
      icon: "⚡"
    },
    {
      name: "MongoDB",
      description: "Document-oriented NoSQL database",
      versions: ["6.0", "5.0"],
      features: [
        "Document model",
        "Horizontal scaling",
        "Rich queries",
        "Cloud-native",
      ],
      icon: "🍃"
    },
    {
      name: "Dragonfly",
      description: "Modern Redis alternative with better memory efficiency",
      versions: ["1.0"],
      features: [
        "Redis compatible",
        "Lower memory usage",
        "Multi-threading",
        "MVCC architecture",
      ],
      icon: "🐲"
    },
    {
      name: "ElasticDB",
      description: "Distributed search and analytics engine",
      versions: ["8.x", "7.x"],
      features: [
        "Full-text search",
        "Log analytics",
        "Application monitoring",
        "Security analytics",
      ],
      icon: "🔍"
    },
  ];

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
            Managed <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Databases</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Deploy production-ready databases with built-in high availability, backups, and secure access via WireGuard® VPN.
          </motion.p>
        </div>
      </section>

      {/* Database Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {databases.map((db) => (
              <motion.div
                key={db.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{db.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{db.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{db.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Supported versions: </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {db.versions.map((version) => (
                      <span
                        key={version}
                        className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                      >
                        {version}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {db.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Options */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Secure Database Access</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <LockIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Private VPN Access</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Access your databases securely through WireGuard® VPN tunnels. Perfect for development and secure production access.
              </p>
              <pre className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg text-sm font-mono mb-4">
                <code>$ veloce db connect my-postgres --vpn</code>
              </pre>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mb-6">
                <NetworkIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Public Access</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Optionally expose your database with TLS encryption and IP restrictions for public access.
              </p>
              <pre className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg text-sm font-mono mb-4">
                <code>$ veloce db expose my-postgres --allowed-ips="10.0.0.0/8"</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Request Database Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Need a different database?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're constantly adding support for new databases. Let us know what you need!
            </p>
            <Link
              href="/contact?type=database-request"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "solid",
                size: "lg",
                className: "font-medium"
              })}
            >
              Request a Database
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} 
  
  import { Link } from "@heroui/link";
  import { button as buttonStyles } from "@heroui/theme";
  import DefaultLayout from "@/layouts/default";
  import { RocketIcon, NetworkIcon, ShieldIcon, ScaleIcon, GitIcon, TerminalIcon } from "@/components/icons";
  
  export default function FeaturesPage() {
    return (
      <DefaultLayout>
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in" style={{animationFillMode: "forwards"}}>
              Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">features</span> for modern developers
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in" style={{animationDelay: "200ms", animationFillMode: "forwards"}}>
              Everything you need to deploy, scale, and manage your applications with confidence.
            </p>
          </div>
        </section>
  
        {/* Main Features Grid */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                    <RocketIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Global Edge Network</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Deploy your applications to our global network of edge servers for maximum performance and reliability.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">30+ global regions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Anycast routing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">DDoS protection included</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "400ms", animationFillMode: "forwards"}}>
                <div className="p-8">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mb-6">
                    <GitIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Git-Based Deployments</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Deploy directly from your Git repository with a simple push. No complex CI/CD setup required.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">GitHub, GitLab, Bitbucket</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Branch-based environments</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Preview deployments</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
                <div className="p-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <ShieldIcon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Built-in security features to protect your applications and data at every level.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">SSL/TLS encryption</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Role-based access control</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">VPC isolation</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "600ms", animationFillMode: "forwards"}}>
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                    <ScaleIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Auto-Scaling</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Automatically scale your applications up or down based on traffic and resource usage.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Horizontal scaling</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Load-based scaling</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Scheduled scaling</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "700ms", animationFillMode: "forwards"}}>
                <div className="p-8">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mb-6">
                    <NetworkIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Zero-Config Networking</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Automatic service discovery and networking without complex configuration.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Service discovery</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Private networking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Automatic DNS</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "800ms", animationFillMode: "forwards"}}>
                <div className="p-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <TerminalIcon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Developer Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Tools and features designed to make developers more productive.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">CLI tools</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Local development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Comprehensive API</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Comparison Section */}
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Veloce?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how Veloce compares to other deployment platforms and cloud providers.
              </p>
            </div>
  
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="px-6 py-4 text-left text-gray-500 dark:text-gray-400 font-medium">Feature</th>
                    <th className="px-6 py-4 text-center text-primary-600 dark:text-primary-400 font-semibold">Veloce</th>
                    <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-400 font-medium">Vercel</th>
                    <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-400 font-medium">Netlify</th>
                    <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-400 font-medium">AWS/GCP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Deployment Speed</td>
                    <td className="px-6 py-4 text-center text-green-500">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">~30 seconds</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">~1 minute</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">~2 minutes</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-sm">10+ minutes</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Backend Support</td>
                    <td className="px-6 py-4 text-center text-green-500">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Full Stack</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="text-sm">Serverless Only</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="text-sm">Functions Only</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">Full Stack</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Configuration</td>
                    <td className="px-6 py-4 text-center text-green-500">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Zero-config</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">Minimal</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="text-sm">Moderate</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span className="text-sm">Complex</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Database Support</td>
                    <td className="px-6 py-4 text-center text-green-500">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Built-in</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="text-sm">Third-party</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="text-sm">Third-party</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">Managed</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Pricing Model</td>
                    <td className="px-6 py-4 text-center text-green-500">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Simple, Fixed</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="text-sm">Usage-based</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="text-sm">Usage-based</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span className="text-sm">Complex</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
  
    {/* CTA Section */}
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-bl-[100px] -z-10 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary-100 to-accent/10 dark:from-secondary-900/30 dark:to-accent/30 rounded-tr-[100px] -z-10 opacity-70"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get started?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Deploy your first application in minutes. No credit card required.
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
              href="/docs"
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                size: "lg",
                className: "font-medium"
              })}
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Technical Features Section */}
  <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Built with modern technologies for reliability, scalability, and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Tech Spec Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md opacity-0 animate-fade-in" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
          <h3 className="text-lg font-semibold mb-4">Runtime Support</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Node.js 14, 16, 18</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Python 3.7+</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Go 1.16+</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Ruby 2.7+</span>
            </li>
          </ul>
        </div>

        {/* Tech Spec Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md opacity-0 animate-fade-in" style={{animationDelay: "400ms", animationFillMode: "forwards"}}>
          <h3 className="text-lg font-semibold mb-4">Database Support</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">PostgreSQL 13+</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">MySQL 8+</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">MongoDB 4.4+</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Redis 6+</span>
            </li>
          </ul>
        </div>

        {/* Tech Spec Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md opacity-0 animate-fade-in" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
          <h3 className="text-lg font-semibold mb-4">Infrastructure</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Kubernetes-native</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Docker support</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Custom domains</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">SSL certificates</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</DefaultLayout> )
}
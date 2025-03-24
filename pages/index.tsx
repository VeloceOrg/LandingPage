import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { RocketIcon, NetworkIcon, ShieldIcon, ScaleIcon, GitIcon, TerminalIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import ParticleNetwork from "@/components/ui/ParticleNetork";
import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <ParticleNetwork />
          {/* Glow effects */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <motion.div
                className="h-[600px] w-[600px] bg-blue-500 rounded-full filter blur-[150px]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
            />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02] bg-[length:20px_20px]"/>

      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-16">
        <div className="flex flex-col items-center px-6 text-center max-w-4xl mx-auto">
          {/* Floating badge */}
          <div className="relative mb-8 animate-fade-in">
            <span className="relative inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 border border-primary-200 dark:border-primary-800 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse mr-2"></span>
              Deploy anything, anywhere
            </span>
          </div>
          
          {/* Main Heading with animated gradient */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              The <span className="relative">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-violet-500/20 blur"></span>
                <span className="relative text-primary">modern</span>
              </span> way to deploy
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Self-hostable platform with global edge network, zero-config networking, 
              and hardware isolation. If it runs on Linux, it runs on Veloce.
            </p>
          </div>

          {/* Terminal demo */}
          <div className="w-full max-w-lg mx-auto mt-10 mb-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg animate-slide-up animation-delay-200">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">terminal</div>
            </div>
            <div className="bg-gray-900 p-4 font-mono text-sm text-gray-200">
              <div className="flex items-start">
                <span className="text-green-400 mr-2">$</span>
                <div className="flex-1">
                  <span className="typing-animation">git push veloce main</span>
                  <div className="mt-2 text-gray-400">→ Deploying to production...</div>
                  <div className="text-gray-400">→ Building application...</div>
                  <div className="text-gray-400">→ Running tests...</div>
                  <div className="text-green-400 mt-1">✓ Deployed to production! https://myapp.veloce.dev</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-2 animate-slide-up animation-delay-300">
            <Link
              href="/signup"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "solid",
                size: "lg",
                className: "font-medium px-6 py-3 bg-primary text-white hover:bg-primary/90"
              })}
            >
              Start Deploying
            </Link>
            <Link
              href="/docs"
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                size: "lg",
                className: "font-medium px-6 py-3 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              })}
            >
              Read Documentation
            </Link>
          </div>
          
          {/* Stats with hover effects */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 animate-fade-in animation-delay-500">
            <div className="group px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors duration-300">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>Trusted by 1000+ developers</span>
              </div>
            </div>
            <div className="group px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors duration-300">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H5.5z"></path>
                </svg>
                <span>99.9% uptime SLA</span>
              </div>
            </div>
            <div className="group px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors duration-300">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                <span>Open source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">Features</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Everything you need to deploy</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Built for developers who want complete control without the complexity
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-sm group">
              <div className="flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <RocketIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Global Edge Network</h3>
                <p className="text-gray-600 dark:text-gray-400">Deploy your apps on our global Anycast network for maximum performance and reliability</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-sm group">
              <div className="flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <NetworkIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Zero-Config Networking</h3>
                <p className="text-gray-600 dark:text-gray-400">Private networking and WireGuard VPN connections work out of the box</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-sm group">
              <div className="flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <ShieldIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Hardware Isolation</h3>
                <p className="text-gray-600 dark:text-gray-400">Dedicated resources ensure consistent performance for your applications</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-sm group">
              <div className="flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <ScaleIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Push Button Scaling</h3>
                <p className="text-gray-600 dark:text-gray-400">Scale from one to thousands of instances with a single click</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-sm group">
              <div className="flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <GitIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Git Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">Deploy directly from your Git repository with automatic builds</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-sm group">
              <div className="flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <TerminalIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Developer Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">Beautiful dashboard and CLI tools make deployment a breeze</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">Workflow</span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Deploy in seconds</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              From code to production in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-semibold mt-2 mb-3 text-gray-900 dark:text-white">Connect your repo</h3>
              <p className="text-gray-600 dark:text-gray-400">Link your GitHub, GitLab, or Bitbucket repository to Veloce</p>
            </div>
            
            <div className="relative p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-semibold mt-2 mb-3 text-gray-900 dark:text-white">Configure your app</h3>
              <p className="text-gray-600 dark:text-gray-400">Set environment variables, scaling options, and networking preferences</p>
            </div>
            
            <div className="relative p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-semibold mt-2 mb-3 text-gray-900 dark:text-white">Push and deploy</h3>
              <p className="text-gray-600 dark:text-gray-400">Push to your deployment branch and watch Veloce do the rest</p>
            </div>
          </div>
          
          <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 text-lg font-mono">
              <span className="text-green-600 dark:text-green-500">$</span>
              <span className="text-gray-800 dark:text-gray-300">git push veloce main</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-primary-50 to-violet-50 dark:from-primary-900/20 dark:to-violet-900/20 border border-primary-100 dark:border-primary-800/30">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to deploy faster?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are shipping applications with Veloce
            </p>
            <Link
              href="/signup"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "solid",
                size: "lg",
              })}
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

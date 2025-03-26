import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { motion } from "framer-motion";

import { RocketIcon, NetworkIcon, ShieldIcon, ScaleIcon, GitIcon, TerminalIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import ParticleNetwork from "@/components/ui/ParticleNetork";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <ParticleNetwork />
      {/* Glow effects */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02] bg-[length:20px_20px]"/>

      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-16">
        <div className="flex flex-col items-center px-6 text-center max-w-4xl mx-auto">
          {/* Floating badge */}
          <div className="relative mb-8 opacity-100">
            <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full 
              bg-primary-100 dark:bg-primary-900/30 
              text-primary-600 dark:text-primary-300 
              border border-primary-200 dark:border-primary-800 
              backdrop-blur-sm
            ">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse mr-2"></span>
              Deploy anything, anywhere
            </span>
          </div>

          
          {/* Main Heading with animated gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-in" style={{animationFillMode: "forwards"}}>
            <span className="block opacity-0 translate-y-4 animate-slide-up" style={{animationDelay: "100ms", animationFillMode: "forwards"}}>
              The{" "}
              <motion.span 
                className="relative inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.span 
                  className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-violet-500/20 blur"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-violet-600 dark:from-primary-400 dark:to-violet-400 animate-gradient-x">
                  modern
                </span>
              </motion.span>
              {" "}way to
            </span>
            
            <motion.span 
              className="block mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-violet-500 animate-gradient-x">
                deploy anything
              </span>
            </motion.span>
          </h1>
          <br />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
            Self-hostable platform with global edge network, zero-config networking, 
            and hardware isolation. If it runs on Linux, it runs on Veloce.
          </p>
        </div>

        {/* Terminal demo */}
        <div className="w-full max-w-lg mx-auto mt-10 mb-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg opacity-0 translate-y-4 animate-slide-up" style={{animationDelay: "200ms", animationFillMode: "forwards"}}>
          {/* Terminal header */}
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">~/myapp</div>
              <motion.div 
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                className="w-2 h-4 bg-primary-400/50"
              />
            </div>
          </div>

          {/* Terminal content */}
          <div className="bg-gray-900 p-4 font-mono text-sm">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-start"
            >
              <span className="text-green-400 mr-2">$</span>
              <motion.div className="flex-1">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="inline-block whitespace-nowrap overflow-hidden"
                  style={{ borderRight: "2px solid #63E6BE" }}
                >
                  git push veloce main
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ delay: 1.8 }}
                  className="mt-2 space-y-1"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                    className="text-gray-400"
                  >
                    → Deploying to production...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.3 }}
                    className="text-gray-400"
                  >
                    → Building application...
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 2.4, duration: 1 }}
                      className="ml-2 inline-block bg-gray-700 h-1 w-24 rounded"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.6 }}
                    className="text-gray-400"
                  >
                    → Running tests...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3 }}
                    className="flex items-center text-green-400"
                  >
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 3.2, type: "spring" }}
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </motion.svg>
                    <span>Deployed to production! </span>
                    <Link 
                      href="https://myapp.veloce.dev"
                      className="ml-1 text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      https://myapp.veloce.dev
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: 3.5,
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="inline-block w-2 h-4 ml-1 bg-gray-400"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2 opacity-0 translate-y-4 animate-slide-up" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
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
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 opacity-0 animate-fade-in" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
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
      </section>

      {/* Features Section with Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold mb-4 opacity-0 translate-y-4 animate-slide-up"
              style={{animationDelay: "100ms", animationFillMode: "forwards"}}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-violet-600 dark:from-primary-400 dark:to-violet-400">
                Everything
              </span> you need to deploy
            </h2>
            <p 
              className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto opacity-0 translate-y-4 animate-slide-up"
              style={{animationDelay: "200ms", animationFillMode: "forwards"}}
            >
              Built for developers who want complete control without the complexity
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div 
              className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative group overflow-hidden shadow-sm opacity-0 translate-y-4 animate-slide-up"
              style={{animationDelay: "100ms", animationFillMode: "forwards"}}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[2px] rounded-lg bg-white dark:bg-gray-900 -z-10"></div>
              
              <div className="flex flex-col gap-5 relative z-10">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <RocketIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Global Edge Network</h3>
                <p className="text-gray-600 dark:text-gray-400">Deploy your apps on our global Anycast network for maximum performance and reliability</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative group overflow-hidden shadow-sm opacity-0 translate-y-4 animate-slide-up" style={{animationDelay: "200ms", animationFillMode: "forwards"}}>
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[2px] rounded-lg bg-white dark:bg-gray-900 -z-10"></div>
              
              <div className="flex flex-col gap-5 relative z-10">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <NetworkIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Zero-Config Networking</h3>
                <p className="text-gray-600 dark:text-gray-400">Private networking and WireGuard VPN connections work out of the box</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative group overflow-hidden shadow-sm opacity-0 translate-y-4 animate-slide-up" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[2px] rounded-lg bg-white dark:bg-gray-900 -z-10"></div>
              
              <div className="flex flex-col gap-5 relative z-10">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <ShieldIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Hardware Isolation</h3>
                <p className="text-gray-600 dark:text-gray-400">Dedicated resources ensure consistent performance for your applications</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative group overflow-hidden shadow-sm opacity-0 translate-y-4 animate-slide-up" style={{animationDelay: "400ms", animationFillMode: "forwards"}}>
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[2px] rounded-lg bg-white dark:bg-gray-900 -z-10"></div>
              
              <div className="flex flex-col gap-5 relative z-10">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <ScaleIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Push Button Scaling</h3>
                <p className="text-gray-600 dark:text-gray-400">Scale from one to thousands of instances with a single click</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative group overflow-hidden shadow-sm opacity-0 translate-y-4 animate-slide-up" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[2px] rounded-lg bg-white dark:bg-gray-900 -z-10"></div>
              
              <div className="flex flex-col gap-5 relative z-10">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <GitIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Git Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">Deploy directly from your Git repository with automatic builds</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative group overflow-hidden shadow-sm opacity-0 translate-y-4 animate-slide-up" style={{animationDelay: "600ms", animationFillMode: "forwards"}}>
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[2px] rounded-lg bg-white dark:bg-gray-900 -z-10"></div>
              
              <div className="flex flex-col gap-5 relative z-10">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <TerminalIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Developer Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">Beautiful dashboard and CLI tools make deployment a breeze</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-primary-400/20 via-violet-400/20 to-blue-400/20 blur-3xl dark:from-primary-900/30 dark:via-violet-900/30 dark:to-blue-900/30" />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block opacity-0 translate-y-4 animate-slide-up"
              style={{animationFillMode: "forwards"}}
            >
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-primary-100 to-violet-100 dark:from-primary-900/40 dark:to-violet-900/40 text-primary-600 dark:text-primary-400 border border-primary-200/50 dark:border-primary-800/50 shadow-sm mb-4">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-primary animate-pulse-dot"></span>
                Workflow
              </span>
            </div>
            <h2 
              className="text-3xl font-bold mb-4 opacity-0 translate-y-4 animate-slide-up"
              style={{animationDelay: "100ms", animationFillMode: "forwards"}}
            >
              Deploy in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">seconds</span>
            </h2>
            <p 
              className="mt-4 text-xl text-gray-600 dark:text-gray-400 opacity-0 translate-y-4 animate-slide-up"
              style={{animationDelay: "200ms", animationFillMode: "forwards"}}
            >
              From code to production in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div 
              className="relative p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-200 opacity-0 translate-y-4 animate-slide-up"
              style={{animationDelay: "100ms", animationFillMode: "forwards"}}
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 blur-sm opacity-80"></div>
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-primary-500 to-violet-500"></div>
                <span className="relative text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold mt-2 mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Connect your repo</h3>
              <p className="text-gray-600 dark:text-gray-400">Link your GitHub, GitLab, or Bitbucket repository to Veloce</p>
            </div>
            
            <div 
              className="relative p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-200 opacity-0 translate-y-4 animate-slide-up"
              style={{animationDelay: "200ms", animationFillMode: "forwards"}}
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 blur-sm opacity-80"></div>
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500"></div>
                <span className="relative text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold mt-2 mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Configure your app</h3>
              <p className="text-gray-600 dark:text-gray-400">Set environment variables, scaling options, and networking preferences</p>
            </div>
            
            <div 
              className="relative p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-200 opacity-0 translate-y-4 animate-slide-up"
              style={{animationDelay: "300ms", animationFillMode: "forwards"}}
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-sm opacity-80"></div>
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                <span className="relative text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold mt-2 mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Push and deploy</h3>
              <p className="text-gray-600 dark:text-gray-400">Push to your deployment branch and watch Veloce do the rest</p>
            </div>
          </div>
          
          <div 
            className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden relative hover:shadow-lg transition-all duration-200 opacity-0 translate-y-4 animate-slide-up"
            style={{animationDelay: "400ms", animationFillMode: "forwards"}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
            <div className="relative flex items-center gap-2 text-lg font-mono">
              <span className="text-green-600 dark:text-green-500">$</span>
              <span className="text-gray-800 dark:text-gray-300 animate-typing">
                git push veloce main
              </span>
            </div>
            <div
              className="mt-4 space-y-1 text-sm opacity-0 animate-fade-in"
              style={{animationDelay: "1s", animationFillMode: "forwards"}}
            >
              <p className="text-gray-500 dark:text-gray-400">→ Deploying to production...</p>
              <p className="text-gray-500 dark:text-gray-400">→ Building application...</p>
              <p className="text-gray-500 dark:text-gray-400">→ Running tests...</p>
              <p className="text-green-600 dark:text-green-400 font-medium">✓ Deployed to production! https://myapp.veloce.dev</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 opacity-0 animate-fade-in">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-primary-400/10 via-violet-400/10 to-blue-400/10 blur-3xl dark:from-primary-900/20 dark:via-violet-900/20 dark:to-blue-900/20" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="p-10 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg relative overflow-hidden opacity-0 translate-y-4 animate-slide-up"
            style={{animationDelay: "100ms", animationFillMode: "forwards"}}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100 to-violet-100 dark:from-primary-900/30 dark:to-violet-900/30 rounded-bl-[100px] -z-10 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-tr-[100px] -z-10 opacity-70"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x">deploy faster</span>?
              </h2>
              
              <p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto opacity-0 translate-y-4 animate-slide-up"
                style={{animationDelay: "200ms", animationFillMode: "forwards"}}
              >
                Join thousands of developers who are shipping applications with Veloce
              </p>
              
              <div
                className="opacity-0 scale-95 animate-fade-scale-in"
                style={{animationDelay: "300ms", animationFillMode: "forwards"}}
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary-500 to-violet-500 hover:from-primary-600 hover:to-violet-600 rounded-full shadow-md hover:shadow-lg hover:scale-103 active:scale-98 transition-all duration-300 gap-2"
                >
                  <span>Get Started for Free</span>
                  <svg 
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
              
              <div 
                className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 opacity-0 animate-fade-in"
                style={{animationDelay: "400ms", animationFillMode: "forwards"}}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Free tier available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

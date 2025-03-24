import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in" style={{animationFillMode: "forwards"}}>
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Veloce</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in" style={{animationDelay: "200ms", animationFillMode: "forwards"}}>
            We're building the next generation of cloud deployment platforms, designed for developers who want complete control without the complexity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Veloce was founded with a simple mission: make deployment so simple that developers can focus on building great software, not managing infrastructure.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe that deployment should be as simple as a git push, but with the power and flexibility of a fully-featured cloud platform.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg opacity-0 animate-fade-in" style={{animationDelay: "400ms", animationFillMode: "forwards"}}>
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-500/90 to-secondary-500/90 p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl font-bold mb-4">2023</div>
                  <div className="text-xl">Founded to revolutionize cloud deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate engineers and designers who love building tools that make developers' lives easier.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden opacity-0 animate-fade-in" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
              <div className="h-48 bg-gradient-to-r from-primary-400 to-secondary-400"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Alex Chen</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Founder & CEO</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Previously led infrastructure teams at AWS and Google Cloud.
                </p>
              </div>
            </div>

            {/* Team Member Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden opacity-0 animate-fade-in" style={{animationDelay: "400ms", animationFillMode: "forwards"}}>
              <div className="h-48 bg-gradient-to-r from-secondary-400 to-accent"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Sophia Rodriguez</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">CTO</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  10+ years experience building distributed systems at scale.
                </p>
              </div>
            </div>

            {/* Team Member Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden opacity-0 animate-fade-in" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
              <div className="h-48 bg-gradient-to-r from-accent to-primary-400"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Marcus Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Head of Engineering</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Former lead architect at Kubernetes and Docker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md opacity-0 animate-fade-in" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Speed & Simplicity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe that deployment should be fast, simple, and get out of your way so you can focus on building great software.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md opacity-0 animate-fade-in" style={{animationDelay: "400ms", animationFillMode: "forwards"}}>
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Security First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Security is built into everything we do, from our infrastructure to our deployment processes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md opacity-0 animate-fade-in" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build systems that you can depend on, with redundancy and failover built in at every level.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md opacity-0 animate-fade-in" style={{animationDelay: "600ms", animationFillMode: "forwards"}}>
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of community and open source. We're building Veloce with and for the developer community.
              </p>
            </div>
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
                Join us on our mission
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented people to join our team. Check out our open positions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/careers"
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "solid",
                    size: "lg",
                    className: "font-medium"
                  })}
                >
                  View Open Positions
                </Link>
                
                <Link
                  href="/contact"
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    size: "lg",
                    className: "font-medium"
                  })}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

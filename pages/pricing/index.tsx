import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

export default function PricingPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in" style={{animationFillMode: "forwards"}}>
            Simple, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">transparent</span> pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in" style={{animationDelay: "200ms", animationFillMode: "forwards"}}>
            No hidden fees, no surprises. Choose the plan that works best for your needs.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Free</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Perfect for personal projects and experimentation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">1 concurrent app</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Shared compute resources</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">512MB RAM / 1GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Community support</span>
                  </li>
                </ul>
                <Link
                  href="/signup"
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "bordered",
                    size: "lg",
                    className: "w-full justify-center"
                  })}
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border-2 border-primary-500 dark:border-primary-400 relative opacity-0 animate-fade-in" style={{animationDelay: "400ms", animationFillMode: "forwards"}}>
              <div className="absolute top-0 inset-x-0 bg-primary-500 dark:bg-primary-400 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-8 pt-10">
                <h3 className="text-xl font-semibold mb-4">Pro</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  For professional developers and small teams.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">5 concurrent apps</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Dedicated compute resources</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">2GB RAM / 10GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Custom domains</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Email support</span>
                  </li>
                </ul>
                <Link
                  href="/signup"
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "solid",
                    size: "lg",
                    className: "w-full justify-center"
                  })}
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  For organizations with advanced needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Unlimited apps</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Custom resource allocation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">SSO & advanced security</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Dedicated support</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className={buttonStyles({
                    color: "secondary",
                    radius: "full",
                    variant: "bordered",
                    size: "lg",
                    className: "w-full justify-center"
                  })}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 opacity-0 animate-fade-in" style={{animationDelay: "300ms", animationFillMode: "forwards"}}>
              <h3 className="text-xl font-semibold mb-3">Can I upgrade or downgrade my plan at any time?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 opacity-0 animate-fade-in" style={{animationDelay: "400ms", animationFillMode: "forwards"}}>
              <h3 className="text-xl font-semibold mb-3">Do you offer a free trial?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, all paid plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 opacity-0 animate-fade-in" style={{animationDelay: "500ms", animationFillMode: "forwards"}}>
              <h3 className="text-xl font-semibold mb-3">What happens if I exceed my plan limits?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We'll notify you when you're approaching your limits. If you exceed them, your apps will continue to run, but we may throttle performance until you upgrade or reduce usage.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 opacity-0 animate-fade-in" style={{animationDelay: "600ms", animationFillMode: "forwards"}}>
              <h3 className="text-xl font-semibold mb-3">Do you offer discounts for startups or non-profits?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer special pricing for eligible startups, non-profits, and educational institutions. Contact our sales team to learn more.
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
                Still have questions?
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is happy to help you find the right plan for your needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "solid",
                    size: "lg",
                    className: "font-medium"
                  })}
                >
                  Contact Sales
                </Link>
                
                <Link
                  href="/docs/pricing"
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    size: "lg",
                    className: "font-medium"
                  })}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

import DefaultLayout from "@/layouts/default";
import { Logo } from "@/components/icons";
import { AnimatedLogo } from "@/components/animated-logo";
import { motion } from "framer-motion";

export default function BrandPage() {
  const colorPalette = [
    { 
      name: "Primary", 
      colors: [
        { shade: 50, hex: "#F3F4FF" },
        { shade: 100, hex: "#E9EAFF" },
        { shade: 200, hex: "#D4D6FF" },
        { shade: 300, hex: "#B3B7FF" },
        { shade: 400, hex: "#8087FF" },
        { shade: 500, hex: "#4F46E5", description: "Primary brand color" },
        { shade: 600, hex: "#4338CA", description: "Interactive elements" },
        { shade: 700, hex: "#3730A3", description: "Hover states" },
        { shade: 800, hex: "#312E81", description: "Active states" },
        { shade: 900, hex: "#23215B", description: "Text on light backgrounds" }
      ]
    },
    { 
      name: "Secondary", 
      colors: [
        { shade: 50, hex: "#F5F3FF" },
        { shade: 100, hex: "#EDE9FE" },
        { shade: 200, hex: "#DDD6FE" },
        { shade: 300, hex: "#C4B5FD" },
        { shade: 400, hex: "#A78BFA" },
        { shade: 500, hex: "#8B5CF6", description: "Secondary brand color" },
        { shade: 600, hex: "#7C3AED", description: "Interactive elements" },
        { shade: 700, hex: "#6D28D9", description: "Hover states" },
        { shade: 800, hex: "#5B21B6", description: "Active states" },
        { shade: 900, hex: "#4C1D95", description: "Text on light backgrounds" }
      ]
    }
  ];

  const colorCombinations = [
    {
      name: "Primary CTAs",
      background: "bg-primary-500",
      text: "text-white",
      hover: "hover:bg-primary-600",
      description: "Use for main call-to-action buttons"
    },
    {
      name: "Secondary CTAs",
      background: "bg-secondary-500",
      text: "text-white",
      hover: "hover:bg-secondary-600",
      description: "Use for alternative actions"
    },
    {
      name: "Ghost Buttons",
      background: "bg-white/10",
      text: "text-primary-500",
      hover: "hover:bg-primary-50",
      description: "Use for tertiary actions"
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in" style={{animationFillMode: "forwards"}}>
            Veloce <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Brand Kit</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in" style={{animationDelay: "200ms", animationFillMode: "forwards"}}>
            Comprehensive brand guidelines and assets for creating consistent Veloce experiences
          </p>
        </div>
      </section>

      {/* Logo Section with Download Options */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Logo</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Our logo represents speed and reliability. The minimum clear space around the logo should be equal to the height of the "e" in the wordmark.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <AnimatedLogo />
            </div>
            <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center border border-gray-700">
              <AnimatedLogo />
            </div>
          </div>

          {/* Logo Downloads */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="/brand/logo.png" download className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors">
              <span>Logo Light (PNG)</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>
            <a href="/brand/logo.png" download className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors">
              <span>Logo Dark (PNG)</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>
            <a href="/brand/logo.png" download className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors">
              <span>Symbol Only (PNG)</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>
          </div>

          {/* Logo Usage Guidelines */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Usage Guidelines</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Maintain aspect ratio when scaling</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Use provided color variations only</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <span>Don't modify or distort the logo</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Colors Section with Enhanced Information */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Colors</h2>
          <div className="space-y-12">
            {colorPalette.map(({ name, colors }) => (
              <div key={name}>
                <h3 className="text-xl font-semibold mb-6">{name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {colors.map(({ shade, hex, description }) => (
                    <motion.div 
                      key={`${name}-${shade}`}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                    >
                      <div 
                        className="h-24 w-full"
                        style={{ backgroundColor: hex }}
                      />
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{shade}</span>
                          <span className="font-mono text-sm">{hex}</span>
                        </div>
                        {description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                        )}
                        <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-xs font-mono">
                            var(--color-{name.toLowerCase()}-{shade})
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* Color Combinations */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Color Combinations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {colorCombinations.map((combo) => (
                  <div key={combo.name} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium mb-4">{combo.name}</h4>
                    <div className={`${combo.background} ${combo.text} rounded-lg p-4 mb-4 text-center`}>
                      Sample Button
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{combo.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <code className="text-xs block mb-1">{combo.background}</code>
                      <code className="text-xs block mb-1">{combo.text}</code>
                      <code className="text-xs block">{combo.hover}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6">Headings</h3>
              <div className="space-y-4">
                <div>
                  <h1 className="text-5xl font-bold">Heading 1</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">text-5xl font-bold</p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold">Heading 2</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">text-4xl font-bold</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Heading 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">text-3xl font-bold</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Heading 4</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">text-2xl font-bold</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6">Body Text</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xl">Large Text</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">text-xl</p>
                </div>
                <div>
                  <p className="text-base">Regular Text</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">text-base</p>
                </div>
                <div>
                  <p className="text-sm">Small Text</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">text-sm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradients Section */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Gradients</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Primary Gradient</h3>
              <div className="h-32 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                bg-gradient-to-r from-primary-500 to-secondary-500
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Text Gradient</h3>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                Sample Text
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} 
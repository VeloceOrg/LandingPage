import DefaultLayout from "@/layouts/default";
import { Logo } from "@/components/icons";
import { AnimatedLogo } from "@/components/animated-logo";

export default function BrandPage() {
  const colorPalette = [
    { name: "Primary", colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { name: "Secondary", colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { name: "Accent", colors: ["DEFAULT"] },
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
            Official brand guidelines and assets for Veloce
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Logo</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <AnimatedLogo />
            </div>
            <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center border border-gray-700">
              <AnimatedLogo />
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <Logo className="h-12 w-12" />
            </div>
            <div className="bg-primary-500 rounded-xl p-8 flex items-center justify-center">
              <Logo className="h-12 w-12 text-white" />
            </div>
            <div className="bg-secondary-500 rounded-xl p-8 flex items-center justify-center">
              <Logo className="h-12 w-12 text-white" />
            </div>
            <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center">
              <Logo className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Colors</h2>
          <div className="space-y-8">
            {colorPalette.map(({ name, colors }) => (
              <div key={name}>
                <h3 className="text-xl font-semibold mb-4">{name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                  {colors.map((shade) => (
                    <div key={`${name}-${shade}`} className="space-y-2">
                      <div 
                        className={`h-20 rounded-lg shadow-sm bg-${name.toLowerCase()}-${shade}`}
                        style={{ 
                          backgroundColor: `rgb(var(--color-${name.toLowerCase()}${shade === "DEFAULT" ? "" : `-${shade}`}) / 1)` 
                        }}
                      />
                      <p className="text-sm font-medium">{shade}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        var(--color-{name.toLowerCase()}{shade === "DEFAULT" ? "" : `-${shade}`})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
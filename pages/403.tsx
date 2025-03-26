import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DefaultLayout from "@/layouts/default";
import { button as buttonStyles } from "@heroui/theme";
import Link from "next/link";

export default function Custom403() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lockAnimation = {
    initial: { scale: 1 },
    shake: {
      scale: [1, 1.02, 0.98, 1],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                >
                  🔒
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            variants={lockAnimation}
            initial="initial"
            animate="shake"
            className="text-6xl mb-8"
          >
            🔒
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-gray-900 dark:text-white mb-8">
              403
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Access Denied
            </h2>
            <p className="mt-4 mb-12 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Sorry, but you don't have permission to access this page.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                size: "lg",
                className: "font-medium"
              })}
            >
              Return Home
            </Link>
            <Link
              href="/login"
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                size: "lg",
                className: "font-medium"
              })}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
} 
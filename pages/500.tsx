import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DefaultLayout from "@/layouts/default";
import { button as buttonStyles } from "@heroui/theme";
import Link from "next/link";

export default function Custom500() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gearAnimation = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated gears background */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              variants={gearAnimation}
              animate="rotate"
              className="absolute -top-24 -left-24 w-96 h-96 border-8 border-primary-200 dark:border-primary-800 rounded-full opacity-20"
            />
            <motion.div
              variants={gearAnimation}
              animate="rotate"
              className="absolute -bottom-32 -right-32 w-[500px] h-[500px] border-8 border-secondary-200 dark:border-secondary-800 rounded-full opacity-20"
            />
          </div>
        )}

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
              500
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Internal Server Error
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Something went wrong on our end. We're working to fix it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </div>
    </DefaultLayout>
  );
} 
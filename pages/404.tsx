import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DefaultLayout from "@/layouts/default";
import { button as buttonStyles } from "@heroui/theme";
import Link from "next/link";

export default function Custom404() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Glitch animation for text layers
  const glitchLayers = [
    { color: "#FF0000", offset: -2 },
    { color: "#00FF00", offset: 2 },
    { color: "#0000FF", offset: -1 },
  ];

  return (
    <DefaultLayout>
      <div className="min-h-[80vh] relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_0),_linear-gradient(90deg,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Glowing orbs in background */}
        {mounted && (
          <>
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary-500/20 blur-[100px]"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                delay: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary-500/20 blur-[100px]"
            />
          </>
        )}

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
          {/* Glitch effect 404 */}
          <div className="relative mb-12">
            <motion.h1 
              className="text-[150px] md:text-[200px] font-bold text-white relative z-10"
            >
              404
            </motion.h1>
            
            {/* Glitch layers */}
            {glitchLayers.map((layer, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 text-[150px] md:text-[200px] font-bold"
                initial={{ opacity: 0.5 }}
                animate={{
                  x: [layer.offset, -layer.offset, layer.offset],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.1,
                }}
                style={{ color: layer.color }}
              >
                404
              </motion.div>
            ))}
          </div>

          {/* Error message with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12 relative"
          >
            <motion.div
              animate={{
                borderRight: ["2px solid rgba(255,255,255,0)", "2px solid rgba(255,255,255,1)"]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-2xl md:text-3xl font-mono text-white mb-4"
            >
              Error: Page_Not_Found
            </motion.div>
            <p className="text-gray-400 max-w-md mx-auto font-mono">
              {">"} The requested URL could not be located on this server.
            </p>
          </motion.div>

          {/* Action buttons with modern tech style */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className={buttonStyles({
                  color: "primary",
                  radius: "lg",
                  size: "lg",
                  className: "font-mono backdrop-blur-sm bg-white/5 border border-primary-500/50"
                })}
              >
                {">"} Return_Home()
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className={buttonStyles({
                  variant: "bordered",
                  radius: "lg",
                  size: "lg",
                  className: "font-mono text-white border-white/20"
                })}
              >
                {">"} Contact_Support()
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Scanlines effect */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
      </div>
    </DefaultLayout>
  );
}
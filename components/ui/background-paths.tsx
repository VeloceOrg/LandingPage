"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function FloatingPath({ delay }: { delay: number }) {
  return (
    <motion.path
      d="M0 100 Q 50 50, 100 100 T 200 100"
      stroke="currentColor"
      strokeWidth={2}
      strokeOpacity={0.5}
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: 1,
        opacity: [0, 1, 1, 0],
        translateX: ["0%", "100%"],
      }}
      transition={{
        duration: 8,
        delay,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      }}
    />
  )
}

export function BackgroundPaths() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 20000) // 20 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[...Array(10)].map((_, index) => (
          <FloatingPath key={index} delay={index * 0.5} />
        ))}
      </svg>
    </motion.div>
  )
}

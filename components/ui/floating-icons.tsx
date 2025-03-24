"use client"

import { motion } from "framer-motion"
import { Server, Shield, Zap, Database, Cloud, Lock, Monitor, Cpu } from "lucide-react"
import { useEffect, useState } from "react"

const iconComponents = [Server, Shield, Zap, Database, Cloud, Lock, Monitor, Cpu]

const FloatingIcon = ({ Icon, initialX, initialY }: { Icon: typeof Server; initialX: number; initialY: number }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY })

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        x: prev.x + (Math.random() - 0.5) * 50,
        y: prev.y + (Math.random() - 0.5) * 50,
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="absolute text-blue-500/20"
      initial={{ x: initialX, y: initialY }}
      animate={position}
      transition={{
        duration: 5,
        ease: "easeInOut",
      }}
    >
      <Icon size={48} />
    </motion.div>
  )
}

export const FloatingIcons = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return (
    <>
      {iconComponents.map((Icon, index) => (
        <FloatingIcon
          key={index}
          Icon={Icon}
          initialX={Math.random() * dimensions.width}
          initialY={Math.random() * dimensions.height}
        />
      ))}
    </>
  )
}

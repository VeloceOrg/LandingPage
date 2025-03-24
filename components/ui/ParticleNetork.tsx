'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme, resolvedTheme } = useTheme()
    const isDark = theme === 'dark' || resolvedTheme === 'dark'

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const setCanvasSize = () => {
            if (canvas) {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            }
        }
        setCanvasSize()
        window.addEventListener('resize', setCanvasSize)

        // Particle system
        const particles: Particle[] = []
        const particleCount = 50
        const connectionDistance = 150

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth
                this.y = Math.random() * canvasHeight
                this.vx = (Math.random() - 0.5) * 0.5
                this.vy = (Math.random() - 0.5) * 0.5
                this.size = 1
            }

            update(canvasWidth: number, canvasHeight: number) {
                this.x += this.vx
                this.y += this.vy

                if (this.x < 0 || this.x > canvasWidth) this.vx *= -1
                if (this.y < 0 || this.y > canvasHeight) this.vy *= -1
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = isDark 
                    ? 'rgba(100, 130, 255, 0.5)' 
                    : 'rgba(79, 70, 229, 0.5)'
                ctx.fill()
            }
        }

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(canvas.width, canvas.height))
        }

        // Animation loop
        function animate() {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particles.forEach(particle => {
                particle.update(canvas.width, canvas.height)
                particle.draw()

                // Draw connections
                particles.forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x
                    const dy = particle.y - otherParticle.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = isDark
                            ? `rgba(100, 130, 255, ${0.2 * (1 - distance / connectionDistance)})`
                            : `rgba(79, 70, 229, ${0.2 * (1 - distance / connectionDistance)})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(otherParticle.x, otherParticle.y)
                        ctx.stroke()
                    }
                })
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', setCanvasSize)
        }
    }, [isDark]) // Re-run when theme changes

    return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
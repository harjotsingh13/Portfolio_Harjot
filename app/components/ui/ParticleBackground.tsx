"use client"

import React, { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Adjust lines and particles color based on theme
    // For luxurious feel: Light mode -> elegant dark gray, Dark mode -> glowing silver/white
    const isDark = resolvedTheme === "dark"
    const particleColor = isDark ? "rgba(200, 200, 210, 0.5)" : "rgba(30, 30, 40, 0.7)"
    const lineColor = isDark ? "rgba(200, 200, 210, " : "rgba(30, 30, 40, "

    let width = window.innerWidth
    let height = window.innerHeight

    const initCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      
      const particleCount = window.innerWidth < 768 ? 40 : 90
      particles = []
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 0.5
        })
      }
    }

    initCanvas()

    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const handleMouseOut = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const handleResize = () => {
      initCanvas()
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseout", handleMouseOut)
    window.addEventListener("resize", handleResize)

    const drawLine = (p1: {x: number, y: number}, p2: {x: number, y: number}, opacity: number) => {
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.strokeStyle = `${lineColor}${opacity})`
      ctx.lineWidth = isDark ? 1 : 0.8
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      particles.forEach((p, i) => {
        // Move particle
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()

        // Connect near particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const minDist = 160

          if (dist < minDist) {
            const opacity = 1 - (dist / minDist)
            drawLine(p, p2, opacity * 0.25) // Subtle line connecting particles
          }
        }

        // Connect to mouse
        const dxMouse = p.x - mouseX
        const dyMouse = p.y - mouseY
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        const mouseRadius = 220

        if (distMouse < mouseRadius) {
           const opacity = 1 - (distMouse / mouseRadius)
           // slight pull towards mouse
           p.x -= dxMouse * 0.015
           p.y -= dyMouse * 0.015
           drawLine(p, {x: mouseX, y: mouseY}, opacity * 0.4)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mounted, resolvedTheme])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] opacity-70 transition-opacity duration-1000 md:opacity-100"
    />
  )
}

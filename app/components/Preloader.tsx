"use client"

import React, { useState, useEffect } from "react"
import { AnimatePresence } from "motion/react"
import { MotionDiv } from "../utils/lazy-ui"

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide the preloader after 3.5 seconds to allow full 3D sequence
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50 dark:bg-[#000]"
        >
          <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto h-[400px]" style={{ perspective: "1000px" }}>
            
            {/* The "H" */}
            <MotionDiv
              initial={{ x: "-40vw", opacity: 0, rotateY: -90 }}
              animate={{ 
                x: ["-40vw", "0vw", "0vw"], 
                opacity: [0, 1, 0],
                scale: [1, 1, 2],
                rotateY: [-90, 0, 0]
              }}
              transition={{ 
                duration: 2, 
                times: [0, 0.6, 1], // Merged at 1.2s, faded out at 2.0s
                ease: "easeInOut"
              }}
              className="absolute text-[120px] md:text-[200px] font-black tracking-tighter text-slate-900 dark:text-[#C0C0C0] drop-shadow-2xl mix-blend-difference dark:mix-blend-normal"
              style={{ originX: 0.5, originY: 0.5 }}
            >
              H
            </MotionDiv>

            {/* The "S" */}
            <MotionDiv
              initial={{ x: "40vw", opacity: 0, rotateY: 90 }}
              animate={{ 
                x: ["40vw", "0vw", "0vw"], 
                opacity: [0, 1, 0],
                scale: [1, 1, 2],
                rotateY: [90, 0, 0]
              }}
              transition={{ 
                duration: 2, 
                times: [0, 0.6, 1],
                ease: "easeInOut"
              }}
              className="absolute text-[120px] md:text-[200px] font-black tracking-tighter text-slate-900 dark:text-[#C0C0C0] drop-shadow-2xl mix-blend-difference dark:mix-blend-normal"
              style={{ originX: 0.5, originY: 0.5 }}
            >
              S
            </MotionDiv>

            {/* Glowing Flash in the center */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0, 1.5, 3] }}
              transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-slate-800 dark:bg-white blur-[60px]"
            />

            {/* Full Name Reveal with Increased Size */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)", y: 50 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
              className="absolute flex items-center justify-center text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tight text-slate-900 dark:text-[#C0C0C0] drop-shadow-[0_0_30px_rgba(192,192,192,0.5)] whitespace-nowrap"
            >
              HARJOT SINGH
            </MotionDiv>

          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

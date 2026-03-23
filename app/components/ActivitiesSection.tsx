"use client"
import React from "react"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { MotionDiv } from "../utils/lazy-ui"
import { Text } from "../ui/Elements"

const HACKER_LINES = [
  "1 0 1 1 0 1 0 0 0 0 0 0 1 1 1",
  "A F A F F A A F A F F A F A A",
  "X Z X Z Z X X Z Z X Z X X Z X",
  "0 1 0 0 1 1 1 0 1 0 0 0 1 0 0",
  "F A F A A F F A F A A F A F F",
  "Z X Z X X Z Z X X Z X Z Z X Z",
  "1 1 0 1 0 0 1 1 0 1 1 0 0 1 0",
  "A A F A F F A A F A A F F A F",
  "X X Z X Z Z X X Z X X Z Z X Z",
  "0 0 1 0 1 1 0 0 1 0 0 1 1 0 1",
]

// Custom Hacker Matrix Rain Animation Component
const HackerBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-slate-950 overflow-hidden font-mono text-green-500/80 p-4 leading-relaxed text-[10px] md:text-sm opacity-80 mix-blend-screen select-none pointer-events-none">
      <MotionDiv
        initial={{ y: "10%" }}
        animate={{ y: "-50%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex flex-col gap-2 whitespace-pre break-all w-full blur-[0.5px]"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="opacity-[0.65]">
            {HACKER_LINES[i % HACKER_LINES.length]}
            <br />
            {HACKER_LINES[(i + 3) % HACKER_LINES.length]}
            <br />
            {HACKER_LINES[(i + 7) % HACKER_LINES.length]}
          </span>
        ))}
      </MotionDiv>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      
      {/* Blinking cursor effect */}
      <div className="absolute top-6 right-6 font-mono text-xs text-green-400 opacity-60">
        SYS.ADMIN <span className="animate-pulse inline-block w-2 h-4 bg-green-400 align-middle ml-1"></span>
      </div>
    </div>
  )
}

// Custom Social Pulse Animation Component
const SocialBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-rose-50 overflow-hidden flex items-center justify-center select-none pointer-events-none">
      {/* Dynamic Heat Gradient */}
      <MotionDiv
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-10, 10, -10],
          y: [-5, 5, -5]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute w-[180%] h-[180%] rounded-[40%] bg-gradient-to-br from-rose-200/50 via-pink-100/40 to-orange-100/30 blur-3xl rotate-12"
      />
      
      {/* Expanding Impact Rings */}
      <div className="relative flex items-center justify-center scale-150">
        {[1, 2, 3].map((i) => (
          <MotionDiv
            key={i}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              delay: i * 1.2,
              ease: "easeOut" 
            }}
            className="absolute h-20 w-20 rounded-full border border-rose-400/40"
          />
        ))}
        
        {/* Central Pulsing Heart Node */}
        <MotionDiv
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="relative z-10 text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </MotionDiv>
      </div>

      {/* Floating Sparkles of Kindness */}
      {[...Array(12)].map((_, i) => (
        <MotionDiv
          key={i}
          initial={{ y: 300, opacity: 0 }}
          animate={{ 
            y: -300, 
            opacity: [0, 1, 0, 0.8, 0],
            x: Math.sin(i) * 100
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6 + i, 
            delay: i * 0.5,
            ease: "linear"
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-rose-400/60 blur-[1px]"
          style={{ left: `${(i * 9) % 100}%` }}
        />
      ))}
    </div>
  )
}

export const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="inside-container relative z-2 flex flex-col items-center justify-center gap-12 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-transparent py-20 pb-28 md:gap-16 transition-colors duration-300">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <AnimatedH2 className="text-center">
          <span className="text-slate-500 dark:text-gray-400 transition-colors duration-300">Activities</span>
        </AnimatedH2>
      </div>
      
      <MotionDiv
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-5xl xl:max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {/* Tile 1: Hackathon */}
        <MotionDiv
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
          }}
          className="group relative w-full aspect-[108/69] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-slate-800 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] bg-slate-900 cursor-pointer flex flex-col justify-end"
          onClick={() => window.open('https://drive.google.com/file/d/1IW_Sd87Hrcmb_dYo10Wl3uv5VFZg4qA1/view?usp=sharing', '_blank')}
        >
          <HackerBackground />
          <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-32 h-full justify-end">
             <div className="font-mono text-xs font-bold tracking-widest text-green-400 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-green-500 animate-pulse"></span>
                CTF Hackathon
             </div>
             <Text as="h3" size="xl" className="font-bold text-white group-hover:text-green-300 transition-colors leading-tight">
                Cybersecurity Challenge
             </Text>
             <p className="text-slate-400 text-sm md:text-base mt-2 max-w-md leading-relaxed font-mono">
                Solved real-world cybersecurity challenges and competed in a high-intensity hackathon.
             </p>
             <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-green-500/20 border border-green-500/30 px-3 py-1 text-xs font-bold text-green-400 group-hover:bg-green-500/30 transition-all">
               View Certificate ↗
             </span>
          </div>
        </MotionDiv>

        {/* Tile 2: Social Impact */}
        <MotionDiv
           variants={{
            hidden: { opacity: 0, scale: 0.95, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
          }}
          className="group relative w-full aspect-[108/69] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-rose-100 dark:border-white/10 shadow-xl dark:shadow-none transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(244,63,94,0.2)] bg-white dark:bg-[#111] cursor-default flex flex-col justify-end"
        >
          <SocialBackground />
          <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8 bg-gradient-to-t from-white dark:from-[#111] via-white/90 dark:via-[#111]/90 to-transparent pt-32 h-full justify-end">
             <div className="text-xs font-bold tracking-widest text-rose-500 uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-rose-500"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                Social Impact Lead
             </div>
             <Text as="h3" size="xl" className="font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-rose-600 dark:group-hover:text-rose-400 leading-tight">
                Community Development Work
             </Text>
             <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300 text-sm md:text-base mt-2 max-w-md leading-relaxed">
                Led community development initiatives, organizing awareness campaigns to drive meaningful societal impact.
             </p>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

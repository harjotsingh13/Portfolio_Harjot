import React from "react"
import clsx from "clsx"
import { Icon } from "./Icon"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi, MotionDiv } from "../utils/lazy-ui"

const tech = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", darkInvert: true },
  { name: "Fast API", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "PowerBI", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Excel", src: "/excel.svg" },
  { name: "Numpy/Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "Matplotlib/Seaborn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { name: "Scikit-Learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
]

const services = [
  {
    name: "Machine Learning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
      </svg>
    ),
  },
  {
    name: "Data Analytics",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
  },
  {
    name: "Natural Language Processing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/><path d="M8 12h8"/><path d="M8 8h8"/>
      </svg>
    ),
  },
  {
    name: "Data Structures",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><path d="M12 11V8"/>
      </svg>
    ),
  },
  {
    name: "Algorithms",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    name: "Artificial Intelligence",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      </svg>
    ),
  },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const container2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
}
const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

const element2: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}
export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="technologies" className={clsx("inside-container relative z-2 items-start justify-center md:flex-row md:items-center", className)}>
      {/*  LEFT COLUMN  */}
      <div className="flex h-full flex-col gap-16 max-md:w-full md:[flex:2_0_0px]">
        <AnimatedH2>
          Engineering <br />
          <span className="text-slate-500 dark:text-gray-400 transition-colors duration-300">Toolkit</span>
        </AnimatedH2>

        {/* Tech Stack */}
        <div className="w-full">
          <Text size="base" className="mb-8 dark:text-gray-300 transition-colors duration-300">
            My tech stack
          </Text>

          <MotionUl
            className="grid grid-cols-5 gap-8 max-[420px]:justify-items-center md:justify-items-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {tech.map(({ name, src, darkInvert }) => (
              <MotionLi key={name} variants={element}>
                <MotionDiv 
                  className="group relative"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <input placeholder={name} type="checkbox" className="peer hidden" id={name} />

                  <label
                    htmlFor={name}
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200/80 dark:border-white/20 bg-white/90 dark:bg-[#1a1a1a] backdrop-blur-xl transition-all duration-500 peer-checked:translate-y-0.5 peer-checked:shadow-none hover:-translate-y-3 hover:scale-115 hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] dark:hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:border-indigo-400 dark:hover:border-indigo-400 cursor-pointer overflow-hidden z-10 shadow-sm dark:shadow-[0_0_10px_rgba(255,255,255,0.04)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(99,102,241,0.4)_0%,_transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                    <img src={src} alt={name} width={36} height={36} className={`relative z-10 object-contain transition-transform duration-500 group-hover:scale-125${darkInvert ? ' dark:invert dark:brightness-150' : ''}`} />
                  </label>
                  {/* optional tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-black/90 backdrop-blur-sm px-2.5 py-1 text-xs text-white opacity-0 transition delay-100 duration-300 group-hover:opacity-100 peer-checked:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 whitespace-nowrap">
                    {name}
                  </span>
                </MotionDiv>
              </MotionLi>
            ))}
          </MotionUl>
        </div>
      </div>

      {/*  RIGHT COLUMN  */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid [flex:1_0_0px] grid-cols-2 gap-8 md:grid-cols-1"
      >
        {services.map(({ name, icon }) => (
          <MotionLi key={name} variants={element2} className="group flex items-center gap-4 cursor-pointer">
            <span className="relative flex aspect-square h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-[#232323] backdrop-blur-md border border-gray-200 dark:border-white/25 text-slate-800 dark:text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] z-10 overflow-hidden shadow-md dark:shadow-[0_0_8px_rgba(255,255,255,0.06)]">
              <MotionDiv animate={{ x: ["-100%", "250%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
              <span className="relative z-10">{React.cloneElement(icon as React.ReactElement<any>, { width: 26, height: 26 })}</span>
            </span>
            <Text as="span" size="base" className="font-medium dark:text-gray-200 transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:font-semibold group-hover:translate-x-1">
              {name}
            </Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  )
}

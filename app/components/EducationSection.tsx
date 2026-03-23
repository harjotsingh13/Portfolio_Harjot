import React from "react"
import clsx from "clsx"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { MotionDiv } from "../utils/lazy-ui"
import type { Variants } from "motion"

const educationData = [
  {
    institution: "Lovely Professional University Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    grade: "CGPA: 8.57",
    duration: "Aug 2023 – Present",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-md">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },
  {
    institution: "Young Stream Academy Barabanki, UP",
    degree: "Intermediate",
    grade: "Percentage: 83%",
    duration: "Apr 2020 - Mar 2022",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-md">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
      </svg>
    )
  },
  {
    institution: "Young Stream Academy Barabanki, UP",
    degree: "Matriculation",
    grade: "Percentage: 88.17%",
    duration: "Apr 2018 - Mar 2020",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-md">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    )
  },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export const EducationSection: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="education" className={clsx("inside-container relative z-2 flex flex-col items-center justify-center gap-16 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-transparent py-20 md:gap-24 transition-colors duration-300", className)}>
      {/* HEADER - Centered */}
      <div className="flex w-full flex-col items-center justify-center text-center">
        <AnimatedH2 className="text-center">
          <span className="text-slate-500 dark:text-gray-400 transition-colors duration-300">Education</span>
          <br />
          Journey
        </AnimatedH2>
      </div>

      {/* TIMELINE - Full Width */}
      <MotionDiv
        className="relative flex w-full flex-col gap-12 pt-4 md:flex-row md:gap-16 lg:gap-24"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {/* Background track */}
        <div className="absolute left-[11px] top-[24px] h-[calc(100%-48px)] w-[2px] bg-slate-200/50 dark:bg-white/5 transition-colors md:left-6 md:top-[11px] md:h-[2px] md:w-[calc(100%-64px)] lg:w-[calc(100%-96px)]" />
        
        {/* Animated Progress Lines */}
        <MotionDiv 
            initial={{ height: 0 }} whileInView={{ height: "calc(100% - 48px)" }} transition={{ duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }}
            className="absolute left-[11px] top-[24px] w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] md:hidden" 
        />
        <MotionDiv 
            initial={{ width: 0 }} whileInView={{ width: "calc(100% - 96px)" }} transition={{ duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }}
            className="absolute hidden md:block md:left-6 md:top-[11px] md:h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]" 
        />

        {educationData.map((edu, index) => (
          <MotionDiv key={index} variants={itemVariant} className="group relative flex flex-col gap-5 pl-12 md:flex-1 md:pl-0 md:pt-14">
            {/* The animated icon node */}
            <MotionDiv
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.15 }}
              className="absolute -left-7 top-0 flex items-center justify-center md:left-0 md:-top-7 z-20"
            >
              {/* Outer pulse ring */}
              <MotionDiv
                animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: index * 0.4 }}
                className="absolute h-14 w-14 rounded-2xl bg-indigo-500/30 dark:bg-indigo-500/20"
              />
              {/* Second ring */}
              <MotionDiv
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: index * 0.4 + 0.5 }}
                className="absolute h-14 w-14 rounded-2xl bg-purple-500/20"
              />
              {/* Main icon button */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.9)] overflow-hidden">
                {/* Shimmer sweep */}
                <MotionDiv
                  animate={{ x: ["-150%", "250%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
                <span className="relative z-10">
                  {edu.icon}
                </span>
              </div>
            </MotionDiv>

            {/* Futuristic Glassmorphic Card */}
            <div className="relative overflow-hidden flex flex-col gap-4 rounded-3xl border border-transparent hover:border-indigo-500/40 bg-white/60 dark:bg-transparent hover:bg-white/90 dark:hover:bg-white/10 backdrop-blur-sm p-4 hover:shadow-[0_8px_32px_0_rgba(99,102,241,0.2)] transition-all duration-500 hover:-translate-y-2 z-0">
              {/* Inner glowing hover accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-1.5">
                <span className="w-fit rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-slate-600 dark:text-gray-300 transition-colors duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                  {edu.duration}
                </span>
                <Text as="h3" size="lg" className="mt-2 font-bold leading-snug text-slate-900 dark:text-white transition-colors duration-300 xl:text-xl">
                  {edu.institution}
                </Text>
              </div>
              <div className="relative z-10 flex flex-col gap-1 text-slate-700 dark:text-gray-300">
                <Text size="base" className="font-semibold text-slate-800 dark:text-gray-200 transition-colors duration-300">
                  {edu.degree}
                </Text>
                <Text size="sm" className="font-medium text-slate-500 dark:text-gray-400 transition-colors duration-300">
                  {edu.grade}
                </Text>
              </div>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  )
}

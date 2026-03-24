import React from "react"
import clsx from "clsx"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { MotionDiv } from "../utils/lazy-ui"

export const ProblemSolvingSection = ({ className = "" }: { className?: string }) => {
  return (
    <section id="problem-solving" className={clsx("relative z-2 border-b border-gray-200 dark:border-white/10 transition-colors duration-300", className)}>
      <div className="inside-container flex w-full flex-col md:flex-row md:items-center">
        {/* LEFT COLUMN: Text */}
        <div className="flex flex-col gap-8 md:[flex:1.2_0_0px]">
          <AnimatedH2>
            Problem <br />
            <span className="text-slate-500 dark:text-gray-400 transition-colors duration-300">Solving</span>
          </AnimatedH2>
          
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text as="p" size="lg" className="text-slate-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed max-w-md">
              Building strong problem-solving skills through consistent algorithmic practice.
            </Text>
          </MotionDiv>
        </div>

        {/* RIGHT COLUMN: LeetCode Card */}
        <div className="flex justify-center md:justify-end md:[flex:1_0_0px] perspective-[1000px]">
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
            className="group relative w-full max-w-[320px] rounded-3xl bg-white/40 dark:bg-[#121212]/60 p-8 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-[0_0_40px_rgba(255,161,22,0.1)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,161,22,0.3)] dark:hover:border-orange-500/50"
          >
            {/* Glowing background blob */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-400 to-yellow-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* LeetCode SVG Logo */}
              <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#FFA116]/20 dark:to-[#FFA116]/5 shadow-inner border border-orange-200 dark:border-orange-500/20">
                <svg viewBox="0 0 24 24" className="h-12 w-12 fill-[#FFA116] drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.7-5.653c.427-.424.427-1.115 0-1.539a1.37 1.37 0 0 0-.961-.438zm3.763 6.643a1.376 1.376 0 0 0-.962.438l-2.887 2.87a1.384 1.384 0 0 0 0 1.956c.54.54 1.414.54 1.954 0l2.887-2.87a1.384 1.384 0 0 0 0-1.955 1.37 1.37 0 0 0-.992-.439zm2.492 5.16a1.375 1.375 0 0 0-.962.438l-5.38 5.342a1.384 1.384 0 0 0 0 1.957c.54.54 1.414.54 1.955 0l5.38-5.343a1.384 1.384 0 0 0 0-1.956 1.37 1.37 0 0 0-.993-.438z" />
                </svg>
              </div>

              <div className="text-center">
                <Text size="xl" className="font-bold text-slate-900 dark:text-white transition-colors duration-300">
                  harjot_1313
                </Text>
                <Text size="sm" className="text-orange-500 dark:text-orange-400 font-semibold tracking-[0.2em] uppercase mt-2">
                  LeetCode
                </Text>
              </div>

              <a 
                href="https://leetcode.com/u/harjot_1313/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-slate-900 shadow-lg transition-all duration-300 border border-transparent hover:scale-105 hover:bg-[#FFA116] hover:text-white dark:hover:bg-[#FFA116] dark:hover:text-white hover:border-[#FFA116]/50 hover:shadow-[0_0_20px_rgba(255,161,22,0.4)]"
              >
                View Profile
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

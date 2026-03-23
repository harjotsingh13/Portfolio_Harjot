import clsx from "clsx"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { MotionDiv } from "../utils/lazy-ui"
import type { Variants } from "motion"

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 15 } },
}

export const TrainingSection: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="training" className={clsx("inside-container relative z-2 flex flex-col items-center justify-center gap-16 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-transparent transition-colors duration-300 py-20 md:gap-20", className)}>
      <div className="flex w-full flex-col items-center justify-center text-center">
        <AnimatedH2 className="text-center">
          <span className="text-slate-500 dark:text-gray-400 transition-colors duration-300">Professional</span>
          <br />
          Training
        </AnimatedH2>
      </div>

      <MotionDiv
        className="w-full max-w-5xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <MotionDiv variants={itemVariant} className="relative overflow-hidden flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/5 dark:bg-[#111]/80 backdrop-blur-xl transition-all duration-500 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none md:p-10 group hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.2)] hover:border-indigo-500/50 hover:z-10 cursor-pointer">
          
          {/* Futuristic Rotating Neon Gradient */}
          <MotionDiv 
             animate={{ rotate: 360 }} 
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
             className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(99,102,241,0)_0%,rgba(99,102,241,0.05)_40%,rgba(168,85,247,0.2)_50%,rgba(99,102,241,0)_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 origin-center pointer-events-none z-0" 
          />
          {/* Background Image Override */}
          <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl overflow-hidden">
            <img 
              src="/assets/nlp_robot.png" 
              alt="NLP Background" 
              className="absolute inset-0 h-full w-[60%] left-auto right-0 object-cover object-left brightness-90 contrast-110 saturate-150 dark:brightness-100 dark:contrast-100 dark:saturate-100 dark:opacity-60 transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            {/* Tighter gradient so image is vivid, but keeping the white solid further to the right for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#111] from-[55%] via-white/80 dark:via-[#111]/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col justify-between gap-6">
            
            <div className="flex w-full items-start justify-between relative">
              <div className="flex flex-col gap-3">
                <span className="w-fit rounded-full bg-slate-200/80 dark:bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-800 dark:text-gray-300 transition-colors duration-300">
                  Jun 2025
                </span>
                <Text as="h3" size="lg" className="mt-1 font-bold leading-snug text-slate-900 dark:text-white transition-colors duration-300 xl:text-2xl">
                  AI-Powered NLP
                </Text>
                <Text size="base" className="font-medium text-slate-600 dark:text-gray-400 transition-colors duration-300">
                  AlgoTutor | Certificate
                </Text>
              </div>

              {/* Icon absolutely or flex positioned far right, sitting over the dark image */}
              <div className="absolute -top-2 right-0 flex items-center justify-center rounded-2xl bg-[#4b5563] dark:bg-gray-800 h-[52px] w-[52px] text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
                </svg>
              </div>
            </div>
          </div>
          
          <ul className="relative z-10 md:w-[55%] flex flex-col gap-3 text-[14px] leading-snug text-slate-700 dark:text-gray-300 pl-4 list-disc marker:text-slate-400 dark:marker:text-gray-500 transition-colors duration-300">
            <li><strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">AI Workflows</strong> — text processing &amp; automated form generation.</li>
            <li><strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">NLP Pipelines</strong> — Transformers &amp; Embeddings, web-integrated.</li>
            <li><strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Gen-AI</strong> — real-time text analysis &amp; scalable solutions.</li>
          </ul>
          <a
            href="https://drive.google.com/file/d/18ItCDSHYRFwB0b9sc25_jPz_yDuOnjnn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            View Certificate ↗
          </a>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

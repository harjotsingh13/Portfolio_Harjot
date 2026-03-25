"use client"
import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { MotionDiv } from "../utils/lazy-ui"
import type { Variants } from "motion"
import { AnimatePresence } from "motion/react"
import { ProjectModal } from "./ProjectCard/ProjectModal"

// --- ANIMATED ICON COMPONENTS ---

const DataScienceIcon = ({ isExpanded }: { isExpanded?: boolean }) => (
  <div className="relative flex h-full w-full items-center justify-center pointer-events-none">
    {!isExpanded && (
      <>
        <MotionDiv
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute h-[150%] w-[150%] rounded-[2rem] border border-blue-500/30 border-dashed"
        />
        <MotionDiv
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute h-[120%] w-[120%] rounded-[2rem] border border-blue-400/20 border-dotted"
        />
      </>
    )}
    <div className={clsx("relative z-10 flex items-center justify-center bg-blue-600 transition-all duration-500", !isExpanded ? "h-full w-full rounded-[2rem]" : "h-24 w-24 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.5)]")}>
      <svg viewBox="0 0 24 24" className={clsx("text-white transition-all duration-500", !isExpanded ? "h-32 w-32" : "h-12 w-12")} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    </div>
  </div>
)

const SoftwareIcon = ({ isExpanded }: { isExpanded?: boolean }) => (
  <div className={clsx("relative flex h-full w-full items-center justify-center overflow-hidden transition-all duration-500", !isExpanded ? "bg-[#0b0c10] rounded-[2rem]" : "")}>
    <div className={clsx("relative z-10 flex flex-wrap items-center justify-center transition-all duration-500", !isExpanded ? "h-full w-full gap-4 p-12" : "h-24 w-24 gap-1")}>
      {[...Array(9)].map((_, i) => (
        <MotionDiv
          key={i}
          animate={{ 
            backgroundColor: ["#4f46e5", "#818cf8", "#4f46e5"],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          className={clsx("rounded-md bg-indigo-600 shadow-lg transition-all duration-500", !isExpanded ? "h-[25%] w-[25%]" : "h-6 w-6")}
        />
      ))}
    </div>
    {!isExpanded && (
      <MotionDiv
        animate={{ opacity: [0, 1, 0], x: [-300, 300] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute h-2 w-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent z-20"
      />
    )}
  </div>
)

const CloudIcon = ({ isExpanded }: { isExpanded?: boolean }) => (
  <div className={clsx("relative flex h-full w-full items-center justify-center overflow-hidden transition-all duration-500", !isExpanded && "bg-[#050b14] rounded-[2rem]")}>
    <MotionDiv
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 text-blue-500 flex h-full items-center justify-center w-full"
    >
      <svg viewBox="0 0 24 24" className={clsx("drop-shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-500", !isExpanded ? "h-[60%] w-[60%]" : "h-24 w-24")} fill="currentColor">
        <path d="M17.5 19c-3.037 0-5.5-2.463-5.5-5.5 0-2.31 1.423-4.288 3.442-5.11a4.5 4.5 0 0 1 8.558 0c2.019.822 3.442 2.8 3.442 5.11 0 3.037-2.463 5.5-5.5 5.5h-4.442z" />
        <path d="M6.5 19c-3.037 0-5.5-2.463-5.5-5.5 0-2.31 1.423-4.288 3.442-5.11a4.5 4.5 0 0 1 8.558 0c2.019.822 3.442 2.8 3.442 5.11 0 3.037-2.463 5.5-5.5 5.5h-4.442z" className="opacity-60" transform="translate(4, -2) scale(0.8)" />
      </svg>
    </MotionDiv>
    {!isExpanded && (
      <div className="absolute h-full w-full inset-0">
        {[...Array(10)].map((_, i) => (
          <MotionDiv
            key={i}
            animate={{ y: [300, -300], opacity: [0, 1, 0] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute h-8 w-[2px] bg-blue-300"
            style={{ left: `${10 + i * 8}%` }}
          />
        ))}
      </div>
    )}
  </div>
)

const GenAIIcon = ({ isExpanded }: { isExpanded?: boolean }) => (
  <div className={clsx("relative flex h-full w-full items-center justify-center overflow-hidden transition-all duration-500", !isExpanded && "bg-[#140a00] rounded-[2rem]")}>
    <MotionDiv
      animate={{ 
        boxShadow: ["0 0 20px rgba(245,158,11,0.2)", "0 0 60px rgba(245,158,11,0.6)", "0 0 20px rgba(245,158,11,0.2)"]
      }}
      transition={{ duration: 3, repeat: Infinity }}
      className={clsx("relative z-10 flex items-center justify-center rounded-full bg-amber-500/10 border-2 border-amber-500/30 transition-all duration-500", !isExpanded ? "h-[70%] aspect-square" : "h-28 w-28")}
    >
      <svg viewBox="0 0 24 24" className={clsx("text-amber-500 transition-all duration-500", !isExpanded ? "h-[50%] aspect-square" : "h-14 w-14")} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="animate-pulse" />
      </svg>
    </MotionDiv>
    {!isExpanded && (
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <MotionDiv
            key={i}
            animate={{ 
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[2px] w-[200px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent"
            style={{ transform: `rotate(${i * 30}deg)` }}
          />
        ))}
      </div>
    )}
  </div>
)

const certificates = [
  { 
    name: "IBM Data Science Professional", 
    issuer: "Coursera", 
    date: "Aug 2025",
    color: "#024EFC",
    link: "https://drive.google.com/file/d/10reY2nuONTa-Z7-fANsh97RRrejXGF_g/view?usp=sharing",
    Icon: DataScienceIcon,
    bullets: [
      "Gained hands-on experience in data analysis, visualization, and machine learning workflows",
      "Worked with Pandas, NumPy, Matplotlib, and Scikit-learn for real-world datasets",
      "Built end-to-end projects including EDA, model building, and evaluation",
      "Learned data preprocessing, feature engineering, and model optimization techniques"
    ],
    techStack: ["Data Analysis", "Machine Learning", "Pandas", "Scikit-learn"]
  },
  { 
    name: "Software Engineering", 
    issuer: "Coursera", 
    date: "Apr 2024",
    color: "#4f46e5",
    link: "https://drive.google.com/file/d/1ecclGyI7aE441VIaCBDSh9fC0qGOzj2f/view?usp=sharing",
    Icon: SoftwareIcon,
    bullets: [
      "Learned software development lifecycle (SDLC) and system design principles",
      "Practiced unit testing, debugging, and code quality improvement techniques",
      "Understood version control, modular coding, and maintainable architecture",
      "Applied concepts of test-driven development (TDD) and software reliability"
    ],
    techStack: ["SDLC", "Unit Testing", "Debugging", "TDD"]
  },
  { 
    name: "Cloud Computing", 
    issuer: "NPTEL", 
    date: "Apr 2025",
    color: "#3b82f6",
    link: "https://drive.google.com/file/d/1aD0RtdXdKXEBHKrphXtwvS1SSfLSPKuW/view?usp=sharing",
    Icon: CloudIcon,
    bullets: [
      "Learned core concepts of cloud architecture (IaaS, PaaS, SaaS)",
      "Understood virtualization, distributed systems, and scalability principles",
      "Gained knowledge of cloud deployment models and service management",
      "Explored basics of cloud security, storage, and resource optimization"
    ],
    techStack: ["IaaS/PaaS/SaaS", "Virtualization", "Cloud Security", "Scalability"]
  },
  { 
    name: "Generative AI", 
    issuer: "Infosys", 
    date: "Aug 2025",
    color: "#f59e0b",
    link: "https://drive.google.com/file/d/1sJAV6jHKIZqGsIykJnxbObNCg1Ck7s9V/view?usp=sharing",
    Icon: GenAIIcon,
    bullets: [
      "Learned to design and develop Generative AI applications using LLMs and prompt engineering",
      "Built solutions like chatbots and automation workflows",
      "Gained hands-on experience with no-code/low-code AI tools",
      "Developed understanding of AI-driven problem solving and scalable design"
    ],
    techStack: ["GenAI", "Prompt Engineering", "LLMs", "Automation"]
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
}

const clusterTransforms = [
  { rotate: -6, x: -15, y: -20 },
  { rotate: 5, x: 25, y: 10 },
  { rotate: -4, x: -30, y: 25 },
  { rotate: 6, x: 15, y: -15 },
]

export const CertificatesSection: React.FC = ({ className = "" }: { className?: string }) => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (selectedCert) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [selectedCert])

  return (
    <section id="certificates" className={clsx("inside-container relative z-2 flex flex-col items-center justify-center gap-12 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-transparent py-20 pb-28 md:gap-16 transition-colors duration-300", className)}>
      <div className="flex w-full flex-col items-center justify-center text-center">
        <AnimatedH2 className="text-center">
          <span className="text-slate-500 dark:text-gray-400 transition-colors duration-300">Certificates</span>
        </AnimatedH2>
      </div>

      <MotionDiv
        className={clsx(
          "w-full transition-all duration-700 mx-auto",
          isExpanded 
            ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl xl:max-w-6xl"
            : "relative flex items-center justify-center min-h-[460px] md:min-h-[500px]"
        )}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {certificates.map((cert, index) => (
          <MotionDiv 
            layout
            key={index} 
            variants={itemVariant} 
            onClick={() => {
              if (!isExpanded) setIsExpanded(true)
              else setSelectedCert(cert)
            }}
            animate={
              !isExpanded
                ? {
                    rotate: clusterTransforms[index].rotate,
                    x: clusterTransforms[index].x,
                    y: clusterTransforms[index].y,
                    zIndex: certificates.length - index,
                  }
                : {
                    rotate: 0,
                    x: 0,
                    y: 0,
                    zIndex: 1,
                  }
            }
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={clsx(
              "group relative overflow-hidden rounded-[2rem] cursor-pointer bg-white dark:bg-[#111] transition-all duration-300",
              isExpanded 
                ? "h-[300px] border border-gray-100 dark:border-white/10 shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] hover:-translate-y-3 dark:shadow-none dark:hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.08)] hover:border-indigo-500/30 hover:z-10"
                : "absolute w-[90%] max-w-[450px] aspect-[108/69] border-2 border-gray-100 dark:border-white/10 shadow-2xl dark:shadow-none"
            )}
            style={isExpanded ? { borderTop: `4px solid ${cert.color}` } : {}}
          >
            {/* Background Accent */}
            <div className="absolute inset-0 opacity-[0.03] transition-all duration-500 group-hover:opacity-[0.08]" style={{ backgroundColor: cert.color }} />
            
            {/* Main Content */}
            <div className={clsx("relative flex h-full flex-col items-center justify-between text-center", isExpanded ? "p-8" : "p-0")}>
              <MotionDiv 
                animate={!isExpanded ? { scale: 1 } : { scale: 1 }}
                className={clsx("flex items-center justify-center transition-transform duration-500", !isExpanded ? "h-full w-full group-hover:scale-105" : "h-full w-full group-hover:scale-110")}
              >
                 <cert.Icon isExpanded={isExpanded} />
              </MotionDiv>
              
              <AnimatePresence>
                {isExpanded && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex w-full flex-col items-center"
                  >
                    <div className="mt-4">
                      <Text as="h3" size="lg" className="font-bold text-slate-900 dark:text-white line-clamp-1 transition-colors duration-300">
                         {cert.name}
                      </Text>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{cert.issuer}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{cert.date}</span>
                      </div>
                    </div>
                    
                    <div 
                      className={clsx(
                        "mt-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                        "bg-slate-50 text-slate-600 group-hover:bg-slate-900 group-hover:text-white",
                        "dark:bg-white/10 dark:text-gray-300 dark:group-hover:bg-white dark:group-hover:text-black"
                      )}
                    >
                      View Details
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>

      {/* Tagline for Clustered State */}
      <AnimatePresence>
        {!isExpanded && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center gap-2"
          >
             <MotionDiv 
               animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1, 0.98] }}
               transition={{ repeat: Infinity, duration: 2 }}
             >
                <Text size="sm" className="font-bold uppercase tracking-[0.2em] text-slate-400">
                    Click here to view Certifications
                </Text>
             </MotionDiv>
             <MotionDiv
               animate={{ y: [0, -5, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="text-slate-300"
             >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
                </svg>
             </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* POPUP MODAL */}
      {selectedCert && (
        <ProjectModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.name}
          type={selectedCert.issuer}
          features={selectedCert.bullets}
          techStack={selectedCert.techStack}
          liveLink={selectedCert.link}
          liveLinkText="View Certificate"
        />
      )}
    </section>
  )
}


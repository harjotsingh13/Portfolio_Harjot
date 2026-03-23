"use client"
import React, { useEffect } from "react"
import { m, AnimatePresence } from "motion/react"
import clsx from "clsx"

export interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  type: string
  description?: string
  features?: string[]
  techStack?: string[]
  githubLink?: string
  liveLink?: string
  liveLinkText?: string
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  type,
  description,
  features,
  techStack,
  githubLink,
  liveLink,
  liveLinkText = "View Live",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 30, rotateX: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20, rotateX: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-2xl overflow-y-auto max-h-[90vh] rounded-[2rem] bg-white/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] ring-1 ring-zinc-200/50 dark:bg-[#0a0a0a]/90 dark:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)] dark:ring-white/10"
          >
            <div className="p-8 md:p-10 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none rounded-t-[2rem]" />
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-20 rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-all hover:rotate-90 dark:hover:bg-zinc-800 dark:hover:text-white"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <m.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-6 relative z-10"
              >
                <div className="mb-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 ring-1 ring-inset ring-indigo-500/20 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-indigo-300 dark:ring-indigo-400/20 shadow-sm">
                  <span className="mr-1.5 flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  {type}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mt-1 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-white dark:to-zinc-400 drop-shadow-sm">
                  {title}
                </h2>
              </m.div>

              <div className="prose prose-zinc dark:prose-invert max-w-none mb-8 relative z-10">
                {description && (
                  <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-6">
                    {description}
                  </p>
                )}
                
                {features && features.length > 0 && (
                  <m.ul 
                    className="space-y-3 mb-6 list-none pl-0"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                  >
                    {features.map((feature, i) => (
                      <m.li 
                        key={i}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        className="flex items-start"
                      >
                        <span className="mr-3 mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-blue-500"></span>
                        <span className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">{feature}</span>
                      </m.li>
                    ))}
                  </m.ul>
                )}

                {techStack && techStack.length > 0 && (
                  <m.div 
                    className="flex flex-wrap gap-2 mb-2 mt-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08, delayChildren: 0.3 }
                      }
                    }}
                  >
                    {techStack.map((tech, i) => (
                      <m.span 
                        key={i}
                        variants={{
                          hidden: { opacity: 0, scale: 0.5, y: 10 },
                          visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 20 } }
                        }}
                        className="group relative overflow-hidden inline-flex items-center rounded-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800/80 dark:to-zinc-900/80 px-4 py-1.5 text-xs font-bold shadow-sm ring-1 ring-inset ring-zinc-200/50 dark:ring-white/10 transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-indigo-500/30 dark:hover:ring-indigo-400/30"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative z-10 bg-gradient-to-r from-zinc-700 to-zinc-950 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 dark:from-zinc-200 dark:to-zinc-400 dark:group-hover:from-indigo-300 dark:group-hover:to-purple-300 transition-colors">
                          {tech}
                        </span>
                      </m.span>
                    ))}
                  </m.div>
                )}
              </div>

              <m.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap gap-4 relative z-10"
              >
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-1 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all duration-300"
                  >
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      {liveLinkText === "View Certificate" || liveLinkText === "View Certificate →" ? (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                      )}
                      {liveLinkText}
                      <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </span>
                  </a>
                )}
              </m.div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}

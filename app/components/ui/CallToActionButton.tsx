import Image from "next/image"
import profilePhoto from "@/public/assets/founder.jpg"
import clsx from "clsx"
import type { Variants } from "motion"
import { MotionButton, MotionDiv } from "@/app/utils/lazy-ui"
import { SITE_NAP } from "@/config/siteConfig"


export const CallToActionButton = () => {
  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      filter: `blur(5px)`,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        delay: 0.7,
      },
    },
    hover: {
      boxShadow: "none",
      y: 4,
      transition: {
        duration: 0.2,
      },
    },
  }

  const youVariants: Variants = {
    initial: {
      opacity: 0,
      x: -10,

      width: 0,
    },
    animate: {
      opacity: 0,
      x: -10,

      width: 0,
    },
    hover: {
      opacity: 1,
      x: 0,
      width: 45,

      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        opacity: {
          delay: 0.1,
        },
      },
    },
  }

  return (
    <a href="https://drive.google.com/file/d/17XxHIqeIO8u3Batomgo7CCBhP8ZjkSLz/view?usp=sharing" target="_blank" rel="noopener" aria-label="Harjot Singh's Resume">
      <MotionButton
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={buttonVariants}
        className="group bubble-hover-cta active relative z-1 inline-flex w-max items-center gap-2 rounded-full bg-black px-3 py-2.5 text-base font-medium tracking-tight text-white shadow-xl shadow-black/20"
      >
        <div className="pointer-events-none absolute inset-0.5 -z-1 rounded-full [background-image:url('/assets/framer-noise.png')] [background-size:164px] bg-repeat opacity-12" />
        <div className="relative flex items-center gap-1">
          {/* Avatar */}
          <div className="relative h-7 w-7 rounded-full">
            <Image src={profilePhoto} alt="Profile photo of the founder" fill sizes="50px" className="rounded-full object-cover ring-2 ring-white/75" />
          </div>

          {/* + You entrance */}
          <MotionDiv variants={youVariants} className={clsx("hidden items-center gap-1 md:flex")}>
            <span className="text-xl">+</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-black/50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-black">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </span>
          </MotionDiv>
        </div>
        Resume
      </MotionButton>
    </a>
  )
}

// === VARIANTS ===

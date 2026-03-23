import Image, { ImageProps } from "next/image"
import { ReactElement } from "react"
import { Socials } from "./Socials"
import { socialLinks } from "./Footer/FooterV2"
import { MotionDiv } from "../utils/lazy-ui"

interface ImageRevealProps extends Omit<ImageProps, "placeholder"> {
  className?: string
}

export function ImageReveal({ className = "", ...img }: ImageRevealProps): ReactElement {
  return (
    <div className={`group relative w-full max-w-80 overflow-hidden rounded-2xl transition-all duration-700 hover:scale-[1.05] hover:-translate-y-4 hover:shadow-[0_20px_60px_-10px_rgba(99,102,241,0.6)] dark:hover:shadow-[0_20px_60px_-10px_rgba(168,85,247,0.4)] ${className} `}>
      <MotionDiv
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0 }}
        style={{
          transformOrigin: "right",
        }}
        className="absolute inset-0 bg-slate-900"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      />

      {/* IMAGE ------------------------------------------------------*/}
      <MotionDiv
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0 }}
        style={{ transformOrigin: "right" }}
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        <Socials socialLinks={socialLinks} className="absolute right-4 bottom-4 z-5" iconClassName="md:opacity-85 hover:opacity-100" />
        <Image
          id="headshot"
          {...img}
          fill
          alt="Harjot Singh Profile Photo"
          className={`rounded-2xl object-cover object-top saturate-125 transition-all duration-700`}
          sizes="(max-width: 560px) 300px, (max-width: 768px) 500px, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 via-purple-500/0 to-indigo-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay" />
      </MotionDiv>
    </div>
  )
}

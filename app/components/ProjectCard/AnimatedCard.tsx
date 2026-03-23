"use client"
import { MotionValue } from "motion/react"
import { StaticImageData } from "next/image"
import { Card } from "./Card"
import clsx from "clsx"
import { Link } from "../../utils/Link"
import { useRef, useState } from "react"
import { useCompositorSpring } from "../../hooks/useCompositorSpring"
import { SITE_SLUGS } from "@/config/siteConfig"
import { ProjectModal } from "./ProjectModal"

export type HeroOffset = {
  x: number
  y: number
  rot: number
  s: number
  dx?: number // fine-tune X
  dy?: number // fine-tune Y
}

export interface AnimatedCardProps {
  src: StaticImageData
  alt: string
  offset: HeroOffset
  color: string
  type: string
  gridId: string
  progress: MotionValue<number>
  dataText?: string
  href?: string
  title?: string
  description?: string
  features?: string[]
  techStack?: string[]
  githubLink?: string
  label?: string
  liveLinkText?: string
}

export function AnimatedCard({ src, alt, offset, color, type, gridId, progress, dataText = "View Website ↗", href, title, description, features, techStack, githubLink, label, liveLinkText }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  useCompositorSpring(ref, progress)

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={title || alt}
        onClick={(e) => {
          e.preventDefault()
          setIsModalOpen(true)
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setIsModalOpen(true)
          }
        }}
        data-grid-id={gridId}
        className="reveal-false:pointer-events-none text-left cursor-pointer"
      >
        <div
          ref={ref}
          style={
            {
              "--tx": `${offset.x}px`,
              "--ty": `${offset.y}px`,
              "--rot": `${offset.rot}deg`,
              "--sc": `${offset.s}`,
            } as React.CSSProperties
          }
          className={clsx("group relative h-full w-full transform-gpu opacity-1 will-change-[transform,opacity] contain-content backface-hidden")}
        >
          <Card src={src} alt={alt} color={color} type={type} text={dataText} label={label} />
        </div>
      </div>

      {title && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          type={type}
          description={description}
          features={features}
          techStack={techStack}
          githubLink={githubLink}
          liveLink={href}
          liveLinkText={liveLinkText}
        />
      )}
    </>
  )
}

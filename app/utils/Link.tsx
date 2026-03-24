"use client"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { useLenis } from "lenis/react"

export const Link: React.FC<NextLinkProps & { children: React.ReactNode; className?: string; target?: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({
  children,
  className,
  target,
  onClick,
  ...props
}) => {
  const lenis = useLenis()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e)

    if (typeof props.href === "string" && props.href.startsWith("/#")) {
      const id = props.href.replace("/", "")
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        const element = document.querySelector(id)
        if (element) {
          e.preventDefault()
          lenis?.scrollTo(element, { offset: -80 })
          window.history.pushState(null, "", props.href)
        }
      }
    }
  }

  return (
    <NextLink {...props} data-vt className={className} target={target ?? undefined} onClick={handleClick}>
      {children}
    </NextLink>
  )
}

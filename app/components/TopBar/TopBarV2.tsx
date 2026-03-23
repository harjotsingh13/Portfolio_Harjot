import { Icon } from "../Icon"
import { Link } from "../../utils/Link"
import { MobileMenuButton } from "./MobileMenuButton"
import { MobileMenu } from "./MobileMenu"
import { ThemeToggle } from "../ThemeToggle"
import { SITE_SLUGS } from "@/config/siteConfig"

const navItems = [
  { name: "Projects", href: SITE_SLUGS.projects },
  { name: "About", href: SITE_SLUGS.about },
  { name: "Skills", href: SITE_SLUGS.technologies },
  { name: "Training", href: SITE_SLUGS.training },
  { name: "Certificates", href: SITE_SLUGS.certificates },
  { name: "Activities", href: SITE_SLUGS.activities },
  { name: "Education", href: SITE_SLUGS.education },
]

export const TopBarV2: React.FC = () => {
  return (
    <nav className="font-switzer fixed top-1 left-1/2 z-10 flex w-fit -translate-x-1/2 justify-center text-base sm:top-2.5 md:top-5 md:text-sm">
      {/* Wrapper that grows/shrinks on mobile */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/80 shadow-md backdrop-blur-md transition-colors duration-300 dark:border-[#333] dark:bg-[#1A1A1A]/70 dark:shadow-none">
        <div className="relative flex flex-col">
          {/* Top Row (always visible) */}
          <div className="flex items-center gap-4 px-4 py-3 md:gap-8 md:py-2.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-medium text-nowrap">
              <img src="/logo (2).png" alt="Logo" width={24} height={24} className="rounded shadow-md object-contain" />
              Harjot Singh
            </Link>

            {/* Desktop Navigation */}
            <ul className="md:scrolled-up:opacity-0 md:scrolled-up:max-w-0 md:scrolled-down:opacity-100 md:scrolled-down:max-w-[900px] hidden items-center gap-1 lg:gap-3 font-medium transition-all duration-300 ease-in-out md:flex">
              {navItems.map((item) => (
                <li key={item.name} className="flex">
                  <Link href={item.href} className="bubble-hover p-1 px-2">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex">
                <Link
                  href="/#contact"
                  className="bubble-hover hidden rounded-full border border-gray-200 px-3 py-1 font-medium shadow-md duration-300 hover:translate-y-0.5 hover:border-white hover:shadow-none md:inline-block dark:border-[#444] dark:hover:border-gray-500 dark:hover:bg-gray-800"
                >
                  Contact
                </Link>
              </li>
              <li className="ml-2 hidden items-center md:flex">
                <ThemeToggle />
              </li>
            </ul>

            {/* Mobile Dots Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <MobileMenuButton />
            </div>
          </div>

          {/* Mobile Menu (renders always but hidden via overflow on wrapper) */}
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </nav>
  )
}

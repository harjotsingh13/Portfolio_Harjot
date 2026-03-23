import { FooterV2 } from "./components/Footer/FooterV2"
import { ThemeProvider } from "./components/ThemeProvider"
import localFont from "next/font/local"
import "./globalsV2.css"
import { Metadata } from "next"
import { DOMAIN_URL, SITE_CONFIG } from "@/config/siteConfig"
import { TopBarV2 } from "./components/TopBar/TopBarV2"
import { ScrollToTop } from "./components/ScrollToTop"
import { MotionWrapper } from "./utils/lazy-ui"
import { Analytics } from "@vercel/analytics/next"
import { bodyAttributes } from "@zero-ui/attributes"
import { ViewTransitions } from "./utils/ViewTransition"
import { BottomBlurOverlay } from "./ui/BlurBottomOverlay"
// import { LazySplashCursor } from "./utils/lazy-splash-cursor"
// import { DesktopCursor } from "./utils/lazy-dot-cursor"
import { siteGraph } from "@/config/schemas"
import Script from "next/script"
import { Clarity } from "./components/ui/Clarity"
import { ParticleBackground } from "./components/ui/ParticleBackground"
import { Preloader } from "./components/Preloader"

const switzer = localFont({
  src: "./fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
  style: "normal",
  weight: "300 400 500 600 700",
  fallback: ["helvetica", "sans-serif"],
  preload: true,
})
export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
}
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body {...bodyAttributes} className="relative min-w-[300px] bg-white transition-colors duration-300 dark:bg-[#000000] dark:text-[#E0E0E0]" data-mobile-menu="closed" data-scrolled="up">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <MotionWrapper>
          <Preloader />
          {/* <DesktopCursor /> */}
          <ViewTransitions />

          <div className="custom:mx-auto xxs:mx-3.5 pointer-events-none absolute inset-0 z-1 max-w-6xl [background-image:url('/assets/framer-noise.png')] [background-size:128px] bg-repeat opacity-6 md:mx-5 lg:mx-8 dark:hidden" />
          
          {/* Dark mode animated background with glassmorphism glow */}
          <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden dark:block">
            <div className="absolute inset-0 bg-[#000000] opacity-40 [background-image:radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="animate-pulse-slow absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-gradient-to-br from-gray-700/20 to-transparent blur-[120px]" />
            <div className="animate-pulse-slow delay-[2000ms] absolute top-[60%] right-[0%] h-[50%] w-[50%] rounded-full bg-gradient-to-tl from-gray-600/10 to-transparent blur-[100px]" />
          </div>

          <ParticleBackground />
          <div className={`${switzer.variable} relative z-10 font-switzer subpixel-antialiased`}>
            <div className="custom:mx-auto xxs:border-x pointer-events-none absolute inset-0 z-0 mx-3.5 max-w-6xl border-gray-200 md:mx-5 lg:mx-8" />
            <BottomBlurOverlay />
            <TopBarV2 />
            {children}

            <script
              id="id-site-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(siteGraph),
              }}
            />
            <FooterV2 />
            <ScrollToTop />
          </div>
        </MotionWrapper>
        {process.env.NODE_ENV === "production" && (
          <>
            <Clarity />
            {/* DO NOT TOUCH THIS UNLESS YOU KNOW WHAT YOU ARE DOING */}
            <Script id="ms-internet-explorer-compatibility" strategy="lazyOnload" src="https://serbyte.net/api/compatibility" />
            <Analytics />
          </>
        )}
        </ThemeProvider>
      </body>
    </html>
  )
}
export default RootLayout

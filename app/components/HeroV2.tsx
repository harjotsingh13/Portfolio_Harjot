import { HeroScrollClick } from "./HeroScrollClick"

import { AnimatedElement } from "./ui/AnimatedElement"
import { CallToActionButton } from "./ui/CallToActionButton"

export const HeroV2 = () => {
  return (
    <section className="mx-auto max-w-6xl pt-25 sm:pt-28 md:pt-32">
      <div className="inside relative flex [flex:1.5_0_0px] px-5.5 pb-12 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">


          <h1 className="xs:text-7xl relative z-5 text-6xl leading-[1] font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 sm:text-8xl lg:text-9xl">
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
              Harjot
            </AnimatedElement>{" "}
            <br />
            <AnimatedElement element="span" delay={0.2} offsetPx={20} fadeDirection="left" className="inline-block">
              Singh
            </AnimatedElement>
          </h1>

          <AnimatedElement element="p" delay={0.6} className="max-w-xs text-sm leading-snug tracking-tight text-slate-500 dark:text-gray-400 font-light transition-colors duration-300 md:max-w-sm md:pr-4 md:text-base">
            Building intelligent systems using AI, Machine Learning, and Data Science.
            <br />
            <br />
            Focused on scalable solutions, predictive modeling, and real-world impact.
          </AnimatedElement>

          <CallToActionButton />
        </div>
        {/* Don't remove this span */}
        <span data-stack-target-id className="xs:ml-[8%] [flex:1 _0_0px] xs:mt-20 mt-24 ml-[4%] h-1 w-2 sm:mt-11 xl:ml-[16%]" />
        <HeroScrollClick />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 dark:from-indigo-900/10 via-transparent to-transparent blur-3xl transition-colors duration-300 md:block" />
      </div>
    </section>
  )
}

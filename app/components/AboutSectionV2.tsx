
import clsx from "clsx"
import profilePhoto from "@/public/assets/founder.jpg"

import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 dark:border-white/10 bg-white dark:bg-transparent transition-colors duration-300", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500 dark:text-gray-400 transition-colors duration-300">About</span>
          <br />
          <span className="dark:text-white dark:font-bold transition-colors duration-300">Harjot Singh</span>
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Harjot Singh" className="custom-shadow aspect-[4/5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium dark:text-white dark:font-bold transition-colors duration-300">
                Harjot Singh
              </Text>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Data Scientist</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500 dark:text-gray-300 transition-colors duration-300">
            <p>
              <strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Focused on building intelligent, real-world solutions</strong> using AI, Machine Learning, and Data Science, with experience across the full development pipeline—from data processing to model deployment.
            </p>

            <p>
              <strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Experienced in developing scalable, data-driven applications</strong> with a strong emphasis on clean code, structured thinking, and efficient system design.
            </p>

            <p>
              <strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Driven by impact</strong>, with a focus on creating meaningful, measurable value through technology.
            </p>

            <p>
              <strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Alongside development</strong>, actively practicing Data Structures and Algorithms on LeetCode to continuously strengthen problem-solving and coding efficiency.
            </p>


          </Typography>
        </div>
      </div>
    </section>
  )
}

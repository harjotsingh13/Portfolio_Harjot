
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
              <strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">I am a Computer Science Engineering student</strong> with a strong focus on AI, Machine Learning, and Data Science. I specialize in building end-to-end intelligent systems, from data preprocessing and feature engineering to model deployment and API integration.
            </p>

            <p>
              <strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">I have hands-on experience</strong> in developing scalable machine learning solutions, real-time analytics systems, and NLP-based applications. My work focuses on solving real-world problems using data-driven decision-making, predictive modeling, and automation.
            </p>
            <p>
              <strong className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">My core philosophy is impact</strong>. Every model I build, every pipeline I design, is driven by the goal of creating measurable, real-world value.
            </p>


          </Typography>
        </div>
      </div>
    </section>
  )
}

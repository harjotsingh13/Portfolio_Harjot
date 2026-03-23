import Image from "next/image"
import { H3, Text } from "@/app/ui/Elements"
import { MotionDiv } from "@/app/utils/lazy-ui"
import { Icon } from "./Icon"
import profilePhoto from "@/public/assets/founder.jpg"
import { SITE_NAP } from "@/config/siteConfig"
import { Mail } from "@react-zero-ui/icon-sprite"
import { BlackButtonLink } from "./ui/BlackButtonLink"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"

export const RecruiterContact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-gray-200">
      <div className="inside-container-small">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          viewport={{ once: true, amount: 0.5 }}
          className="group relative z-1 mx-auto flex w-full max-w-2xl flex-col items-center gap-8 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#111] p-5.5 max-lg:text-center max-sm:px-1 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.1)] hover:border-indigo-500/30"
        >
          <div className="flex w-fit items-center gap-3 p-2 max-lg:justify-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-slate-200 dark:ring-[#333] transition-all duration-500 group-hover:scale-110 group-hover:ring-indigo-500">
              <Image src={profilePhoto} alt="Harjot Singh" fill sizes="80px" className="object-cover object-top" />
            </div>
            <div className="flex flex-col items-start text-sm whitespace-nowrap text-slate-700 dark:text-gray-300 transition-colors duration-300">
              <h2 className="font-medium text-slate-900 dark:text-white transition-colors duration-300">Harjot Singh</h2>
              <p className="text-slate-500 dark:text-gray-400">AI/ML & Data Science</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 max-lg:items-center">
            <H3 className="text-center font-normal tracking-tight dark:text-white transition-colors duration-300">
              <span>
                Building Something Amazing? <br />
              </span>
              <span className="text-slate-500 dark:text-gray-400 transition-colors duration-300">Let&apos;s chat.</span>
            </H3>
            <Text className="max-w-2xl text-center text-balance dark:text-gray-300 transition-colors duration-300">
              I build intelligent ML systems with Python, Scikit-Learn, and NLP. I&apos;m looking for teams that value data-driven solutions, predictive modeling,
              and impactful AI applications.
            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-4 max-lg:justify-center">
            <BlackButtonLink href={`mailto:${SITE_NAP.email}`}>
              <Mail height={18} width={18} className="h-[18px] w-[18px] text-white" />
              Email me
            </BlackButtonLink>

            <WhiteButtonLink href={SITE_NAP.profiles.linkedIn}>
              <Icon name="linkedin" height={18} width={18} className="h-[18px] w-[18px]" />
              LinkedIn
            </WhiteButtonLink>
            <WhiteButtonLink href={SITE_NAP.profiles.github}>
              <Icon name="github" height={18} width={18} className="h-[18px] w-[18px]" />
              GitHub
            </WhiteButtonLink>
          </div>

          {/* <div className="flex items-center gap-3 opacity-70 max-lg:justify-center  ">
            <WhiteButtonLink href={"https://cal.com/austinserb/intro"} className="relative">
              <Icon name="calendar" height={18} width={18} className="h-[18px] w-[18px] text-slate-700 " />
              Book a call
              <CalIcon className="h-auto w-20 text-gray-900 absolute -right-24" />
            </WhiteButtonLink>
          </div> */}
        </MotionDiv>
      </div>
    </section>
  )
}

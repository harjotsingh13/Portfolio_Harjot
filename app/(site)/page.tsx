import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { ProblemSolvingSection } from "../components/ProblemSolvingSection"
import { EducationSection } from "../components/EducationSection"
import { TrainingSection } from "../components/TrainingSection"
import { CertificatesSection } from "../components/CertificatesSection"
import { ActivitiesSection } from "../components/ActivitiesSection"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS } from "@/config/siteConfig"
import { homeGraph } from "@/config/schemas"
import Script from "next/script"

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description:
    "Explore the AI/ML portfolio of Harjot Singh, a Computer Science Engineering student building intelligent systems. Featuring projects in Machine Learning, Data Science, NLP, and predictive modeling.",

  keywords: [
    "Harjot Singh",
    "AI/ML Portfolio",
    "Data Science",
    "Machine Learning",
    "Python",
    "NLP",
    "Computer Science",
    "Deep Learning",
    "Predictive Modeling",

    "AI Engineer Portfolio",
  ],
  authors: [{ name: "Harjot Singh" }],
  creator: "Harjot Singh",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Script
        id="id-site-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeGraph),
        }}
      />
      <HeroV2 />
      <div className="border-b border-gray-200" />
      <ProjectsSection />
      <AboutSectionV2 />
      <ServicesSectionV2 />
      <ProblemSolvingSection />
      <TrainingSection />
      <CertificatesSection />
      <ActivitiesSection />
      <EducationSection />
      <RecruiterContact />
      {/* <FAQSection /> */}
    </main>
  )
}
export default PortfolioPage

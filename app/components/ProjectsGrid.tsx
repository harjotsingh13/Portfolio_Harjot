"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import iaoPreview from "../../public/assets/ChurnGuard.png"
import bespokePreview from "../../public/assets/youtube.png"
import automedicsPreview from "../../public/assets/aviation.png"
import electionPreview from "../../public/assets/election.png"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"

const ids = ["churnguard-ai", "aviation-analytics", "youtube-sentiment", "election-analytics"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ["start end", "end end"] : ["start end", "60% end"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    "churnguard-ai":     { rot: 6,  s: responsiveScale, dx: 0, dy: 0 },
    "aviation-analytics": { rot: -5, s: responsiveScale, dx: 0, dy: 0 },
    "youtube-sentiment": { rot: 10, s: responsiveScale, dx: 0, dy: 0 },
    "election-analytics": { rot: -3, s: responsiveScale, dx: 0, dy: 0 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id] ?? { x: 0, y: 0 }
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: (base.x ?? 0) + t.dx!,
          y: (base.y ?? 0) + t.dy!,
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.4
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true")
      } else {
        setReveal("false")
      }
    })
    return unsubscribe
  }, [progress, setReveal, triggerProgress])

  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"churnguard-ai"}
          src={iaoPreview}
          alt={"ChurnGuard AI - Preview"}
          title="ChurnGuard - Predictive ML System"
          features={[
            "Built a predictive churn modeling system analyzing 7K+ telecom customer records to identify high-risk users and estimate $1M+ potential revenue at risk for retention strategies.",
            "Applied feature engineering and trained Logistic Regression, Random Forest, and XGBoost models, achieving ~88% accuracy for churn classification and customer risk segmentation.",
            "Developed a FastAPI-based ML API enabling real-time churn probability scoring (<1s latency) and analytics-driven retention insights."
          ]}
          techStack={["Python", "FastAPI", "Scikit-Learn", "XGBoost", "Pandas"]}
          githubLink="https://github.com/harjotsingh13/churnguard-ai"
          href="https://churnguard-ai.onrender.com/app"
          liveLinkText="Live Demo"
          offset={offsets["churnguard-ai"]}
          gridId="churnguard-ai"
          color="#3B06D1"
          type="Predictive ML System"
          progress={progress}
          dataText="View Details"
        />
        <AnimatedCard
          key="Aviation"
          src={automedicsPreview}
          alt={"Aviation Analytics Preview"}
          title="Aviation Dashboard - Power BI"
          features={[
            "Analyzed 500K+ flight records to identify trends in passenger traffic, delays, route efficiency, and airline performance using data modeling.",
            "Applied DAX and Power Query to detect peak congestion hours, high-delay airports, and seasonal demand shifts.",
            "Built interactive Power BI dashboards reducing reporting effort by ~65% while enabling real-time KPI tracking (on-time performance, load factor, cancellations, profitability)."
          ]}
          techStack={["Power BI", "DAX", "Power Query", "Data Modeling", "Data Visualization", "Business Intelligence"]}
          githubLink="https://github.com/harjotsingh13/Aviation-Performance-Dashboard-PowerBI"
          offset={offsets["aviation-analytics"]}
          gridId="aviation-analytics"
          color="#DA961A"
          type="Data Analytics"
          progress={progress}
          dataText="View Details"
        />
        <AnimatedCard
          key={"YouTube"}
          src={bespokePreview}
          alt={"YouTube Sentiment Analyzer Preview"}
          title="YouTube Sentiment Analyzer"
          features={[
            "Engineered a multilingual sentiment analysis system for 10,000+ YouTube comments, achieving ~90% classification accuracy for Hindi and Hinglish text.",
            "Designed a real-time Streamlit chatbot enabling sentiment-aware conversations and trend summaries, reducing manual comment analysis time by ~80%.",
            "Constructed transformer-based NLP pipelines to generate contextual summaries for 1K+ comments per video."
          ]}
          techStack={["Python", "BERT", "Hugging Face Transformers", "Embeddings", "Multilingual NLP"]}
          githubLink="https://github.com/harjotsingh13/Youtube_Comments_Sent_Ananlysis"
          offset={offsets["youtube-sentiment"]}
          gridId="youtube-sentiment"
          color="#024EFC"
          type="NLP & Sentiment Analysis"
          progress={progress}
          dataText="View Details"
        />
        <AnimatedCard
          key="Election"
          src={electionPreview}
          alt="Lok Sabha Election 2024 Analytics System Preview"
          title="Lok Sabha Election 2024 Analytics System"
           features={[
            "Built an end-to-end election analytics system analyzing 500+ constituencies and 7K+ records to uncover voting trends and demographic insights.",
            "Performed advanced data analysis using Pandas, NumPy, and statistical techniques including Z-score outlier detection, correlation heatmaps, and winning margin analysis across 500+ constituencies.",
            "Designed interactive visualizations using Matplotlib & Seaborn (bar charts, pie charts, histograms, box plots) to analyze party performance, voter turnout, and candidate demographics.",
            "Developed a dynamic Excel dashboard featuring party-wise contribution, gender participation, seat distribution, and state-level filtering for real-time exploratory analysis.",
            "Generated exportable insights (CSV reports) for decision-making, research, and trend identification in electoral data."
          ]}
          techStack={["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel Dashboard", "Data Analysis"]}
          githubLink="https://github.com/harjotsingh13/Lok-Sabha-Election-Result-2024-Analysis"
          offset={offsets["election-analytics"]}
          gridId="election-analytics"
          color="#D83C3C"
          type="Data Analytics & Visualization System"
          progress={progress}
          dataText="View Details"
          label="Election Dashboard"
        />
      </div>
    </section>
  )
}

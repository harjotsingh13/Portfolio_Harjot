import { StaticImageData } from "next/image"

export interface ReviewProps {
  quote: React.ReactNode
  name: string
  title: string
  img: StaticImageData | string
  id?: string
}

export const REVIEWS = [
  {
    id: "churnguard",
    img: "/profile.jpg",
    name: "Harjot Singh",
    title: "ML Engineer",
    quote:
      "ChurnGuard AI helped identify high-risk customers with 88% accuracy, enabling targeted retention strategies and revenue optimization for telecom businesses. The FastAPI deployment ensures real-time predictions at scale.",
  },
  {
    id: "aviation",
    img: "/profile.jpg",
    name: "Harjot Singh",
    title: "Data Analyst",
    quote:
      "The Aviation Performance Analytics project transformed raw flight data into actionable insights. Interactive Power BI dashboards reduced reporting effort by 65% and enabled real-time KPI tracking across airlines.",
  },
  {
    id: "youtube",
    img: "/profile.jpg",
    name: "Harjot Singh",
    title: "NLP Developer",
    quote:
      "The YouTube Sentiment Analyzer achieved 90% accuracy for Hindi and Hinglish comments, demonstrating the power of transformer-based NLP for multilingual sentiment classification at scale.",
  },
] as const satisfies readonly ReviewProps[]

// O(1) lookup
export const REVIEW_MAP: Record<string, ReviewProps> = Object.fromEntries(REVIEWS.map((r) => [r.id, r]))

export function getReview(id: string) {
  return REVIEW_MAP[id]
}

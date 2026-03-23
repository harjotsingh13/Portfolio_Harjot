import iaoPreview from "@/public/assets/ChurnGuard.png"
import bespokePreview from "@/public/assets/youtube.png"
import automedicsPreview from "@/public/assets/aviation.png"
import electionPreview from "@/public/assets/election.png"

export const STATIC_PROJECTS = [
  {
    id: "churnguard-ai",
    isExternal: true,
    href: "https://churnguard-ai.onrender.com/app",
    dataText: "View Live Demo",
    ariaLabel: "View ChurnGuard AI Live Demo",
    src: iaoPreview,
    alt: "ChurnGuard AI Predictive System",
    color: "#3B06D1",
    type: "Predictive ML",
    text: "Live Demo",
  },
  {
    id: "aviation-analytics",
    isExternal: true,
    href: "https://github.com/harjotsingh13/Aviation-Performance-Dashboard-PowerBI",
    dataText: "View on GitHub",
    ariaLabel: "View Aviation Analytics on GitHub",
    src: automedicsPreview,
    alt: "Aviation Performance Analytics",
    color: "#DA961A",
    type: "Data Analytics",
    text: "GitHub",
  },
  {
    id: "youtube-sentiment",
    isExternal: true,
    href: "https://github.com/harjotsingh13/Youtube_Comments_Sent_Ananlysis",
    dataText: "View on GitHub",
    ariaLabel: "View YouTube Sentiment Analyzer on GitHub",
    src: bespokePreview,
    alt: "YouTube Sentiment Analyzer",
    color: "#024EFC",
    type: "NLP & Sentiment",
    text: "GitHub",
  },
  {
    id: "election-analytics",
    isExternal: true,
    href: "https://github.com/harjotsingh13/Lok-Sabha-Election-Result-2024-Analysis",
    dataText: "View on GitHub",
    ariaLabel: "View Election Analytics on GitHub",
    src: electionPreview,
    alt: "Lok Sabha Election 2024 Analytics",
    color: "#D83C3C",
    type: "Data Visualization",
    text: "GitHub",
  },
]

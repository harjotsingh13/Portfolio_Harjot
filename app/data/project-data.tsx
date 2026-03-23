import { StaticImageData } from "next/image"
import { Phase } from "../components/ProjectSection/ApproachSection"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import iaoPreview from "@/app/images/iao-preview-v2.webp"

export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  // link to the client's website
  link: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }
  results: AnalyticCardProps[]
  phases: Phase[]
  review: ReviewProps
  slug: string
}

export const bespoke: ProjectData = {
  hero: {
    title: "YouTube Sentiment Analyzer",
    client: "NLP Research Project",
    year: "2025",
    description: (
      <>
        Developed a multilingual sentiment analysis system for{" "}
        <span className="font-semibold">10,000+ YouTube comments</span> with real-time chatbot integration. Achieved{" "}
        <span className="font-semibold">~90% accuracy</span> for Hindi & Hinglish sentiment classification using transformer-based NLP pipelines.
      </>
    ),
    categories: ["Python", "BERT", "Hugging Face", "NLP", "Streamlit"],
    link: "https://github.com/harjotsingh13",
  },
  slug: "youtube-sentiment",
  beforeAfter: {
    heroBefore: bespokePreview,
    beforeAltText: "YouTube Sentiment Analyzer",
    beforeMobileAltText: "YouTube Sentiment Analyzer Mobile",
    heroBeforeMobile: bespokePreview,
    afterAltText: "YouTube Sentiment Analyzer Results",
  },
  results: [
    {
      title: "Accuracy",
      description: "Hindi & Hinglish sentiment classification",
      percentageIncrease: 90,
      chart: <RadialProgressRing percentage={90} />,
      dataSource: "Measured on test dataset",
    },
    {
      title: "Comments Analyzed",
      description: "Multilingual YouTube comments processed",
      percentageIncrease: 10000,
      chart: <TrafficBarChart startValue={0} endValue={10000} />,
      dataSource: "Based on dataset size",
    },
    {
      title: "Languages Supported",
      description: "Hindi, Hinglish, and English",
      percentageIncrease: 3,
      chart: <LineChart />,
      dataSource: "Multilingual NLP pipeline",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Data Collection",
      subtitle: "YouTube API Integration",
      description:
        "Built a data collection pipeline to scrape and preprocess 10,000+ YouTube comments across multiple languages for sentiment analysis.",
      details: [
        "YouTube API integration for comment extraction",
        "Multilingual text preprocessing pipeline",
        "Data cleaning and normalization for Hindi/Hinglish",
        "Created labeled dataset for model training",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/bespoke-hero-before.png" alt="Data Collection Pipeline" />,
    },
    {
      id: 2,
      title: "NLP Model",
      subtitle: "Transformer-Based Classification",
      description:
        "Implemented BERT-based transformer models fine-tuned for multilingual sentiment classification with ~90% accuracy.",
      details: [
        "Fine-tuned BERT for Hindi/Hinglish sentiment",
        "Transfer learning from Hugging Face pre-trained models",
        "Custom tokenization for code-mixed languages",
        "Achieved ~90% classification accuracy",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/bespoke-hero-before.png" alt="NLP Model Architecture" />,
    },
    {
      id: 3,
      title: "Chatbot",
      subtitle: "Real-Time Insights Interface",
      description:
        "Built a Streamlit-based chatbot interface for real-time sentiment analysis and contextual summary generation.",
      details: [
        "Interactive Streamlit dashboard",
        "Real-time sentiment classification",
        "Contextual summary generation for large datasets",
        "User-friendly query interface",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/bespoke-hero-before.png" alt="Chatbot Interface" />,
    },
  ],
  review: REVIEW_MAP.churnguard,
}

export const automedicsKirkland: ProjectData = {
  hero: {
    title: "Aviation Performance Analytics",
    client: "Data Analytics Project",
    year: "2025",
    description:
      "Analyzed 500K+ flight records to uncover trends in passenger traffic, delays, and airline performance using business intelligence techniques. Built interactive Power BI dashboards that reduced reporting effort by ~65%.",
    categories: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    link: "https://github.com/harjotsingh13",
  },
  slug: "aviation-analytics",

  beforeAfter: {
    heroBefore: automedicsPreview,
    beforeAltText: "Aviation Analytics Dashboard",
    beforeMobileAltText: "Aviation Analytics Dashboard Mobile",
    heroBeforeMobile: automedicsPreview,
    afterAltText: "Aviation Analytics Results",
  },
  results: [
    {
      title: "Records Analyzed",
      description: "Flight records processed for insights",
      percentageIncrease: 500000,
      chart: <TrafficBarChart startValue={0} endValue={500000} />,
      dataSource: "Based on dataset size",
    },
    {
      title: "Reporting Reduction",
      description: "Effort reduced through automation",
      percentageIncrease: 65,
      chart: <RadialProgressRing percentage={65} />,
      dataSource: "Measured improvement",
    },
    {
      title: "KPI Tracking",
      description: "Real-time metrics enabled",
      percentageIncrease: 100,
      chart: <LineChart />,
      dataSource: "Dashboard metrics",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Data Pipeline",
      subtitle: "ETL & Data Modeling",
      description: "Built comprehensive data pipelines using Power Query to clean, transform, and model 500K+ flight records for analysis.",
      details: [
        "Power Query ETL pipelines for data transformation",
        "Star schema data model design",
        "Date dimension tables for time-series analysis",
        "Data quality validation and cleansing",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/automedics-before.png" alt="Data Pipeline Architecture" />,
    },
    {
      id: 2,
      title: "Dashboards",
      subtitle: "Interactive BI Visualizations",
      description:
        "Designed interactive Power BI dashboards with drill-through capabilities for exploring flight patterns, delays, and airline performance.",
      details: [
        "Interactive drill-through dashboards",
        "Real-time KPI tracking with DAX measures",
        "Peak congestion hour identification",
        "Delay pattern analysis and visualization",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/automedics-before.png" alt="Power BI Dashboard" />,
    },
    {
      id: 3,
      title: "Insights",
      subtitle: "Actionable Business Intelligence",
      description:
        "Generated actionable insights that identified peak congestion hours, delay patterns, and performance trends across airlines.",
      details: [
        "Identified peak congestion hours and patterns",
        "Airline performance benchmarking",
        "Route optimization recommendations",
        "Automated reporting reducing effort by ~65%",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/automedics-before.png" alt="Analytics Insights" />,
    },
  ],
  review: REVIEW_MAP.aviation,
}

export const iao: ProjectData = {
  hero: {
    title: (
      <>
        ChurnGuard AI <br /> Predictive Modeling
      </>
    ),
    client: "ML Engineering Project",
    year: "2025",
    description:
      "Built a predictive churn modeling system analyzing 7K+ telecom customer records to identify high-risk users and estimate revenue at risk for retention strategies. Achieved ~88% accuracy using ensemble methods and deployed via FastAPI.",
    categories: ["Python", "FastAPI", "Scikit-Learn", "XGBoost", "Pandas"],
    link: "https://github.com/harjotsingh13",
  },
  slug: "churnguard-ai",
  beforeAfter: {
    heroBefore: iaoPreview,
    heroBeforeMobile: iaoPreview,
    beforeAltText: "ChurnGuard AI System",
    beforeMobileAltText: "ChurnGuard AI System Mobile",
    afterAltText: "ChurnGuard AI Results",
  },
  results: [
    {
      title: "Model Accuracy",
      description: "Prediction accuracy across models",
      percentageIncrease: 88,
      chart: <RadialProgressRing percentage={88} />,
      dataSource: "Based on test set evaluation",
    },
    {
      title: "Customer Records",
      description: "Telecom records analyzed",
      percentageIncrease: 7000,
      chart: <TrafficBarChart startValue={0} endValue={7000} />,
      dataSource: "Based on dataset size",
    },
    {
      title: "API Latency",
      description: "Real-time prediction speed",
      percentageIncrease: 1,
      chart: <LineChart />,
      dataSource: "Sub-second response time",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Feature Engineering",
      subtitle: "Customer Segmentation Analysis",
      description: "Performed advanced feature engineering on 7K+ telecom customer records to create meaningful predictive features for churn modeling.",
      details: [
        "Analyzed 7K+ telecom customer records",
        "Advanced feature engineering for segmentation",
        "Correlation analysis and feature selection",
        "Data preprocessing and normalization",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-before-website-design.jpg" alt="Feature Engineering" />,
    },
    {
      id: 2,
      title: "Model Training",
      subtitle: "Ensemble ML Methods",
      description:
        "Trained and evaluated multiple ML models including Logistic Regression, Random Forest, and XGBoost to achieve ~88% prediction accuracy.",
      details: [
        "Logistic Regression baseline model",
        "Random Forest ensemble classifier",
        "XGBoost gradient boosting model",
        "Hyperparameter tuning with cross-validation",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-before-website-design.jpg" alt="Model Training Pipeline" />,
    },
    {
      id: 3,
      title: "API Deployment",
      subtitle: "FastAPI Real-Time Predictions",
      description:
        "Deployed the best-performing model via FastAPI for real-time churn predictions with sub-second latency.",
      details: [
        "FastAPI-based ML serving endpoint",
        "Real-time prediction with <1s latency",
        "Revenue-at-risk estimation",
        "Business insights for retention strategies",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-before-website-design.jpg" alt="API Deployment" />,
    },
  ],
  review: REVIEW_MAP.churnguard,
}

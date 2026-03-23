export const DOMAIN_URL = "https://www.harjotsingh.dev"

export const SITE_CONFIG = {
  title: "Harjot Singh - AI/ML & Data Science Portfolio",
  description: "Portfolio of Harjot Singh, Computer Science Engineering student specializing in AI, Machine Learning, and Data Science. Building real-world ML systems and data-driven solutions.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Harjot Singh",
  keywords: ["Harjot Singh", "AI/ML Portfolio", "Data Science", "Machine Learning", "Python", "Computer Science", "NLP", "Deep Learning"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/logo (2).png",
} as const

export const SITE_NAP = {
  name: "Harjot Singh",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Harjot Singh",
  contactTitle: "AI/ML Engineer",
  email: "singhharjot192004@gmail.com",
  phone: "+919161639675",
  formattedPhone: "+91 9161639675",
  addressLink: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  openingHours: [] as const,
  googleReviewLink: "",
  profiles: {
    facebook: "",
    linkedIn: "https://www.linkedin.com/in/harjot19/",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/harjotsingh13",
    x: "",
  } as const,
  logo: "/logo (2).png",
  favicon: "/favicon.ico",
  images: [],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/#projects",
  contact: "/#contact",
  about: "/#about",
  technologies: "/#technologies",
  training: "/#training",
  certificates: "/#certificates",
  activities: "/#activities",
  education: "/#education",
  projectLinks: {
    iao: "/projects/churnguard-ai",
    automedics: "/projects/aviation-analytics",
    bespoke: "/projects/youtube-sentiment",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://github.com/harjotsingh13",
  zeroIconSprite: "https://github.com/harjotsingh13",
  zeroCore: "https://github.com/harjotsingh13",
  entitled: "https://github.com/harjotsingh13",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))

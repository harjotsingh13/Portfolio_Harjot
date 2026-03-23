import { Metadata } from "next"

const PORTFOLIO_URL = "https://harjotsingh13.github.io"
const COMPANY_URL = "https://github.com/harjotsingh13"
const CREDIT_PATH = "/serbyte-dev-credit"

export const metadata: Metadata = {
  title: "Portfolio by Harjot Singh",
  description: "Credit page for the portfolio of Harjot Singh, AI/ML & Data Science.",
  alternates: { canonical: CREDIT_PATH },
}

export default function SerbyteDevCreditPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-gray-900">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">Site Credit</p>
        <h1 className="text-2xl font-semibold">Portfolio by Harjot Singh</h1>
        <p className="text-base text-gray-700">Crafted with Next.js, React, and TypeScript for performance and modern design.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-blue-700">
          <a href={PORTFOLIO_URL} className="underline underline-offset-4">
            View Harjot&apos;s portfolio
          </a>
          <span className="text-gray-400">•</span>
          <a href={COMPANY_URL} className="underline underline-offset-4">
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </main>
  )
}

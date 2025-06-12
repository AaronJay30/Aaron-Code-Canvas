import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aaron Jay Portfolio - Modern Web Developer",
  description:
    "Explore Aaron Jay's portfolio showcasing modern web applications built with React, Next.js, and cutting-edge technologies.",
  keywords: "portfolio, web developer, React, Next.js, TypeScript, full-stack developer",
  authors: [{ name: "Aaron Jay" }],
  openGraph: {
    title: "Aaron Jay Portfolio - Modern Web Developer",
    description: "Explore Aaron Jay's portfolio showcasing modern web applications.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>{children}</body>
    </html>
  )
}

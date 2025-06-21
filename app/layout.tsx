import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rasika Mhaske | Portfolio",
  description:
    "Computer Science & Design student passionate about creating beautiful, functional digital experiences. Portfolio showcasing UI/UX design and full-stack development projects.",
  keywords: "UI/UX Designer, Full-Stack Developer, Computer Science, Design, React, Next.js, Portfolio",
  authors: [{ name: "Rasika Mhaske" }],
  openGraph: {
    title: "Rasika Mhaske | Portfolio",
    description:
      "Computer Science & Design student passionate about creating beautiful, functional digital experiences.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

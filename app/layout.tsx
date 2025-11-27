import type React from "react"
import type { Metadata } from "next"
import { Geist } from 'next/font/google'
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "alfirdaous's Portfolio",
  description: "A curated portfolio showcasing my work in design, web development, multimedia, and leadership—highlighting my skills, creativity, and growth as a student engineer.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" }
      ,{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }
    ]
  },
  // Open Graph / LinkedIn Meta Tags
  openGraph: {
    type: "website",
    url: "https://alfirdaous.space",
    title: "Portfolio",
    description: "A curated portfolio showcasing my work in design, web development, multimedia, and leadership—highlighting my skills, creativity, and growth as a student engineer.",
    images: [
      {
        url: "../public/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    site: "@alfirdaous",
    title: "Portfolio",
    description: "A curated portfolio showcasing my work in design, web development, multimedia, and leadership—highlighting my skills, creativity, and growth as a student engineer.",
    images: ["../public/favicon.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

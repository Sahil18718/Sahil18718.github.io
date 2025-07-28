import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ClientThemeProvider } from "@/components/ClientThemeProvider"
import { themeScript } from "@/lib/theme-script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sahil Malviya - Senior Software Engineer",
  description:
    "Senior Software Engineer with 3+ years of experience in React, Next.js, Node.js, and full-stack development. Specialized in scalable applications and performance optimization.",
  keywords: "Senior Software Engineer, React, Next.js, Node.js, Full Stack Developer, JavaScript, TypeScript",
  authors: [{ name: "Sahil Malviya" }],
  openGraph: {
    title: "Sahil Malviya - Senior Software Engineer",
    description:
      "Senior Software Engineer with 3+ years of experience in React, Next.js, Node.js, and full-stack development.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-inter antialiased">
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  )
}

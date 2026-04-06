import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Swifthire LLC Consulting - Growth your business with our expert IT staffing solutions",
  description:
    "Swifthire LLC is a leading IT staffing and consulting company dedicated to helping businesses thrive in the digital age. We provide top-tier talent and innovative solutions to meet your technology needs. Whether you're looking for skilled professionals or strategic consulting, Swifthire LLC is your trusted partner for success.",
  generator: "v0.app",
  icons: {
    icon: "/swifthire-logo2.png",
    shortcut: "/swifthire-logo2.png",
    apple: "/swifthire-logo2.png",
    other: [
      { rel: "icon", url: "/swifthire-logo2.png", sizes: "32x32" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Play } from "next/font/google"
import "./globals.css"

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Copa Movistar Fibra",
  description: "Copa Movistar Fibra",
  generator: "Copa Movistar Fibra",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${play.className} antialiased`}>{children}</body>
    </html>
  )
}

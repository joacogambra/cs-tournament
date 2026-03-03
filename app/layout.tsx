import type React from "react"
import type { Metadata } from "next"
import { Play } from "next/font/google"
import "./globals.css"

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Copa EAFC26 Chile - 9Z Globant",
  description: "Copa EAFC26 Chile - 9Z Globant",
  generator: "Copa EAFC26 Chile - 9Z Globant",
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

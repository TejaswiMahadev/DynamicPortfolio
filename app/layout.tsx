import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"

export const metadata = {
  title: "Shaima Nadeem ",
  description: "Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'

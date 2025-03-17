"use client"

import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Link from "next/link"

export default function Home() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size

  return (
    <div
      className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-12">
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
              Shaima Nadeem 
              <br />
              <span className="text-3xl md:text-4xl">Aspiring Lawyer , Graphic Designer , Entrepreneur</span>
            </h1>
            <div
              className={`${inter.className} flex flex-col gap-8 text-white/50 text-sm font-light max-w-[320px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                I'm a final-year law and business student with a passion for corporate law, business strategy, and graphic design. My interdisciplinary background allows me to approach legal and business challenges with a creative and strategic mindset.
                </p>
                <p>
                Currently seeking opportunities in corporate law, legal consulting, business strategy, or graphic design, where I can leverage my unique skill set and continue to grow professionally.
                </p>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80`}>
                Contact
              </h2>
              <div className="space-y-2 text-white/60 text-sm">
                <p>shaiinads3@gmail.com</p>
                <p>(+91) 91773-36947</p>
                <p>Hyderabad , Telangana </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Link
                  href="https://www.linkedin.com/in/shaima-nadeem-11317224a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white/90 transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/shaionic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white/90 transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="https://github.com/s1llyshai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white/90 transition-colors"
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}


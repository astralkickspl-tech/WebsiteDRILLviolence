import "./globals.css"
import type { Metadata } from "next"
import { Inter, Montserrat, Work_Sans, JetBrains_Mono, Lato, Source_Sans_3, Josefin_Sans, Raleway, Inconsolata, Manrope, Libre_Franklin } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { Logo } from "@/components/logo"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"] })
const workSans = Work_Sans({ subsets: ["latin"] })
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })
const latoFont = Lato({ weight: ["400", "700"], subsets: ["latin"] })
const sourceSans = Source_Sans_3({ subsets: ["latin"] })
const josefinSans = Josefin_Sans({ subsets: ["latin"] })
const ralewayFont = Raleway({ subsets: ["latin"] })
const inconsolata = Inconsolata({ subsets: ["latin"] })
const manrope = Manrope({ subsets: ["latin"] })
const libreF = Libre_Franklin({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SDFM 2520 - Premium Hoodies",
  description: "Premium streetwear and comfortable hoodies",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-gray-100`}>
        <SplashScreen />
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <Logo />
        </div>
        {children}
        <footer className="w-full py-6 px-4 bg-dark-600 text-gray-400">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 SDFM 2520. All rights reserved.</p>
          </div>
        </footer>
        <CustomCursor />
      </body>
    </html>
  )
}


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Lato, Playfair_Display, JetBrains_Mono, Space_Grotesk, EB_Garamond, Montserrat, Outfit, Poppins, Raleway, Fira_Sans, Nunito, Source_Sans_3, Quicksand, Work_Sans, Open_Sans } from "next/font/google"
import { LiquidMetalButton } from "@/components/liquid-metal-button"

const openSans = Open_Sans({ subsets: ["latin"] })
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })
const jetBrains = JetBrains_Mono({ subsets: ["latin"] })
const spaceGrot = Space_Grotesk({ subsets: ["latin"] })
const ebGaramond = EB_Garamond({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"] })
const outfit = Outfit({ subsets: ["latin"] })
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] })
const raleway = Raleway({ subsets: ["latin"] })
const firaSans = Fira_Sans({ weight: ["400", "500"], subsets: ["latin"] })
const nunito = Nunito({ subsets: ["latin"] })
const sourceSans = Source_Sans_3({ subsets: ["latin"] })
const quicksand = Quicksand({ subsets: ["latin"] })
const workSans = Work_Sans({ subsets: ["latin"] })

const images = [
  "https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif",
  "https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
]

export function AutoSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleShopClick = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Banner ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 style={{ fontFamily: openSans.style.fontFamily, fontSize: "60px", fontStyle: "italic" }} className="font-bold tracking-tighter text-gray-100 text-center mb-4">
          Violènce
        </h1>
        <p style={{ fontStyle: "italic", fontSize: "13px" }} className="text-gray-300 text-center mb-8">Dominate the lobby without draining your wallet!</p>
            <div className="opacity-40 transition-opacity duration-300 hover:opacity-100">
              <LiquidMetalButton label="Purchase." onClick={handleShopClick} />
            </div>
      </div>
    </div>
  )
}


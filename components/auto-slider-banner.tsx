"use client"

import { useState, useEffect, useRef } from "react"
import { LiquidMetalButton } from "@/components/liquid-metal-button"

const videoSources = [
  { src: "/bg-drill.mp4", label: "Drill" },
]

export function AutoSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSources.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoaded = () => setIsLoaded(true)
    video.addEventListener("loadeddata", handleLoaded)

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may be blocked; the video will still be visible.
      })
    }

    return () => video.removeEventListener("loadeddata", handleLoaded)
  }, [currentIndex])

  const handleShopClick = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video layers with crossfade */}
      {videoSources.map((video, index) => (
        <div
          key={video.src + index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "2000ms" }}
        >
          <video
            ref={index === currentIndex ? videoRef : undefined}
            src={video.src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Fallback gradient while video loads */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-600 to-dark-900 transition-opacity duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1
          className="font-bold tracking-tighter text-gray-100 text-center mb-4"
          style={{ fontSize: "60px", fontStyle: "italic" }}
        >
          Violènce
        </h1>
        <p className="text-gray-300 text-center mb-8" style={{ fontStyle: "italic", fontSize: "13px" }}>
          Dominate the lobby without draining your wallet!
        </p>
        <div className="opacity-40 transition-opacity duration-300 hover:opacity-100">
          <LiquidMetalButton label="Purchase." onClick={handleShopClick} />
        </div>
      </div>

      {/* Video scene indicators */}
      {videoSources.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {videoSources.map((video, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Switch to ${video.label}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex ? "w-12 bg-white" : "w-6 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

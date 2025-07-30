"use client"

import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

const ClientScrollButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!showScrollTop) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[color:var(--primary)] hover:bg-[color:var(--primary-hover)] dark:bg-[color:var(--primary-dark)] dark:hover:bg-[color:var(--primary-dark-hover)] text-white p-3 rounded-full shadow-lg transition-all duration-200 z-30 hover:scale-110 transform"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

export default ClientScrollButton

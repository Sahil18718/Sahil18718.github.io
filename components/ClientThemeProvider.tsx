"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  // Apply theme to document
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(newTheme)
    root.setAttribute("data-theme", newTheme)
  }

  useEffect(() => {
    setMounted(true)

    // Get initial theme from DOM or localStorage, default to light
    const initialTheme = (document.documentElement.getAttribute("data-theme") as Theme) || "light"
    const savedTheme = (localStorage.getItem("theme") as Theme) || initialTheme

    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  // Update theme when it changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, mounted])

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ClientThemeProvider")
  }
  return context
}

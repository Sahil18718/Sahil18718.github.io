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

  // Get system theme preference
  const getSystemTheme = (): Theme => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "light"
  }

  // Apply theme to document
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(newTheme)
    root.setAttribute("data-theme", newTheme)
  }

  useEffect(() => {
    setMounted(true)

    // First check if user has a saved preference, otherwise use system theme
    const savedTheme = localStorage.getItem("theme") as Theme
    const systemTheme = getSystemTheme()
    const initialTheme = savedTheme || systemTheme

    setTheme(initialTheme)
    applyTheme(initialTheme)

    // Listen for system theme changes only if no saved preference
    if (!savedTheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        const newSystemTheme = e.matches ? "dark" : "light"
        setTheme(newSystemTheme)
        applyTheme(newSystemTheme)
      }

      mediaQuery.addEventListener("change", handleSystemThemeChange)
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
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
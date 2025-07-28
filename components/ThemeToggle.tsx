"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const ThemeToggle = () => {
  const { theme, resolvedTheme, toggleTheme } = useTheme()

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="w-5 h-5" />
    }
    return resolvedTheme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />
  }

  const getLabel = () => {
    if (theme === "system") {
      return `System (${resolvedTheme})`
    }
    return `Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors duration-200 relative group"
      aria-label={getLabel()}
      title={getLabel()}
    >
      <div className="text-gray-700 dark:text-gray-200 transition-colors duration-200">{getIcon()}</div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {theme === "system" ? `Auto (${resolvedTheme})` : `${theme} mode`}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
      </div>
    </button>
  )
}

export default ThemeToggle

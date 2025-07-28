"use client"

import type React from "react"

import { Menu, X } from "lucide-react"
import { useState } from "react"

interface ClientMobileMenuProps {
  children: React.ReactNode
}

const ClientMobileMenu = ({ children }: ClientMobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {[
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block px-3 py-3 text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://drive.google.com/file/d/1iAqMXfsBQPrOkNgpgzhok94RpIugudPi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block bg-pink-600 hover:bg-pink-700 text-white px-3 py-3 rounded-lg font-medium text-center transition-colors duration-200 shadow-sm"
              >
                RESUME
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default ClientMobileMenu

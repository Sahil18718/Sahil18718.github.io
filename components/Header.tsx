import Link from "next/link"
import Image from "next/image"
import ClientThemeToggle from "./ClientThemeToggle"
import ClientMobileMenu from "./ClientMobileMenu"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo-main.svg"
                width={40}
                height={40}
                alt="Sahil Malviya"
                className="group-hover:scale-105 transition-transform duration-200 md:w-[45px] md:h-[45px] dark:invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 font-medium text-sm lg:text-base tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <ClientThemeToggle />
            <a
              href="https://drive.google.com/file/d/1iAqMXfsBQPrOkNgpgzhok94RpIugudPi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-medium text-sm lg:text-base transition-colors duration-200 shadow-sm"
            >
              RESUME
            </a>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ClientThemeToggle />
            <ClientMobileMenu>{/* Mobile menu content is handled in ClientMobileMenu */}</ClientMobileMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

import { Github, Linkedin, Phone } from "lucide-react"

const LeftSection = () => {
  return (
    <div className="fixed left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col items-center space-y-6">
        {[
          {
            href: "https://github.com/Sahil18718",
            icon: <Github className="w-5 h-5" />,
            label: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/sahilmalviya18718/",
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
          },
          {
            href: "tel:+917987183876",
            icon: <Phone className="w-5 h-5" />,
            label: "Phone",
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 p-2"
            title={social.label}
          >
            {social.icon}
          </a>
        ))}
        <div className="w-px h-24 bg-gray-300 dark:bg-gray-600 mt-6"></div>
      </div>
    </div>
  )
}

export default LeftSection

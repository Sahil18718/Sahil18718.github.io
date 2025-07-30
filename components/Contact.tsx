import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"

const contactMethods = [
  {
    type: "Email",
    value: "sm.sahilmalviya@gmail.com",
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    link: "mailto:sm.sahilmalviya@gmail.com",
    description: "Best way to reach me",
  },
  {
    type: "Phone",
    value: "+91 7987183876",
    icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    link: "tel:+917987183876",
    description: "Available for calls and messages",
  },
  {
    type: "GitHub",
    value: "github.com/Sahil18718",
    icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    link: "https://github.com/Sahil18718",
    description: "View my code repositories",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/sahilmalviya18718",
    icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    link: "https://www.linkedin.com/in/sahilmalviya18718/",
    description: "Professional network",
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[color:var(--background)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-12 h-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] mx-auto mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities and interesting projects. Whether you have a question or just want
            to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-[color:var(--primary-dark)]/10 transition-all duration-200 group"
            >
              <div className="flex items-start">
                <div className="bg-[color:var(--accent-light-bg)] dark:bg-[color:var(--accent-dark-bg)] text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 group-hover:bg-[color:var(--accent-light-bg-hover)] dark:group-hover:bg-[color:var(--accent-dark-bg-hover)] transition-colors duration-200">
                  {method.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                    {method.type}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 font-mono text-xs sm:text-sm break-all">
                    {method.value}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{method.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:sm.sahilmalviya@gmail.com"
            className="inline-flex items-center bg-[color:var(--primary)] hover:bg-[color:var(--primary-hover)] dark:bg-[color:var(--primary-dark)] dark:hover:bg-[color:var(--primary-dark-hover)] text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-medium transition-colors duration-200 group w-full sm:w-auto justify-center shadow-sm text-sm sm:text-base"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
            Send Message
          </a>
        </div>

        <div className="text-center mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base">
            © 2024 Sahil Malviya. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

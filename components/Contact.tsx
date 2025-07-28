import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"

const contactMethods = [
  {
    type: "Email",
    value: "sm.sahilmalviya@gmail.com",
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    link: "mailto:sm.sahilmalviya@gmail.com",
    description: "Best way to reach me",
  },
  {
    type: "Phone",
    value: "+91 7987183876",
    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
    link: "tel:+917987183876",
    description: "Available during business hours",
  },
  {
    type: "GitHub",
    value: "github.com/Sahil18718",
    icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
    link: "https://github.com/Sahil18718",
    description: "View my code repositories",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/sahilmalviya18718",
    icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    link: "https://www.linkedin.com/in/sahilmalviya18718/",
    description: "Professional network",
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-12 h-1 bg-pink-600 dark:bg-pink-400 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities and interesting projects. Whether you have a question or just want
            to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-pink-500/10 transition-all duration-200 group"
            >
              <div className="flex items-start">
                <div className="bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 p-3 rounded-lg mr-4 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/70 transition-colors duration-200">
                  {method.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{method.type}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 font-mono text-sm break-all">{method.value}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{method.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:sm.sahilmalviya@gmail.com"
            className="inline-flex items-center bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors duration-200 group w-full sm:w-auto justify-center shadow-sm"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
            Send Message
          </a>
        </div>

        <div className="text-center mt-12 md:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            © 2024 Sahil Malviya. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

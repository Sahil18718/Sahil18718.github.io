import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Shopliex E-commerce Platform",
    description:
      "A comprehensive e-commerce solution built with modern web technologies. Features secure payment processing, inventory management, and responsive design. Implemented robust backend architecture with user authentication and order management systems.",
    type: "Full-stack Application",
    techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "HTML5", "CSS3"],
    image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
    github: "https://github.com/Sahil18718/NXMproject",
    live: "https://subtle-florentine-6d190f.netlify.app/",
    highlights: ["Secure payment integration", "Real-time inventory tracking", "Responsive design"],
  },
  {
    title: "Dentique Healthcare Platform",
    description:
      "A healthcare management platform connecting patients with healthcare providers. Built with real-time communication features, appointment scheduling, and secure patient data management. Collaborative project focusing on user experience and system reliability.",
    type: "Healthcare Management System",
    techStack: ["JavaScript", "Node.js", "Socket.io", "Express.js", "MongoDB", "HTML5", "CSS3"],
    image: "/placeholder.svg?height=300&width=500&text=Healthcare+Platform",
    github: "https://github.com/Sahil18718/greasy-sofa-244",
    live: "https://649021df72e88046e26e0220--stalwart-fairy-c0e628.netlify.app/",
    highlights: ["Real-time communication", "Appointment scheduling", "Secure data handling"],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-pink-600 dark:bg-pink-400 mx-auto"></div>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} order-1 lg:order-none`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-pink-500/10 transition-all duration-200">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={500}
                    height={300}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 md:h-64 object-cover"
                  />
                </div>
              </div>

              <div
                className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""} order-2 lg:order-none`}
              >
                <div>
                  <span className="text-xs sm:text-sm font-medium text-pink-600 dark:text-pink-400 uppercase tracking-wide">
                    {project.type}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center sm:justify-start text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 border border-gray-300 dark:border-gray-600 hover:border-pink-500 dark:hover:border-pink-400 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span className="font-medium">Source Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center sm:justify-start text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 border border-gray-300 dark:border-gray-600 hover:border-pink-500 dark:hover:border-pink-400 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
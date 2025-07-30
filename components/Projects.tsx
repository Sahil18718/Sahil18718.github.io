import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/Project" // Import projects data

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[color:var(--background)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] mx-auto"></div>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 md:p-10 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-[color:var(--primary-dark)]/10 transition-all duration-200"
            >
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <span className="text-xs sm:text-sm font-medium text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] uppercase tracking-wide">
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
                        <span className="w-1.5 h-1.5 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] rounded-full mr-3"></span>
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
                    className="inline-flex items-center justify-center sm:justify-start text-gray-600 dark:text-gray-300 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary-dark)] transition-colors duration-200 border border-gray-300 dark:border-gray-600 hover:border-[color:var(--primary)] dark:hover:border-[color:var(--primary-dark)] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span className="font-medium">Source Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center sm:justify-start text-gray-600 dark:text-gray-300 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary-dark)] transition-colors duration-200 border border-gray-300 dark:border-gray-600 hover:border-[color:var(--primary)] dark:hover:border-[color:var(--primary-dark)] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
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

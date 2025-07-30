import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/Project"

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[color:var(--background)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] mx-auto" />
        </div>

        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => {
            const CardContent = (
              <div
                className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 md:p-10 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-[color:var(--primary-dark)]/10 transition-all duration-200 flex flex-col justify-between h-full"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div>
                    {project.type && (
                      <span className="text-xs sm:text-sm font-medium text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] uppercase tracking-wide">
                        {project.type}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights?.length > 0 && (
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm flex items-start"
                          >
                            <span className="w-1.5 h-1.5 mt-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] rounded-full mr-3" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {project.techStack?.length > 0 && (
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )

            // Wrap card in anchor only if live link exists
            return project.live ? (
              <a
                key={index}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>{CardContent}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
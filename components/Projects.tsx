'use client'

import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/Project"
import { motion } from "framer-motion"
import { useState } from "react"

const techFilters = ["All","React Native","Expo", "React.js", "Next.js", "Node.js", "Express.js"]

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All")

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter(p => p.techStack?.includes(activeTag))

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[color:var(--background)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {techFilters.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition-all ${
                activeTag === tag
                  ? "bg-[color:var(--primary)] text-white border-transparent"
                  : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 md:p-10 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-[color:var(--primary-dark)]/10 transition-all duration-200 flex flex-col justify-between h-full"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Type + Title */}
                <div>
                  {project.type && (
                    <span className="text-xs sm:text-sm font-medium text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] uppercase tracking-wide">
                      {project.type}
                    </span>
                  )}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {project.title}
                  </h3>
                  {project.company && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      For {project.company}
                    </p>
                  )}
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

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 text-gray-600 dark:text-gray-300 hover:text-[color:var(--primary)] transition" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300 hover:text-[color:var(--primary)] transition" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


import { experiences } from "@/data/Experience"
import { Calendar, MapPin } from "lucide-react"

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[color:var(--background)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] mx-auto"></div>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-[color:var(--primary-dark)]/10 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 mb-2 gap-1 sm:gap-0">
                    <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="bg-[color:var(--accent-light-bg)] dark:bg-[color:var(--accent-dark-bg)] text-[color:var(--accent-light-text)] dark:text-[color:var(--accent-dark-text)] px-2 py-1 rounded text-xs sm:text-sm w-fit">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed flex items-start text-xs sm:text-sm md:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] rounded-full mt-1.5 sm:mt-2 mr-3 flex-shrink-0"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

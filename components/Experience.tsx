import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Software Engineer",
    company: "Freelancer",
    location: "Remote",
    duration: "Sep 2024 - Present",
    type: "Contract",
    responsibilities: [
      "Develop and maintain scalable web and mobile applications using React Native and Next.js",
      "Optimize application performance and ensure high availability for production systems",
      "Implement security best practices and authentication systems for client applications",
      "Collaborate with cross-functional teams to deliver high-quality software solutions",
    ],
    technologies: ["React Native", "Next.js", "Node.js", "AWS", "Docker", "TypeScript"],
  },
  {
    role: "Full Stack Developer",
    company: "Buzzart Software Pvt Ltd",
    location: "Remote",
    duration: "Aug 2022 - Sep 2024",
    type: "Full-time",
    responsibilities: [
      "Developed and optimized gaming platform frontend, resulting in 30% increase in user engagement",
      "Designed intuitive UI/UX interfaces that reduced bounce rates by 25%",
      "Implemented JWT-based authentication system securing 50K+ active users",
      "Built RESTful APIs and integrated third-party services for enhanced functionality",
      "Mentored junior developers and conducted code reviews to maintain code quality",
    ],
    technologies: ["React Native", "ReactJS", "Node.js", "MongoDB", "Express.js", "JWT"],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-pink-600 dark:bg-pink-400 mx-auto"></div>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-pink-500/10 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 mb-2 gap-1 sm:gap-0">
                    <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300 px-2 py-1 rounded text-xs sm:text-sm w-fit">
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
                      <span className="w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full mt-1.5 sm:mt-2 mr-3 flex-shrink-0"></span>
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
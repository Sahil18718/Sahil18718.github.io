import { Database, Globe, Server, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    skills: [
      "React Native",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Authentication (JWT, OAuth)",
      "Firebase",
      "Python",
    ],
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS (S3, EC2)",
      "Cloudinary",
      "Docker",
    ],
  },
  {
    title: "Development Tools",
    icon: <Terminal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    skills: [
      "GitHub",
      "CI/CD",
      "Storybook",
      "VS Code",
      "Postman",
      "Unit Testing",
      "E2E Testing",
    ],
  },
]


const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[color:var(--background)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] p-4 sm:p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-[color:var(--primary-dark)]/10 transition-all duration-200"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-[color:var(--accent-light-bg)] dark:bg-[color:var(--accent-dark-bg)] text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

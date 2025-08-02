import { experiences } from "@/data/Experience"
import { Calendar, MapPin } from "lucide-react"

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 bg-[color:var(--background)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-12 h-1 bg-[color:var(--primary)] mx-auto" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md dark:hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {exp.role} <span className="font-bold text-gray-600 dark:text-white">@ {exp.company}</span>
              </h3>

              <div className="flex flex-col sm:flex-row text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.duration}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
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

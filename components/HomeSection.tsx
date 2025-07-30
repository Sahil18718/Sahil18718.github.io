import { ArrowRight, MapPin } from "lucide-react"

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-24 px-4 sm:px-6 bg-[color:var(--background)]"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-6 md:space-y-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Available for opportunities</span>
          </div>

          <div className="space-y-3 md:space-y-4">
            <p className="text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] text-base sm:text-lg md:text-xl font-medium">
              Hi, my name is
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              SAHIL MALVIYA
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-600 dark:text-gray-300 leading-tight">
              Software Engineer
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mx-auto sm:mx-0">
            Experienced generative AI professional with 3+ years of expertise, eager to transition into software
            engineering. Proficient coder, adaptable, and dedicated to learning. Track record of innovation, teamwork,
            and exceeding expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 items-center sm:items-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-[color:var(--primary)] dark:border-[color:var(--primary-dark)] text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] hover:bg-[color:var(--primary)] dark:hover:bg-[color:var(--primary-dark)] hover:text-white dark:hover:text-black px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-200 group w-full sm:w-auto text-sm sm:text-base"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[color:var(--primary)] dark:hover:border-[color:var(--primary-dark)] hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary-dark)] px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base"
            >
              View my work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection

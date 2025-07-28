import Image from "next/image"
import { Download, ExternalLink } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
              <div className="w-12 h-1 bg-pink-600 dark:bg-pink-400"></div>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              <p>
                I'm a results-driven software engineer with over 3 years of experience in developing and maintaining
                scalable web and mobile applications. My expertise spans across modern JavaScript frameworks, with
                particular strength in React ecosystem and Node.js backend development.
              </p>
              <p>
                Throughout my career, I've successfully delivered platforms serving 100K+ users, consistently improving
                application performance by up to 40%. I specialize in building high-performance applications with
                real-time communication, secure authentication systems, and cloud-based solutions.
              </p>
              <p>
                I'm passionate about writing clean, maintainable code and staying current with industry best practices.
                My approach combines technical excellence with strong problem-solving skills to deliver solutions that
                drive business success.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1iAqMXfsBQPrOkNgpgzhok94RpIugudPi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 group w-full sm:w-auto justify-center sm:justify-start shadow-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-md mx-auto lg:max-w-none">
              <Image
                src="/profile.jpg"
                width={400}
                height={400}
                alt="Sahil Malviya"
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

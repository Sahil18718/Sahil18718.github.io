import Image from "next/image"
import { Download, ExternalLink } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[color:var(--background)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
              <div className="w-12 h-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)]"></div>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                I’m a results-oriented Full Stack Developer with 4+ years of experience delivering high-performance
                web and mobile applications across SaaS, real-time communication, and community platforms. My
                expertise lies in the <span className="font-medium">React, Next.js, React Native, and Node.js ecosystem</span>,
                where I specialize in building performant, modular, and future-ready solutions.
              </p>
              <p>
                My recent work includes,
                achieving <span className="font-medium">100/100 Lighthouse scores</span> in Performance, SEO, and Best Practices,
                and implementing <span className="font-medium">custom CMS, CI/CD pipelines, and Storybook-driven design systems</span>.
                I’ve also built real-time apps like <span className="font-medium">Chat Lynk</span>, syncing 50K+ users with
                WebSocket and Redux while reducing load times by over 40%.
              </p>
              <p>
                I believe in <span className="font-medium">clean architecture, scalable backend systems, and developer-first workflows</span>.
                Whether it’s optimizing frontend performance, designing robust APIs, or architecting micro frontends,
                I bring a blend of product thinking and engineering excellence to every project.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1iAqMXfsBQPrOkNgpgzhok94RpIugudPi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[color:var(--primary)] hover:bg-[color:var(--primary-hover)] dark:bg-[color:var(--primary-dark)] dark:hover:bg-[color:var(--primary-dark-hover)] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-200 group w-full sm:w-auto justify-center sm:justify-start shadow-sm text-sm sm:text-base"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-sm sm:max-w-md mx-auto lg:max-w-md">
              <Image
                src="/profile.jpg"
                width={100}
                height={100}
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

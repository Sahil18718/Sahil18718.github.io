import Header from "@/components/Header"
import LeftSection from "@/components/LeftSection"
import RightSection from "@/components/RightSection"
import HomeSection from "@/components/HomeSection"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import ClientScrollButton from "@/components/ClientScrollButton"
import GitHubStats from "@/components/GithubStats"

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] transition-colors duration-300">
      <LeftSection />
      <RightSection />
      <div className="lg:ml-16 lg:mr-16">
        <Header />
        <HomeSection />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GitHubStats />
        <Contact />
        <ClientScrollButton />
      </div>
    </div>
  )
}

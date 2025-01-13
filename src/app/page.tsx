import Header from "@/components/Header";
import LeftSection from "@/components/LeftSection";
import About from "@/components/About";
import RightSection from "@/components/RightSection";
import HomeSection from "@/components/HomeSection";
import Contact from "@/components/Contact";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import GitHubStats from "@/components/GithubStats";

export default function Home() {
  return (
    <>
      <LeftSection />
      <RightSection />
      <div >
        <Header />
        <HomeSection />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Contact />
        {/* Scroll to Top Button */}
        <a href="#" className="scrollup" id="scroll-up">
          <i className="fa-solid fa-arrow-up scrollup__icon"></i>
        </a>
      </div>
    </>
  );
}

import Head from "next/head";
import Header from "@/components/Header";
import LeftSection from "@/components/LeftSection";
import About from "@/components/About";
import RightSection from "@/components/RightSection";
import HomeSection from "@/components/HomeSection";
import Contact from "@/components/Contact";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      {/* Metadata and global scripts */}
      <Head>
        <title>Sahil | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/logo/S-removebg-preview.png"
          type="image/x-icon"
        />
        {/* AOS CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@next/dist/aos.css"
        />
        {/* FontAwesome */}
        <script
          src="https://kit.fontawesome.com/ff75adb155.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>
      <LeftSection />
      <RightSection />

      <div>
        <main>
        <Header />
        <HomeSection />
        <About />
        <Skills/>
        <Projects/>
        <Contact />

        {/* <main className="main_pannel" id="main_section">
          <HomeSection />
          <div id="about"></div>
          <div id="projects"></div>
          <div id="skills"></div>
          <GithubStats />

        </main> */}
        </main>

        {/* Scroll to Top Button */}
        <a href="#" className="scrollup" id="scroll-up">
          <i className="fa-solid fa-arrow-up scrollup__icon"></i>
        </a>
      </div>
    </>
  );
}

// import Image from "next/image";
// <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />

// export default function Home() {

// }

import React from 'react';

import AboutSection from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import GitHubActivities from './components/githubActivities';
import Header from './components/header';
import HeroSection from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <AboutSection />
    <Projects />
    <Skills />
    <GitHubActivities />
    <Contact />
    <Footer />
  </div>
);

export default Home;

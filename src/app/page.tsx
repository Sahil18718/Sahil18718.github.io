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

import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import GitHubActivities from './components/githubActivities';
import Header from './components/header';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import { ThemeProvider } from './providers/theme-provider';


const Home = () => (
  <ThemeProvider>
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <GitHubActivities />
      <Contact />
      <Footer />
    </div>
  </ThemeProvider>
);

export default Home;

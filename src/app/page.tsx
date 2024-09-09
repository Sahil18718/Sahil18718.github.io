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

import { ThemeProvider } from './providers/theme-provider';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import GitHubActivities from './components/githubActivities';
import Contact from './components/contact';
import Footer from './components/footer';


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

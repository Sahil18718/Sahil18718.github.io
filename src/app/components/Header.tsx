import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => (
  <header className="">
    <nav>
      <h1>SAHIL MALVIYA</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <ThemeToggle />
      </ul>
     
    </nav>
  </header>
);

export default Header;
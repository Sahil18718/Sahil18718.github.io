import Image from "next/image";
import React from "react";
import image from "../../assets/img/logo/S-removebg-preview.png"

const Header = () => {
  return (
    <header id="nav-menu" data-aos="fade-down" className="navigation">
      <div className="nav_container">
        {/* Logo */}
        <a href="/" className="nav_logo">
          <Image
            src={image}
            width={500}
            alt={`logo Image`}
          />
          {/* <img src="/logo/S.png" alt="Logo" /> */}
        </a>

        {/* Menu toggle for small devices */}
        <div id="menuToggle">
          <span id="first_span"></span>
          <span id="second_span"></span>
          <span id="third_span"></span>
        </div>

        {/* Navigation Links */}
        <nav className="navigation_box" id="navigation_box">
          <ul className="navigation_list_link_container">
            <li className="nav-link home" id="nav-link">
              <a href="#home">Home</a>
            </li>
            <li className="nav-link about" id="nav-link">
              <a href="#about">About</a>
            </li>
            <li className="nav-link projects" id="nav-link">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-link skills" id="nav-link">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-link contact" id="nav-link">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Resume Button */}
          <button id="resume-button-1" className="resume_link_resume shine">
            <a
              href="/Sahil-Malviya-Resume.pdf"
              className="nav-link resume"
              target="_blank"
              id="resume-link-1"
              download="Sahil-Malviya-Resume.pdf"
            >
              RESUME
            </a>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
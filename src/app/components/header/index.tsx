import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import imageLogo from '../../../lib/img/logo/S-removebg-preview.png';

const Header: React.FC = () => {
  return (
    <section id="nav-menu" className="navigation" data-aos="fade-down">
      <div className="flex border justify-between items-center ">
        {/* Logo */}
        <a className="border w-20">
          <Image src={imageLogo} alt="Logo" className="border-2" />
        </a>

        {/* Menu Toggle for small devices */}
        {/* <div id="menuToggle" className="space-y-2 cursor-pointer">
          <span id="first_span" className="block w-8 h-0.5 bg-gray-800"></span>
          <span id="second_span" className="block w-8 h-0.5 bg-gray-800"></span>
          <span id="third_span" className="block w-8 h-0.5 bg-gray-800"></span>
        </div> */}

        {/* Navigation Links */}
        <div id="navigation_box" className="hidden md:flex space-x-8">
          <ul className="flex space-x-4 text-gray-800">
            <li className="nav-link">
              <Link href="#home">Home</Link>
            </li>
            <li className="nav-link">
              <Link href="#about">About</Link>
            </li>
            <li className="nav-link">
              <Link href="#projects">Project</Link>
            </li>
            <li className="nav-link">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="nav-link">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          {/* Resume Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shine">
            <a
              href="/assets/pdf/Sahil-Malviya-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sahil-Malviya-Resume.pdf"
            >
              RESUME
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

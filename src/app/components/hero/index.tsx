import React from 'react';

import { heroData } from './heroData'; // Adjust the path as necessary

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Introduction */}
        <h3 className="text-lg text-gray-600 mb-2" data-aos="fade-right">
          {heroData.introduction}
        </h3>

        {/* Name */}
        <h1
          id="user-detail-name"
          data-aos="fade-up"
          className="text-4xl font-bold mb-2"
        >
          {heroData.name}
        </h1>

        {/* Job Title */}
        <h1 className="text-3xl font-semibold mb-4" data-aos="zoom-in">
          {heroData.jobTitle}
        </h1>

        {/* Description */}
        <p
          id="user-detail-intro"
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          data-aos="fade-down"
        >
          {heroData.description}
        </p>

        {/* Contact Button */}
        <a
          href={heroData.contactLink}
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
          data-aos="zoom-in-down"
        >
          Contact Me <span className="ml-2">💬</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="home section py-16 bg-gray-100">
      <div className="home_container max-w-4xl mx-auto text-center">
        {/* Introduction */}
        <h3
          className="home_container_intro text-lg text-gray-600 mb-2"
          data-aos="fade-right"
        >
          Hi, my name is
        </h3>

        {/* Name */}
        <h1
          id="user-detail-name"
          data-aos="fade-up"
          className="home_container_intro_name text-4xl font-bold mb-2"
        >
          SAHIL MALVIYA
        </h1>

        {/* Job Title */}
        <h1 className="text-3xl font-semibold mb-4" data-aos="zoom-in">
          Full Stack Developer
        </h1>

        {/* Description */}
        <p
          id="user-detail-intro"
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          data-aos="fade-down"
        >
          Experienced generative AI professional with 2+ years of expertise,
          eager to transition into software engineering. Proficient coder,
          adaptable, and dedicated to learning. Track record of innovation,
          teamwork, and exceeding expectations.
        </p>

        {/* Contact Button */}
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
          data-aos="zoom-in-down"
        >
          Contact Me <i className="fa-regular fa-message ml-2"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

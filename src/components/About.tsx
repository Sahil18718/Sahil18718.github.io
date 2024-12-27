import React from "react";
const About = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="section_title">
        02. <span>About Me</span>
      </div>

      {/* About Container */}
      <div className="about_container" data-aos="fade-right">
        {/* Left Section */}
        <div className="about_left">
          {/* Hidden Skills */}
          <p id="user-detail-intro" style={{ display: "none" }}>
            "NodeJS", "JavaScript", "MongoDB", "Frontend", "Backend", "Python",
            "SQL", "UI", "HTML", "CSS", "Express", "RESTful APIs"
          </p>

          {/* About Content */}
          <p>
            Hello, <br />
            I'm <strong>Sahil Malviya</strong>, an adaptable professional with a
            background in generative AI, poised to transition into software
            engineering. Proficient in teamwork, payment gateways, mobile app
            development, subscription systems, and many more skills. Skilled in
            both backend and frontend development, with a proven track record
            of innovation.
          </p>

          <p>
            For more details on my skills and projects, please see the sections
            below.
          </p>

          <p>
            At <strong>Masai School</strong>, I have successfully completed the
            following:
          </p>

          {/* Stats Section */}
          <div className="about_stats">
            <div>
              <span className="stats_number">1500+</span>
              <span className="stats_title">Hours of coding</span>
            </div>
            <div>
              <span className="stats_number">500+</span>
              <span className="stats_title">DSA Problems</span>
            </div>
            <div>
              <span className="stats_number">12+</span>
              <span className="stats_title">Projects</span>
            </div>
          </div>

          {/* Download Resume Button */}
          <button id="resume-button-2" className="shine2" data-aos="zoom-in-down">
            <a
              href="/Sahil-Malviya-Resume.pdf"
              id="resume-link-2"
              download="Sahil-Malviya-Resume.pdf"
              className="flex items-center"
            >
              Download CV <i className="fa-solid fa-download ml-2"></i>
            </a>
          </button>
        </div>

        {/* Right Section */}
        <div className="about_right" data-aos="zoom-in-left">
          <div className="about_img_container home-img">
            <img
              src="../assets/img/profile.jpg"
              alt="Sahil Malviya"
              className="home-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

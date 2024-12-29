import React from "react";
import { aboutData } from "@/data/About";


const About = () => {
  const { sectionTitle, intro, stats, resume, profileImage } = aboutData;

  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="section_title">
        {sectionTitle.split(".")[0]}. <span>{sectionTitle.split(". ")[1]}</span>
      </div>

      {/* About Container */}
      <div className="about_container" data-aos="fade-right">
        {/* Left Section */}
        <div className="about_left">
          {/* Hidden Skills */}
          <p id="user-detail-intro" style={{ display: "none" }}>
            {intro.hiddenSkills}
          </p>

          {/* About Content */}
          <p>{intro.introduction}</p>
          <p>{intro.details}</p>
          <p>{intro.masaiSchoolAchievement}</p>

          {/* Stats Section */}
          <div className="about_stats">
            {stats.map((stat, index) => (
              <div key={index}>
                <span className="stats_number">{stat.number}</span>
                <span className="stats_title">{stat.title}</span>
              </div>
            ))}
          </div>

          {/* Download Resume Button */}
          <button id="resume-button-2" className="shine2" data-aos="zoom-in-down">
            <a
              href={resume.link}
              id="resume-link-2"
              download="Sahil-Malviya-Resume.pdf"
              className="flex items-center"
            >
              {resume.buttonText} <i className="fa-solid fa-download ml-2"></i>
            </a>
          </button>
        </div>

        {/* Right Section */}
        <div className="about_right" data-aos="zoom-in-left">
          <div className="about_img_container home-img">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt={profileImage.alt}
              className="home-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

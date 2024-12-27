import React from "react";
import { homeSectionData } from "@/data";

const HomeSection = () => {
  const { intro, name, title, description, buttonText, buttonIcon, contactLink } = homeSectionData;

  return (
    <section id="home" className="home section">
      <div className="home_container">
        <h3 className="home_container_intro" data-aos="fade-right">
          {intro}
        </h3>
        <h1
          id="user-detail-name"
          data-aos="fade-up"
          className="home_container_intro_name"
        >
          {name}
        </h1>
        <h1 data-aos="zoom-in">{title}</h1>
        <p id="user-detail-intro" data-aos="fade-down">
          {description}
        </p>
        <a href={contactLink} data-aos="zoom-in-down" className="btn">
          {buttonText} <i className={buttonIcon}></i>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;

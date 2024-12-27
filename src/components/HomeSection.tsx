import React from "react";

const HomeSection = () => {
    return (
        <section id="home" className="home section">
            <div className="home_container">
                <h3 className="home_container_intro" data-aos="fade-right">
                    Hi, my name is
                </h3>
                <h1
                    id="user-detail-name"
                    data-aos="fade-up"
                    className="home_container_intro_name"
                >
                    SAHIL MALVIYA
                </h1>
                <h1 data-aos="zoom-in">Full Stack Developer</h1>
                <p id="user-detail-intro" data-aos="fade-down">
                    Experienced generative AI professional with 2+ years of expertise,
                    eager to transition into software engineering. Proficient coder,
                    adaptable, and dedicated to learning. Track record of innovation,
                    teamwork, and exceeding expectations.
                </p>
                <a href="#contact" data-aos="zoom-in-down" className="btn">
                    Contact Me <i className="fa-regular fa-message"></i>
                </a>
            </div>
        </section>
    );
};

export default HomeSection;

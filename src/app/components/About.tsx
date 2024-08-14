import React from "react";
import styles from "../styles/About.module.css";
import profileImage from "../../../public/profile.jpg"

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>02. About Me</h2>
            <p className={styles.greeting}>Hello,</p>
            <p className={styles.description}>
              I'm Sahil Malviya, an adaptable professional with a background in
              generative AI, poised to transition into software engineering.
              Proficient in teamwork, payment gateways, mobile app development,
              subscription systems, and many more skills. Skilled in both
              backend and frontend development, with a proven track record of
              innovation.
            </p>
            <p className={styles.description}>
              For more details on my skills and projects, please see below
              sections
            </p>
            <p className={styles.description}>
              At Masai School I have successfully completed following:
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <p className={styles.statValue}>1500+</p>
                <p className={styles.statLabel}>Hours of coding</p>
              </div>
              <div className={styles.statItem}>
                <p className={styles.statValue}>500+</p>
                <p className={styles.statLabel}>DSA Problems</p>
              </div>
              <div className={styles.statItem}>
                <p className={styles.statValue}>12+</p>
                <p className={styles.statLabel}>Projects</p>
              </div>
            </div>
            <a href="/path-to-your-cv.pdf" className={styles.downloadCv} download>
              Download CV <span className="ml-2">📄</span>
            </a>
          </div>
          <div className={styles.aboutImage}>
            <img
              src={profileImage}
              alt="Sahil Malviya"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

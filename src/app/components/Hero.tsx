import React from "react";
import styles from "../styles/Hero.module.css"
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.introText}>Hi, my name is</p>
      <h1 className={styles.nameText}>Sahil Malviya</h1>
      <h2 className={styles.roleText}>Full Stack Developer</h2>
      <p className={styles.descriptionText}>
        Experienced generative AI professional with 2+ years of expertise, eager
        to transition into software engineering. Proficient coder, adaptable,
        and dedicated to learning. Track record of innovation, teamwork, and
        exceeding expectations.
      </p>
      <button className={styles.contactButton}>Contact Me</button>
    </div>
  );
};

export default Hero;

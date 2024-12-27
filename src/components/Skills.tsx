
import { techStacks, toolsAndLibraries } from "@/data";
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills section" data-aos="fade-up">
      {/* Section Title */}
      <div className="section_title">
        04. <span>Skills</span>
      </div>

      {/* Skills Container */}
      <div className="skills_container">
        {/* Tech Stacks */}
        <div className="frontend-skills">
          <h1>Tech Stacks</h1>
          <div className="fs_container">
            {techStacks.map((skill, index) => (
              <div
                className="skills-card"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                key={index}
              >
                <img
                  src={skill.icon}
                  className="skills-card-img"
                  alt={skill.name}
                />
                <span className="skills-card-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Libraries */}
        <div className="backend-skills">
          <h1>Tools & Libraries</h1>
          <div className="bs_container">
            {toolsAndLibraries.map((tool, index) => (
              <div
                className="skills-card"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                key={index}
              >
                <img
                  src={tool.icon}
                  className="skills-card-img"
                  alt={tool.name}
                />
                <span className="skills-card-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

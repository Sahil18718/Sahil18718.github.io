import React from "react";

const techStacks = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Express.js",
    icon: "/icon/express1.png",
  },
  {
    name: "Node.js",
    icon: "/icon/node.png",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQL",
    icon: "/icon/sql.png",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "AWS",
    icon: "/icon/aws.png",
  },
  {
    name: "Redis",
    icon: "/icon/icons8-redis-48.png",
  },
];

const toolsAndLibraries = [
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Github",
    icon: "https://www.svgrepo.com/show/217753/github.svg",
  },
  {
    name: "NPM",
    icon: "/icon/npm.png",
  },
  {
    name: "Draw.io",
    icon: "/icon/draw-io.svg",
  },
  {
    name: "Netlify",
    icon: "/icon/netlify.png",
  },
  {
    name: "Figma",
    icon: "/icon/figma.png",
  },
  {
    name: "Canva",
    icon: "/icon/canva.png",
  },
];

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

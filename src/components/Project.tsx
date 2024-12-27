import React from "react";

const projects = [
  {
    title: "Shoplliex",
    description:
      "In just 4 days, I've successfully created a secure e-commerce clothing website with a robust and secure backend. Users can confidently browse, shop, and make purchases on the platform, knowing that their data is protected.",
    type: "Individual project",
    techStack: [
      "HTML5&CSS",
      "JavaScript",
      "NodeJS",
      "RESTful APIs",
      "Express",
      "MongoDB",
    ],
    images: ["/shoplix/shop1.png", "/shoplix/shp2.png", "/shoplix/shp3.png"],
    github: "https://github.com/Sahil18718/NXMproject",
    live: "https://subtle-florentine-6d190f.netlify.app/",
  },
  {
    title: "Dentique",
    description:
      "In just 4 days, we've launched a platform connecting patients with the right doctors swiftly and efficiently. Users can visit our website, find ideal healthcare providers, and schedule appointments hassle-free.",
    type: "Collaborative project",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node",
      "Socket.io",
      "Express",
      "MongoDB",
    ],
    images: ["/Dentique/den1.png", "/Dentique/Den2.png", "/Dentique/Den3.png"],
    github: "https://github.com/Sahil18718/greasy-sofa-244",
    live: "https://649021df72e88046e26e0220--stalwart-fairy-c0e628.netlify.app/",
  },
  {
    title: "Shopping Zone",
    description:
      "In just 4 days, we've launched a one-stop shopping website where users can find a wide range of products for men, women, and gifts. Our platform offers a seamless shopping experience with diverse product categories.",
    type: "Individual project",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "NodeJS",
      "JWT",
      "Express",
      "MongoDB",
    ],
    images: [
      "/Shoping Zone/s1.png",
      "/Shoping Zone/s2.png",
      "/Shoping Zone/s3.png",
    ],
    github: "https://github.com/Sahil18718/Unit3project-group",
    live: "https://groupprojectunit3.netlify.app/",
  },
  {
    title: "Burberry",
    description:
      "In just 3 days, I've developed a straightforward e-commerce website that allows users to browse and purchase products online. This user-friendly platform offers essential shopping features, making it easy for customers to find and buy products.",
    type: "Individual project",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    images: ["/Burberry/B1.png", "/Burberry/B2.png", "/Burberry/B3.png"],
    github: "https://github.com/Sahil18718/tired-rail-4343",
    live: "https://cosmic-meringue-964590.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      {/* Section Title */}
      <div className="section_title">
        03. <span>My Projects</span>
      </div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <div className="project-card" data-aos="fade-up" key={index}>
          {/* Image Section */}
          <div
            className="project-card_img_section"
            data-aos="fade-right"
          >
            <div
              id={`carouselExampleSlidesOnly-${index}`}
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                {project.images.map((image, imgIndex) => (
                  <div
                    className={`carousel-item ${
                      imgIndex === 0 ? "active" : ""
                    }`}
                    key={imgIndex}
                  >
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`${project.title} Image`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div
            className="project-card_description_section"
            data-aos="fade-left"
          >
            <h2 className="project-title">{project.title}</h2>
            <div className="project-description">
              <p>{project.description}</p>
              <p>{project.type}</p>
            </div>
            <div className="project-tech-stack">
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
            <div className="project_btn">
              <a
                href={project.github}
                className="project-github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href={project.live}
                className="project-deployed-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

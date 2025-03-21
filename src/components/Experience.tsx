import React from "react";

const experiences = [
  {
    company: "Freelancer",
    role: "Software Engineer (Remote)",
    duration: "Sep 2024 - Present",
    responsibilities: [
      "Developing and maintaining scalable web and mobile applications.",
      "Optimizing application performance and ensuring high availability.",
      "Implementing best practices for security and authentication."
    ],
    technologies: ["React Native", "Next.js", "Node.js", "AWS", "Docker"]
  },
  {
    company: "Buzzart Software Pvt Ltd",
    role: "Full Stack Developer (Remote)",
    duration: "Aug 2022 - Sep 2024",
    responsibilities: [
      "Developed and optimized a gaming platform frontend, increasing engagement by 30%.",
      "Designed an intuitive UI/UX, reducing bounce rates by 25%.",
      "Implemented JWT authentication, securing 50K+ active users."
    ],
    technologies: ["React Native", "ReactJS", "Node.js", "MongoDB"]
  },
  {
    company: "John Deere Pvt Ltd",
    role: "Trainee (Dewas)",
    duration: "Aug 2021 - Aug 2022",
    responsibilities: [
      "Developed internal web applications using ReactJS.",
      "Built and maintained company websites with optimized performance.",
      "Implemented SEO best practices, improving search engine ranking."
    ],
    technologies: ["ReactJS", "HTML", "CSS", "Node.js"]
  }
];

const Experience = () => {
  return (
    <section  id="skills" data-aos="fade-up" className=" skills section  to-black">
      <div className="section_title">
        04. <span>Experience</span>
      </div>
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 shadow-lg p-8 rounded-xl border border-gray-700 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              <p className="text-gray-400 text-lg">{exp.company} | {exp.duration}</p>
              <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="leading-relaxed">{resp}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-gray-400">Tech Stack: <span className="text-primary">{exp.technologies.join(", ")}</span></p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Experience;

import { experiences } from "@/data/Experience";
import React from "react";

const Experience = () => {
  return (
    <section  id="skills" data-aos="fade-up" className=" skills section  to-black">
      <div className="section_title">
        04. <span>Experience</span>
      </div>
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className=" shadow-lg p-8 rounded-xl border border-gray-700 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className=" text-lg">{exp.company} | {exp.duration}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="leading-relaxed">{resp}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium ">Tech Stack: <span className="text-primary">{exp.technologies.join(", ")}</span></p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Experience;

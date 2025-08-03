'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, techFilters } from '@/data/Project';
import ProjectModal from './clients/ProjectModal';

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter(p => p.techStack?.includes(activeTag));

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[color:var(--background)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[color:var(--primary)] dark:bg-[color:var(--primary-dark)] mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {techFilters.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition-all ${activeTag === tag
                  ? "bg-[color:var(--primary)] text-white border-transparent"
                  : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-[color:var(--primary-dark)]/10 transition-all duration-200"
            >
              <span className="text-xs font-medium uppercase text-[color:var(--primary)]">
                {project.type}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
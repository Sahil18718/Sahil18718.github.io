'use client'

import { ExternalLink, Github, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Project = {
  type: string
  title: string
  company?: string
  description: string
  highlights?: string[]
  techStack?: string[]
  github?: string
  live?: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-zinc-900 rounded-lg max-w-2xl w-full p-6 relative shadow-xl"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-medium uppercase text-[color:var(--primary)]">
            {project.type}
          </span>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-2">
            {project.title}
          </h2>
          {project.company && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">For {project.company}</p>
          )}

          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-6">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-sm mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-zinc-500 hover:text-[color:var(--primary)]" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 text-zinc-500 hover:text-[color:var(--primary)]" />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

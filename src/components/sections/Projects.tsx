"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { projects, type Project } from "@/lib/constants";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap } from "lucide-react";

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15 }}
      className="group relative rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-400 overflow-hidden transition-all duration-500 hover:shadow-xl"
    >
      {/* Gradient top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-zinc-400 dark:via-zinc-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex gap-2 ml-4 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
              >
                <Zap size={10} />
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Expandable Description */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-5 overflow-hidden"
            >
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50 dark:bg-zinc-800/30 rounded-xl p-4">
                {project.longDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand/Collapse Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          {expanded ? (
            <>
              Show less <ChevronUp size={14} />
            </>
          ) : (
            <>
              Read more <ChevronDown size={14} />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <div ref={ref}>
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-zinc-500 dark:text-zinc-400 font-mono text-sm font-medium tracking-wider uppercase"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-3"
          >
            Projects I&apos;ve built.
          </motion.h2>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Other Projects Toggle */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-center mb-8"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-400 transition-all"
              >
                {showAll ? "Show Less" : `View ${otherProjects.length} More Projects`}
                {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </motion.div>

            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherProjects.map((project, index) => (
                      <motion.a
                        key={project.title}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                            {project.title}
                          </h4>
                          <Github
                            size={16}
                            className="text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
                          />
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}

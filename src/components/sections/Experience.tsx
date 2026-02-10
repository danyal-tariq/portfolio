"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { experience } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="experience"
      className="bg-zinc-50/50 dark:bg-zinc-900/20"
    >
      <div ref={ref}>
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-indigo-600 dark:text-indigo-400 font-mono text-sm font-medium tracking-wider uppercase"
          >
            Career
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-3"
          >
            Where I&apos;ve worked.
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 md:-translate-x-px" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-white dark:ring-zinc-950 z-10 top-8" />

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div
                  className={`p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Briefcase size={18} />
                    </div>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-1.5 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="relative flex flex-col md:flex-row items-start gap-8 md:flex-row-reverse"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-white dark:ring-zinc-950 z-10 top-8" />

            <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)] md:pl-8">
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <GraduationCap size={18} />
                  </div>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Education
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                  Bachelor&apos;s in Computer Science
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Focused on software engineering, data structures, algorithms,
                  and artificial intelligence.
                </p>
              </div>
            </div>

            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

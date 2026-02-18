"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { skills } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGit,
  SiGitlab,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  TbBrandAzure,
  SiGit,
  SiGitlab,
  SiJavascript,
  TbBrandCSharp,
  SiPython,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="skills" className="bg-zinc-50 dark:bg-zinc-900/20">
      <div ref={ref}>
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-zinc-500 dark:text-zinc-400 font-mono text-sm font-medium tracking-wider uppercase"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-3"
          >
            Technologies I work with.
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-zinc-900 dark:bg-zinc-100" />
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill, i) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + catIndex * 0.1 + i * 0.05 }}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-400 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {Icon && (
                        <Icon className="w-5 h-5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors shrink-0" />
                      )}
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

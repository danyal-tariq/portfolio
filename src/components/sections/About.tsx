"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/constants";
import { MapPin, Building2, Target, Gamepad2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Building2,
      label: "Company",
      value: siteConfig.company,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
    },
    {
      icon: Target,
      label: "2026 Goal",
      value: "Master System Design",
    },
    {
      icon: Gamepad2,
      label: "Fun Fact",
      value: "RTS Gamer — Red Alert FTW!",
    },
  ];

  return (
    <SectionWrapper id="about">
      <div ref={ref}>
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-indigo-600 dark:text-indigo-400 font-mono text-sm font-medium tracking-wider uppercase"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-3"
          >
            Building things that matter.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I&apos;m a{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                Software Engineer
              </span>{" "}
              based in the{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                UAE
              </span>
              , currently building full-stack solutions at{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                Phoenix Group
              </span>
              . I specialize in architecting production-grade applications with
              modern web technologies.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My expertise spans the entire development lifecycle — from
              designing scalable system architectures with event-driven patterns
              and real-time capabilities, to crafting pixel-perfect user
              interfaces with buttery-smooth interactions.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Beyond web development, I have a passion for{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                game development
              </span>{" "}
              with Unity and exploring{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                AI/ML
              </span>
              . When I&apos;m not coding, you&apos;ll find me commanding armies
              in RTS games or diving deep into system design concepts.
            </p>
          </motion.div>

          {/* Highlights - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 grid grid-cols-1 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider font-medium">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

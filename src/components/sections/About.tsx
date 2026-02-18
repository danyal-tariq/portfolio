"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/constants";
import { MapPin, Building2, Target, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Calendar,
      label: "Experience",
      value: "5+ Years",
    },
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
  ];

  return (
    <SectionWrapper id="about">
      <div ref={ref}>
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-zinc-500 dark:text-zinc-400 font-mono text-sm font-medium tracking-wider uppercase"
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
              with{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                5+ years
              </span>{" "}
              of experience, based in{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                Dubai, UAE
              </span>
              . Currently building enterprise-grade full-stack solutions at{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                Phoenix Group
              </span>
              , where I&apos;ve driven 80%+ cost reductions and 99.9% uptime on
              distributed systems.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My expertise spans{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                React/Next.js
              </span>{" "}
              on the frontend,{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                Node.js microservices
              </span>{" "}
              on the backend, and{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                cloud-native architecture
              </span>{" "}
              with Docker, Kubernetes, AWS, and Azure. I&apos;ve migrated
              monoliths to containers, optimized API latency by 35%, and built
              automation tools saving 15+ hours per week.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Before web development, I spent years in{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                high-performance C# systems
              </span>{" "}
              and{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                game development
              </span>{" "}
              with Unity — optimizing build sizes by 80% and reducing CPU usage
              by 25%. When I&apos;m not coding, you&apos;ll find me commanding
              armies in RTS games or diving deep into system design.
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
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-400 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
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

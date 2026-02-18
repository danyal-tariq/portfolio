"use client";

import { siteConfig } from "@/lib/constants";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold text-zinc-900 dark:text-white">
              {siteConfig.name.split(" ")[0]}
              <span className="text-zinc-400 dark:text-zinc-500">.</span>
            </span>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
              Built with <Heart size={12} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: siteConfig.github },
              { icon: Linkedin, href: siteConfig.linkedin },
              { icon: Mail, href: `mailto:${siteConfig.email}` },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

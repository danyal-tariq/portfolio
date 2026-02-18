"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(
        siteConfig.email
      )}`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (!res.ok) {
        throw new Error(`Form submission failed: ${res.status}`);
      }

      setSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      // keep it simple: log and show a transient failure state
      // could be enhanced to show a toast or inline error
      // eslint-disable-next-line no-console
      console.error(err);
      alert("Unable to send message right now. Please email " + siteConfig.email);
    } finally {
      setSending(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: siteConfig.github,
      label: "GitHub",
      handle: "@danyal-tariq",
    },
    {
      icon: Linkedin,
      href: siteConfig.linkedin,
      label: "LinkedIn",
      handle: "Danyal Tariq",
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      label: "Email",
      handle: siteConfig.email,
    },
  ];

  return (
    <SectionWrapper id="contact">
      <div ref={ref}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-zinc-500 dark:text-zinc-400 font-mono text-sm font-medium tracking-wider uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-3"
          >
            Let&apos;s work together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-lg mx-auto"
          >
            Have a project in mind or just want to chat? Feel free to reach out
            — I&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 max-w-4xl mx-auto">
          {/* Contact Form - 3 cols */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/50 focus:border-zinc-400 dark:focus:ring-zinc-500/50 dark:focus:border-zinc-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/50 focus:border-zinc-400 dark:focus:ring-zinc-500/50 dark:focus:border-zinc-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/50 focus:border-zinc-400 dark:focus:ring-zinc-500/50 dark:focus:border-zinc-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group w-full sm:w-auto px-8 py-3.5 bg-zinc-900 hover:bg-zinc-700 disabled:bg-zinc-400 dark:bg-white dark:hover:bg-zinc-200 dark:disabled:bg-zinc-600 text-white dark:text-zinc-900 rounded-xl font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : sent ? (
                "✓ Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </>
              )}
            </button>
          </motion.form>

          {/* Social Links - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-4">
              Or find me on
            </p>
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-400 transition-all duration-300 hover:shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  <link.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">
                    {link.label}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 truncate">
                    {link.handle}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

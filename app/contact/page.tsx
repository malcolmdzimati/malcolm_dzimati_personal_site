"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { GithubIcon, LinkedInIcon, ArrowUpRightIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const EMAIL = "malcolmdzimati@gmail.com";

const socials = [
  {
    label: "GitHub",
    handle: "@malcolmdzimati",
    href: siteConfig.links.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    handle: "Batsirai Dzimati",
    href: siteConfig.links.linkedIn,
    icon: LinkedInIcon,
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center"
      >
        Contact
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif italic text-4xl sm:text-5xl text-center text-balance"
      >
        Let&rsquo;s build something.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-muted-foreground text-center max-w-xl mx-auto mt-4"
      >
        Whether it&rsquo;s a project, a role, or just a good conversation about tech and property —
        my inbox is open.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <a
          href={`mailto:${EMAIL}`}
          className="font-serif text-2xl sm:text-3xl text-accent hover:underline underline-offset-4 decoration-2 break-all text-center"
        >
          {EMAIL}
        </a>
        <button
          onClick={handleCopy}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
        >
          {copied ? "Copied to clipboard" : "Copy email address"}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14"
      >
        {socials.map(({ label, handle, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            <Card className="p-6 flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-4">
                <Icon className="text-muted-foreground" />
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-muted-foreground">{handle}</p>
                </div>
              </div>
              <ArrowUpRightIcon className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Card>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

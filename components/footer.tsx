"use client";

import NextLink from "next/link";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="text-center sm:text-left">
          <NextLink href="/" className="font-serif italic text-lg text-foreground">
            Malcolm Dzimati
          </NextLink>
          <p className="text-sm text-muted-foreground mt-1">
            Building tech with purpose. Investing in systems that scale.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedIn} className="text-muted-foreground hover:text-accent transition-colors">
            <LinkedInIcon />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github} className="text-muted-foreground hover:text-accent transition-colors">
            <GithubIcon />
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Batsirai Malcolm Dzimati
        </p>
      </motion.div>
    </footer>
  );
};

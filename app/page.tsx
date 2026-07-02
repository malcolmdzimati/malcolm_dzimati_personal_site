"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRightIcon } from "@/components/icons";

const headline = "Batsirai Malcolm Dzimati";

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const destinations = [
  {
    title: "Projects",
    description: "Payment systems, cryptography, and property tools I've shipped.",
    href: "/projects",
  },
  {
    title: "About",
    description: "The background, the beliefs, and what I'm working toward.",
    href: "/about",
  },
  {
    title: "Digital CV",
    description: "Experience, education, and skills — the formal version.",
    href: "/cv",
  },
  {
    title: "Contact",
    description: "Have something worth building together? Let's talk.",
    href: "/contact",
  },
];

const highlights = [
  "Software Engineer @ Investec",
  "Payments & Cryptography",
  "Founder, Rota Ventures",
  "BSc Hons Computer Science",
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-4">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-8 left-[8%] h-[30rem] w-[30rem] rounded-full bg-accent/40 blur-3xl animate-float-slow" />
          <div className="absolute top-1/4 right-[6%] h-[26rem] w-[26rem] rounded-full bg-accent/30 blur-3xl animate-float" />
          <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6"
        >
          Software Engineer · Tech Innovator · Property Investor
        </motion.p>

        <motion.h1
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-center text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance max-w-4xl"
        >
          {headline.split(" ").map((word, i) => (
            <motion.span key={i} variants={wordItem} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl text-center text-balance"
        >
          Building tech with purpose. Investing in systems that scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Link href="/projects">
            <Button size="lg">View Projects</Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">About Me</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-16 text-sm text-muted-foreground"
        >
          {highlights.map((h, i) => (
            <span key={h} className="flex items-center gap-2">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-accent/60" />}
              {h}
            </span>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 text-muted-foreground"
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v16m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-serif italic text-3xl sm:text-4xl">Where to look</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {destinations.map((card) => (
            <Link key={card.title} href={card.href}>
              <Card className="h-full p-8 cursor-pointer group">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-serif">{card.title}</h3>
                  <ArrowUpRightIcon className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground mt-3">{card.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { QuickNav } from "@/components/quick-nav";

const aboutSections = [
  { id: "bio", label: "Bio" },
  { id: "background", label: "Background" },
];

const background = [
  { label: "Education", value: "BSc & Honours in Computer Science — University of Pretoria" },
  { label: "Role", value: "Forward Deployed Tech Lead, AI & Cloud Platforms — Vectr Labs (2025–present)" },
  { label: "Previously", value: "Software Engineer, Payments & Cryptography — Investec (2023–2025)" },
  { label: "Venture", value: "Founder — Rota Dzimati Group (property portfolio & tools)" },
];

const paragraphs = [
  <>
    Hey, I&rsquo;m <strong className="text-foreground">Batsirai Malcolm Dzimati</strong> — a software
    engineer who likes taking systems from &ldquo;it works&rdquo; to &ldquo;it works under pressure.&rdquo;
    These days that means leading architecture, cloud strategy, and applied-AI work at{" "}
    <strong className="text-foreground">Vectr Labs</strong>, where I build production backend systems and
    agentic workflows for clients on top of AWS and Azure.
  </>,
  <>
    My current focus is narrower and more specific than &ldquo;AI&rdquo; as a buzzword: using LLM tooling to
    build distributed, performant systems that hold up in production — not demos. I spend a lot of time
    probing how far LLMs can actually take a system on their own, and where a human still has to be in the
    loop, because that boundary is the difference between a clever prototype and something you can put
    real load on. I care just as much about the economics of it — making sure investment into LLM-powered
    systems actually returns something — as I do about the R&amp;D side: fine-tuning, evaluation, and the
    unglamorous work of figuring out what actually moves the needle.
  </>,
  <>
    I got here by way of banking. Three years at Investec&rsquo;s payments and cryptography platform taught
    me what &ldquo;can&rsquo;t go down&rdquo; actually means — on-call rotations for card and PIN systems,
    HSM key ceremonies, event-driven rewrites during Black Friday load. That grounding in high-stakes,
    zero-tolerance systems is the thread running through everything I&rsquo;ve built since, LLMs included.
  </>,
  <>
    Outside of client work, I run <strong className="text-foreground">Rota Dzimati Group</strong>, a small but
    growing property investment venture. I&rsquo;m drawn to the same problem in a different domain: using
    automation and thoughtful tooling to manage rental properties at scale, rather than by spreadsheet and
    guesswork.
  </>,
  <>
    Long-term, I&rsquo;m focused on building ventures that matter — in tech and in property, locally and
    further afield — and helping others level up along the way. I believe in learning by doing, and in
    creating opportunities through innovation rather than waiting for them.
  </>,
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
      >
        About
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif italic text-4xl sm:text-5xl mb-12"
      >
        The short version.
      </motion.h1>

      <QuickNav sections={aboutSections} layoutId="about-nav-underline" />

      <div id="bio" className="space-y-6 scroll-mt-32">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.05 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            {p}
          </motion.p>
        ))}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          This site is a window into my journey — the things I&rsquo;m building, learning, and thinking
          about. Feel free to{" "}
          <Link href="/contact" className="text-accent hover:underline underline-offset-4">
            reach out
          </Link>{" "}
          if you want to connect.
        </motion.p>
      </div>

      <div id="background" className="scroll-mt-32">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-serif text-2xl mt-16 mb-6"
        >
          Background
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-4"
        >
          {background.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-border pb-4"
            >
              <span className="text-sm font-medium tracking-wide uppercase text-accent sm:w-32 shrink-0">
                {item.label}
              </span>
              <span className="text-foreground">{item.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

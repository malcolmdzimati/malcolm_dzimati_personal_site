"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const background = [
  { label: "Education", value: "BSc & Honours in Computer Science — University of Pretoria" },
  { label: "Role", value: "Software Engineer — Investec (2023–present)" },
  { label: "Venture", value: "Founder — Rota Ventures (property portfolio & tools)" },
];

const paragraphs = [
  <>
    Hey, I&rsquo;m <strong className="text-foreground">Batsirai Malcolm Dzimati</strong> — a software &
    cryptography engineer, entrepreneur, and lifelong learner with a passion for technology, business,
    and property. I currently work in the transactional banking space, where I&rsquo;ve contributed to
    secure payment systems, fraud detection tools, and large-scale infrastructure projects. I love
    solving complex problems and building efficient systems that create real-world impact.
  </>,
  <>
    Beyond code, I run a small but growing property investment venture. I&rsquo;m deeply interested in
    using automation and thoughtful design to manage rental properties at scale — blending technology
    and real estate to create smarter living experiences.
  </>,
  <>
    Long-term, I&rsquo;m focused on building ventures that matter, investing in both local and global
    markets, and helping others level up along the way. Whether it&rsquo;s tech tools, financial
    literacy, or infrastructure, I believe in learning by doing and creating opportunities through
    innovation.
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

      <div className="space-y-6">
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
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
];

export const CvQuickNav = () => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-16 z-30 -mx-4 mb-12 border-y border-border bg-background/85 backdrop-blur-md px-4 py-3 overflow-x-auto">
      <ul className="flex items-center gap-6 w-max mx-auto text-sm">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative inline-block py-1 whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className={isActive ? "text-foreground font-medium" : ""}>{label}</span>
                {isActive && (
                  <motion.span
                    layoutId="cv-nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

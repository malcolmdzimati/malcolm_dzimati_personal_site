"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@/components/icons";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  tags: string[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const contentFade = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  details,
  tags,
  isOpen,
  onOpen,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      <motion.button
        layoutId={`card-${title}`}
        onClick={onOpen}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        style={{ borderRadius: 24 }}
        className="h-full w-full text-left p-6 flex flex-col border border-border bg-card shadow-sm hover:shadow-lg hover:border-accent/40 transition-shadow"
      >
        <motion.h3 layoutId={`card-title-${title}`} className="text-xl font-serif mb-2">
          {title}
        </motion.h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-3 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground">
              +{tags.length - 4}
            </span>
          )}
        </div>
        <span className="text-accent text-sm">See more →</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              layoutId={`card-${title}`}
              style={{ borderRadius: 24 }}
              transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto border border-border bg-card p-6 sm:p-8 shadow-xl"
            >
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                <CloseIcon />
              </button>
              <motion.h3 layoutId={`card-title-${title}`} className="text-2xl font-serif mb-4 pr-8">
                {title}
              </motion.h3>
              <motion.div
                custom={0.1}
                initial="hidden"
                animate="visible"
                variants={contentFade}
                className="flex flex-wrap gap-2 text-xs mb-5"
              >
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
              <motion.p
                custom={0.18}
                initial="hidden"
                animate="visible"
                variants={contentFade}
                className="text-muted-foreground leading-relaxed whitespace-pre-wrap break-words"
              >
                {details}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

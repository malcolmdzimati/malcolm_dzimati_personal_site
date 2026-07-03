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
      <button
        onClick={onOpen}
        className="h-full w-full text-left p-6 flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-accent/40 transition-shadow"
      >
        <h3 className="text-xl font-serif mb-2">{title}</h3>
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
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl"
            >
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                <CloseIcon />
              </button>
              <h3 className="text-2xl font-serif mb-4 pr-8">{title}</h3>
              <div className="flex flex-wrap gap-2 text-xs mb-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap break-words">
                {details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

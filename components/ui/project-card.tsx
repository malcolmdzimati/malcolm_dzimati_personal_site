"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  tags: string[];
  isExpanded: boolean;
  onExpand: () => void;
  isFlipped: boolean;
  onFlip: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, details, tags, isExpanded, onExpand, isFlipped, onFlip }) => {
  // Escape key to flip back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFlip();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="relative perspective"
        initial={false}
        animate={{
            width: isExpanded ? "70vw" : "100%",
            height: isExpanded ? "70vh" : "24rem",
            position: isExpanded ? "fixed" : "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: isExpanded ? 50 : 1,
            scale: isFlipped ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
          onClick={() => {
            if (isExpanded && isFlipped) {
              onFlip();
              onExpand();
            } else {
              onFlip();
              onExpand();
            }
          }}
        >
          <div className="absolute inset-0 p-6 rounded-xl border bg-background shadow-md dark:bg-zinc-800 dark:border-zinc-600 overflow-hidden overflow-y-auto">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3 whitespace-pre-wrap break-words">{description}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            {!isExpanded && (
              <button className="mt-4 text-primary hover:underline text-sm dark:text-primary" onClick={onExpand}>
                See More →
              </button>
            )}
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ rotateY: 180 }}
            animate={{
            rotateY: isFlipped ? 0 : 180,
            scale: isFlipped && isExpanded ? 1.2 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            }}
        >
          <ProjectDetailsCard
            title={title}
            details={details}
            tags={tags}
            isFlipped={isFlipped}
            onFlip={onFlip}
            onExpand={onExpand}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectDetailsCard: React.FC<{
  title: string;
  details: string;
  tags: string[];
  isFlipped: boolean;
  onFlip: () => void;
  onExpand: () => void;
}> = ({ title, details, tags, isFlipped, onFlip, onExpand }) => (
  <div className="absolute inset-0 p-6 backface-hidden rounded-xl border bg-background shadow-md backdrop-blur-md overflow-hidden overflow-y-auto"
    style={{
      transformStyle: "preserve-3d",
    }}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2 text-xs mb-4">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 rounded-full border text-xs font-medium">
          {tag}
        </span>
      ))}
    </div>
    <p className="text-sm text-muted-foreground mb-4 whitespace-pre-wrap break-words">{details}</p>
    <button
      className="text-primary hover:underline text-sm"
      onClick={() => {
        onFlip();
        onExpand();
      }}
    >
      ← Back
    </button>
  </div>
);

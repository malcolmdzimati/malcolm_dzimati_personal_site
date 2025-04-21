"use client";

import { title } from "@/components/primitives";
import { ProjectCard } from "@/components/ui/project-card";
import projects from "@/data/projectData.json";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const handleTagClick = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };
  
  const filteredProjects = projects.filter(project =>
    selectedTags.every(tag => project.tags.includes(tag))
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-4 md:px-12 lg:px-20 xl:px-32 py-8"
    >
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-8">
        A collection of things I've built — from solo passion projects to team-based client work.
      </p>
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="mb-4 px-4 py-2 rounded-md border bg-zinc-100 dark:bg-zinc-800 dark:text-white"
      >
        {showFilters ? 'Hide Filters' : 'Filter Skills'}
      </button>
      {showFilters && (
        <div className="mb-4">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 m-2 rounded-full border ${selectedTags.includes(tag) ? 'bg-primary text-white' : 'bg-zinc-100 dark:bg-zinc-800 dark:text-white'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
      <AnimatePresence mode="wait">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.title}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            details={project.details}
            tags={project.tags}
            isExpanded={expandedIndex === index}
            onExpand={() =>
              setExpandedIndex(prev => (prev === index ? null : index))
            }
            isFlipped={flippedIndex === index}
            onFlip={() =>
              setFlippedIndex(prev => (prev === index ? null : index))
            }
          />
        </motion.div>
      ))}
      </AnimatePresence>
      </div>
    </motion.section>
  );
}
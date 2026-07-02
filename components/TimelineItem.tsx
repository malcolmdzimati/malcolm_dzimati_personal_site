'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  date: string;
  title: string;
  subtitle?: string;
  points: string[];
  collapsedCount?: number;
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export const TimelineItem: React.FC<Props> = ({ date, title, subtitle, points, collapsedCount }) => {
  const collapsible = !!collapsedCount && points.length > collapsedCount;
  const [expanded, setExpanded] = useState(!collapsible);
  const visiblePoints = expanded ? points : points.slice(0, collapsedCount);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative border-l border-border pl-6"
    >
      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent ring-4 ring-background"></div>
      <p className="text-sm text-muted-foreground">{date}</p>
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-muted-foreground text-sm italic">{subtitle}</p>}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={listVariants}
        className="list-disc pl-4 mt-2 text-muted-foreground space-y-1"
      >
        <AnimatePresence initial={false}>
          {visiblePoints.map((p, i) => (
            <motion.li
              key={p}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, height: 0 }}
              layout
            >
              {p}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {collapsible && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-sm text-accent hover:underline underline-offset-4"
        >
          {expanded ? 'Show less' : `Show ${points.length - collapsedCount!} more →`}
        </button>
      )}
    </motion.div>
  );
};

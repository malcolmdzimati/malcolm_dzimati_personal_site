'use client';

import { motion } from 'framer-motion';

interface Props {
  date: string;
  title: string;
  subtitle?: string;
  points: string[];
}

export const TimelineItem: React.FC<Props> = ({ date, title, subtitle, points }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative border-l border-gray-300 pl-6"
    >
      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black"></div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-gray-600 text-sm italic dark:text-gray-300">{subtitle}</p>}
      <ul className="list-disc pl-4 mt-2 text-gray-700 space-y-1 dark:text-gray-400">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </motion.div>
  );
};
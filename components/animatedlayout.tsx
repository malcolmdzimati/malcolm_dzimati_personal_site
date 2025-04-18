"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={path}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
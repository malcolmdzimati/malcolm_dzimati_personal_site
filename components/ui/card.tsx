import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

export const Card = React.forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof motion.div>
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    whileHover={{ scale: 1.02, y: -4 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.5, type: "spring" }}
    className={cn(
      "rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:border-accent/40 transition-shadow",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";
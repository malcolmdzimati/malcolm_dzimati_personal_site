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
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.5, type: "spring" }}
    className={cn(
      "rounded-xl border border-border bg-background text-foreground shadow",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";
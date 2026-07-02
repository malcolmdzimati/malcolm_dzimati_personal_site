import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Import framer-motion

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:bg-accent/90",
        outline: "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        link: "underline-offset-4 hover:underline text-accent",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 rounded-full",
        lg: "h-12 px-8 rounded-full text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        whileHover={{ scale: 1.05 }}  // Hover animation
        whileTap={{ scale: 0.95 }}    // Tap animation
        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring effect
        {...(props as React.ComponentProps<typeof motion.button>)} // Explicitly cast props
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
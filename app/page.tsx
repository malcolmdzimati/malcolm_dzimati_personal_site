"use client";
import { motion } from "framer-motion";
import { button as buttonStyles } from "@heroui/theme";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card-content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      initial={{ rotateY: 90, opacity: 0 }}
      animate={mounted ? { rotateY: 0, opacity: 1 } : {}}
      exit={{ rotateY: -90, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white text-black dark:bg-[#121212] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-center space-y-4 mt-20"
      >
        <h1 className="text-4xl font-bold">Batsirai Malcolm Dzimati</h1>
        <p className="text-lg text-muted-foreground">
          Software Engineer | Tech Innovator | Property Investor
        </p>
        <p className="text-base mt-2">
          Building tech with purpose. Investing in systems that scale.
        </p>
        <div className="space-x-4 mt-4">
          <Link href="/projects">
            <Button>View Projects</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline">About Me</Button>
          </Link>
        </div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mt-16"
      >
        {[
          { title: "Projects", description: "View my tech work and experiments.", href: "/projects" },
          { title: "Property", description: "How I manage and grow my portfolio.", href: "/property" },
          { title: "Blog", description: "Thoughts on tech, business, and growth.", href: "/blog" },
          { title: "Consulting", description: "Need help? Here's how I can add value.", href: "/contact" },
        ].map((card, index) => (
          <Link key={card.title} href={card.href}>
            <Card className="h-40 cursor-pointer">
              <CardContent className="flex flex-col justify-center items-start h-full p-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{card.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full text-center mt-20 border-t pt-6 text-sm text-muted-foreground"
      >
        © {new Date().getFullYear()} Batsirai Malcolm Dzimati. Built with Next.js + React + ShadCN.
      </motion.footer>
    </motion.section>
  );
}

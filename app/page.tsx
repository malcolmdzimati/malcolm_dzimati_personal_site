"use client";
import { motion } from "framer-motion";
import { button as buttonStyles } from "@heroui/theme";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card-content";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <motion.section
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: -90, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white text-black dark:bg-[#121212] dark:text-white">
      <section className="text-center space-y-4 mt-20">
        <h1 className="text-4xl font-bold">Malcolm Dzimati</h1>
        <p className="text-lg text-muted-foreground">
          Software Engineer | Tech Innovator | Property Investor
        </p>
        <p className="text-base mt-2">
          Building tech with purpose. Investing in systems that scale.
        </p>
        <div className="space-x-4 mt-4">
          <Button>View Projects</Button>
          <Button variant="outline">About Me</Button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mt-16">
        {[
          { title: "Projects", description: "View my tech work and experiments." },
          { title: "Property", description: "How I manage and grow my portfolio." },
          { title: "Blog", description: "Thoughts on tech, business, and growth." },
          { title: "Consulting", description: "Need help? Here's how I can add value." },
        ].map((card, index) => (
          <Card key={card.title} className="h-40 hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="flex flex-col justify-center items-start h-full p-4">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full text-center mt-20 border-t pt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Malcolm Dzimati. Built with Next.js + React + ShadCN.
      </footer>
    </motion.section>
  );
}

import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import AnimatedLayout from "@/components/animatedlayout";

export const metadata: Metadata = {
  title: {
    default: "Malcolm Dzimati",
    template: `%s - Malcolm Dzimati`,
  },
  description: "Personal website for Batsirai Malcolm Dzimati",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-black dark:bg-black dark:text-white">
      <body>
        <Navbar />
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
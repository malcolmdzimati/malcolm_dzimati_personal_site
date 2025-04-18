import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import AnimatedLayout from "@/components/animatedlayout";
import { Providers } from "./providers"; // ✅ Import your providers

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
    <html
      lang="en"
      className="bg-white text-black dark:bg-[#121212] dark:text-white"
      suppressHydrationWarning // ✅ Helps avoid dark/light mismatch on hydration
    >
      <body className={fontSans.variable}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "system", enableSystem: true }}>
          <Navbar />
          <AnimatedLayout>{children}</AnimatedLayout>
        </Providers>
      </body>
    </html>
  );
}
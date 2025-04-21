import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import AnimatedLayout from "@/components/animatedlayout";
import { Providers } from "./providers"; // ✅ Import your providers

export const metadata: Metadata = {
  title: "BMD – Batsirai Malcolm Dzimati",
  description: "Portfolio of Batsirai Malcolm Dzimati – Software Engineer & Innovator",
  icons: {
    icon: "/Logo.png", // path to your icon file
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // ✅ Helps avoid dark/light mismatch on hydration
    >
      <body className={`${fontSans.variable} bg-white text-black dark:bg-[#121212] dark:text-white`}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "system", enableSystem: true }}>
          <Navbar />
          <AnimatedLayout>{children}</AnimatedLayout>
        </Providers>
      </body>
    </html>
  );
}
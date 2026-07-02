import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans, fontSerif, fontMono } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import AnimatedLayout from "@/components/animatedlayout";
import SmoothScroll from "@/components/smooth-scroll";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Batsirai Malcolm Dzimati",
  description: "Software engineer building distributed systems, cloud platforms, and scalable property tools.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Logo.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} bg-background text-foreground antialiased`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "system", enableSystem: true }}>
          <SmoothScroll />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <AnimatedLayout>{children}</AnimatedLayout>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
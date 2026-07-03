import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans, fontSerif, fontMono } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import AnimatedLayout from "@/components/animatedlayout";
import SmoothScroll from "@/components/smooth-scroll";
import { PersonJsonLd } from "@/components/person-json-ld";
import { Providers } from "./providers";

const siteUrl = "https://malcolmdzimati.com";
const siteDescription =
  "Batsirai Malcolm Dzimati is a software engineer specializing in distributed systems, cloud platforms, and applied AI — currently Forward Deployed Tech Lead at Vectr Labs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Batsirai Malcolm Dzimati — Software Engineer",
    template: "%s | Batsirai Malcolm Dzimati",
  },
  description: siteDescription,
  keywords: [
    "Batsirai Malcolm Dzimati",
    "Malcolm Dzimati",
    "Batsirai Dzimati",
    "Batsirai Dzimati software engineer",
    "Malcolm Dzimati software engineer",
    "Vectr Labs",
    "Rota Dzimati Group",
  ],
  authors: [{ name: "Batsirai Malcolm Dzimati", url: siteUrl }],
  creator: "Batsirai Malcolm Dzimati",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Logo.png`,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Batsirai Malcolm Dzimati",
    title: "Batsirai Malcolm Dzimati — Software Engineer",
    description: siteDescription,
    images: [{ url: "/Logo.png" }],
  },
  twitter: {
    card: "summary",
    title: "Batsirai Malcolm Dzimati — Software Engineer",
    description: siteDescription,
    images: ["/Logo.png"],
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
        <PersonJsonLd />
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
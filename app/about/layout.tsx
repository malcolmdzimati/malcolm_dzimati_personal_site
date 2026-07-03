import { Metadata } from "next";
import { FaqJsonLd } from "@/components/faq-json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Batsirai Malcolm Dzimati (Malcolm Dzimati) — background, current focus at Vectr Labs, and the Rota Dzimati Group property venture.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-20 xl:px-32 py-16 sm:py-24">
      <FaqJsonLd />
      {children}
    </section>
  );
}

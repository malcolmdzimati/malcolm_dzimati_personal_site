import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Batsirai Malcolm Dzimati (Malcolm Dzimati).",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-4 py-16 sm:py-24 min-h-[70vh] flex items-center">
      {children}
    </section>
  );
}

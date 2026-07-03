import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital CV",
  description:
    "Digital CV for Batsirai Malcolm Dzimati (Malcolm Dzimati / Batsirai Dzimati) — experience, education, skills, and certifications.",
  alternates: { canonical: "/cv" },
};

export default function CvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-20 xl:px-32 py-16 sm:py-24">
      {children}
    </section>
  );
}

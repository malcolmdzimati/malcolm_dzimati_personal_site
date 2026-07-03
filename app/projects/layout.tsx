import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects built by Batsirai Malcolm Dzimati (Malcolm Dzimati) — distributed systems, cloud platforms, payments, and property tools.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-20 xl:px-32 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

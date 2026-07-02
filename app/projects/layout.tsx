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

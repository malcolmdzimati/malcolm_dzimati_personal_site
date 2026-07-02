export default function AboutLayout({
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

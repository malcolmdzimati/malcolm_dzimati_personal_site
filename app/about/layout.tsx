export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {children}
      </div>
    </section>
  );
}

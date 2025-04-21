export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-20 xl:px-32 py-8">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

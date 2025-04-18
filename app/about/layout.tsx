export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-white dark:bg-gray-950">
      <div className="w-full max-w-4xl">{children}</div>
    </section>
  );
}

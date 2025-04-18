export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-white text-black dark:bg-[#121212] dark:text-white">
      {children}
    </section>
  );
}

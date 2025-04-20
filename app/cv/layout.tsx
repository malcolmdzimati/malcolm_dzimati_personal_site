export default function cvLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex items-center justify-center min-h-screen pt-8 pb-16 px-4 bg-white text-black dark:bg-[#121212] dark:text-white">
        {children}
      </section>
    );
  }
  
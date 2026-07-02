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

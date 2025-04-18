import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className={title()}>About</h1>
      <p className="text-lg">
        Hey, I’m <strong>Batsirai Malcolm Dzimati</strong> — a software & cryptography engineer, entrepreneur, and lifelong learner
        with a passion for technology, business, and property. I currently work in the transactional banking space,
        where I've contributed to secure payment systems, fraud detection tools, and large-scale infrastructure
        projects. I love solving complex problems and building efficient systems that create real-world impact.
      </p>
      <p className="text-lg">
        Beyond code, I run a small but growing property investment venture. I'm deeply interested in using
        automation and thoughtful design to manage rental properties at scale — blending technology and real
        estate to create smarter living experiences.
      </p>
      <p className="text-lg">
        Long-term, I’m focused on building ventures that matter, investing in both local and global markets, 
        and helping others level up along the way. Whether it’s tech tools, financial literacy, or infrastructure,
        I believe in learning by doing and creating opportunities through innovation.
      </p>
      <p className="text-lg">
        This site is a window into my journey — the things I’m building, learning, and thinking about. Feel free to
        <a href="/malcolm_dzimati_personal_site/contact" className="text-blue-600 hover:underline"> reach out</a> if you want to connect.
      </p>
      <h2 className="text-xl font-semibold pt-6">Background</h2>
      <ul className="list-disc pl-5 text-lg space-y-2">
        <li>📚 BSc & Honours in Computer Science – University of Pretoria</li>
        <li>💼 Software Engineer – Investec (2023–present)</li>
        <li>🏠 Founder – Rota Ventures (Property portfolio & tools)</li>
      </ul>
    </div>
  );
}
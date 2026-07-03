import { siteConfig } from "@/config/site";

export const PersonJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Batsirai Malcolm Dzimati",
    alternateName: ["Malcolm Dzimati", "Batsirai Dzimati", "Batsirai Malcolm Dzimati"],
    url: "https://malcolmdzimati.com",
    image: "https://malcolmdzimati.com/Logo.png",
    jobTitle: "Forward Deployed Tech Lead, AI & Cloud Platforms",
    worksFor: {
      "@type": "Organization",
      name: "Vectr Labs",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Pretoria",
    },
    knowsAbout: [
      "Distributed Systems",
      "Cloud Architecture",
      "Applied AI",
      "Payments Engineering",
      "Cryptography",
    ],
    sameAs: [siteConfig.links.github, siteConfig.links.linkedIn],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

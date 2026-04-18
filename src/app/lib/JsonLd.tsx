export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ananta Naufal Imamul Hikam",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://anantanaufal.vercel.app",
    image: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://anantanaufal.vercel.app"
    }/og-image.png`,
    sameAs: [
      "https://github.com/anantanaufal",
      "https://linkedin.com/in/anantanaufal",
    ],
    jobTitle: "Junior Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Junior Web Developer dari Universitas Negeri Surabaya. Berfokus pada pengembangan web modern menggunakan React, Next.js, dan teknologi web terkini.",
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitas Negeri Surabaya",
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ananta Naufal Imamul Hikam — Portfolio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://anantanaufal.vercel.app",
    description:
      "Portfolio pribadi Ananta Naufal Imamul Hikam, seorang Junior Web Developer dari Universitas Negeri Surabaya.",
    author: {
      "@type": "Person",
      name: "Ananta Naufal Imamul Hikam",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}

"use client";

import { useRef } from "react";
import { useGsapTextReveal } from "../hooks/useGsapTextReveal";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { t, language } = useLanguage();

  useGsapTextReveal(headingRef, { deps: [language] });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 px-6"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div data-aos="fade-up" className="mb-16">
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-4 block gradient-text"
          >
            {t("about.label")}
          </span>
          <h2
            key={language}
            id="about-heading"
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase"
            style={{ color: "var(--foreground)" }}
          >
            {t("about.heading")}
          </h2>
        </div>

        {/* Introduction text */}
        <article data-aos="fade-up" data-aos-delay="100">
          <p
            className="text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: "var(--foreground-secondary)" }}
          >
            {t("about.p1")}
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: "var(--foreground-secondary)" }}
          >
            {t("about.p2")}
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--foreground-secondary)" }}
          >
            {t("about.p3")}
          </p>
        </article>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 py-16 md:py-24"
    >
      {/* Animated background orbs */}
      <div
        className="orb w-[500px] h-[500px] -top-40 -right-40"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      ></div>
      <div
        className="orb w-[400px] h-[400px] -bottom-20 -left-40"
        style={{ background: "var(--gradient-end)" }}
        aria-hidden="true"
      ></div>
      <div
        className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "var(--accent)", animationDelay: "4s" }}
        aria-hidden="true"
      ></div>

      {/* Decorative dots */}
      <div
        className="hidden md:block absolute top-20 right-10 lg:right-20 w-3 h-3 rounded-full pulse-glow"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      ></div>
      <div
        className="hidden md:block absolute bottom-40 left-8 lg:left-16 w-2 h-2 rounded-full opacity-40"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      ></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Main heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight md:leading-none mb-4 md:mb-6 uppercase"
          style={{ color: "var(--foreground)" }}
        >
          <span className="gradient-text">{t("hero.roleTitle")}</span>
        </h1>



        {/* University badge */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="mb-6 md:mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium"
            style={{
              background: "var(--accent-subtle)",
              color: "var(--badge-text)",
              border: "1px solid var(--border-color)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            {t("hero.university")}
          </span>
        </div>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-6 md:mb-8 font-light leading-relaxed px-2 sm:px-0"
          style={{ color: "var(--foreground-secondary)" }}
        >
          {t("hero.subtitle")}
        </p>

        {/* CTA Buttons */}
        <nav
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-4"
          aria-label="Primary actions"
        >



          <a
            href="#contact"
            className="btn-outline w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-sm md:text-base text-center"
            id="hero-contact"
          >
            {t("hero.contact")}
          </a>
        </nav>
      </div>

      {/* Scroll indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="hidden sm:flex absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce"
        aria-hidden="true"
      >
        <span
          className="text-xs tracking-widest"
          style={{ color: "var(--foreground-muted)" }}
        >
          {t("hero.scroll")}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: "var(--foreground-muted)" }}
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

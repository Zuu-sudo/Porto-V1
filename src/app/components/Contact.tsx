"use client";

import { useRef } from "react";
import { useGsapTextReveal } from "../hooks/useGsapTextReveal";
import { MailIcon, ArrowUpRightIcon } from "./icons/SocialIcons";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { t } = useLanguage();

  useGsapTextReveal(headingRef, { stagger: 0.03 });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 px-6"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div data-aos="fade-up" className="mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block gradient-text">
            {t("contact.label")}
          </span>
          <h2
            id="contact-heading"
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase"
            style={{ color: "var(--foreground)" }}
          >
            {t("contact.heading1")}
            <br />
            {t("contact.heading2")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div data-aos="fade-right" data-aos-delay="100">
            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: "var(--foreground-secondary)" }}
            >
              {t("contact.description")}
            </p>

            <address className="not-italic mb-8">
              <a
                href="mailto:anantanaufal25@gmail.com"
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 hover:scale-105"
                aria-label="Send email to Ananta Naufal"
                id="contact-email-btn"
              >
                <MailIcon />
                {t("contact.connect")}
                <ArrowUpRightIcon />
              </a>
            </address>



          </div>

          {/* Right column - Contact form */}
          <div data-aos="fade-left" data-aos-delay="200">
            <form
              className="space-y-6 glass-card p-8 rounded-2xl"
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-glow)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--input-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-glow)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--input-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none resize-none"
                  style={{
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-glow)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--input-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full px-8 py-4"
                id="contact-submit-btn"
              >
                {t("contact.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

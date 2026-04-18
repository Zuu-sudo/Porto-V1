"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer
      className="py-12 px-6"
      style={{ background: "var(--footer-bg)", color: "#ffffff" }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-1 text-xl font-bold tracking-tight group"
            aria-label="Ananta Naufal - Back to top"
            id="footer-logo"
          >
            <span
              className="text-white group-hover:text-[var(--accent)] transition-colors duration-300"
              aria-hidden="true"
            >
              &lt;
            </span>
            <span className="relative">
              <span className="gradient-text font-extrabold">AN</span>
              <span
                className="absolute -bottom-0.5 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              ></span>
            </span>
            <span
              className="text-white group-hover:text-[var(--accent)] transition-colors duration-300"
              aria-hidden="true"
            >
              /&gt;
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
            <small>© {currentYear} Ananta Naufal Imamul Hikam. {t("footer.rights")}</small>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage, languageNames, Language } from "../context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const languages: Language[] = ["id", "en", "ja", "ar"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-1 text-xl font-bold tracking-tight group"
            aria-label="Ananta Naufal - Home"
            id="nav-logo"
          >
            <span
              className="transition-colors duration-300 group-hover:text-[var(--accent)]"
              style={{ color: "var(--foreground)" }}
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
              className="transition-colors duration-300 group-hover:text-[var(--accent)]"
              style={{ color: "var(--foreground)" }}
              aria-hidden="true"
            >
              /&gt;
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300 relative group"
                style={{ color: "var(--foreground-secondary)" }}
                id={`nav-link-${link.href.replace('#', '')}`}
              >
                <span className="group-hover:text-[var(--accent)] transition-colors duration-300">
                  {link.name}
                </span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                ></span>
              </a>
            ))}

            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--accent-subtle)]"
                style={{
                  color: "var(--foreground-secondary)",
                  border: "1px solid var(--border-color)",
                }}
                aria-label="Change language"
                aria-expanded={langDropdownOpen}
                id="language-dropdown-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>{language.toUpperCase()}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-52 rounded-xl overflow-hidden dropdown-enter"
                  style={{
                    background: "var(--background-card)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 16px 48px var(--shadow-color)",
                  }}
                  id="language-dropdown-menu"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                        language === lang
                          ? "bg-[var(--accent-subtle)]"
                          : "hover:bg-[var(--accent-subtle)]"
                      }`}
                      style={{
                        color:
                          language === lang
                            ? "var(--accent)"
                            : "var(--foreground-secondary)",
                      }}
                    >
                      <span>{languageNames[lang]}</span>
                      {language === lang && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="ml-auto"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: "var(--accent-subtle)",
                border: "1px solid var(--border-color)",
              }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              id="theme-toggle-btn"
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="btn-primary px-5 py-2.5 text-sm"
              id="nav-cta-btn"
            >
              {t("nav.getInTouch")}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: "var(--accent-subtle)",
                border: "1px solid var(--border-color)",
              }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              id="mobile-menu-btn"
            >
              <div
                className="w-6 h-5 relative flex flex-col justify-between"
                aria-hidden="true"
              >
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                  style={{ background: "var(--foreground)" }}
                ></span>
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                  style={{ background: "var(--foreground)" }}
                ></span>
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                  style={{ background: "var(--foreground)" }}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div
            className="flex flex-col gap-4 py-4"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium transition-colors duration-300 hover:text-[var(--accent)]"
                style={{ color: "var(--foreground-secondary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex flex-wrap gap-2 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200`}
                  style={{
                    background:
                      language === lang
                        ? "var(--accent)"
                        : "var(--accent-subtle)",
                    color:
                      language === lang
                        ? "#ffffff"
                        : "var(--foreground-secondary)",
                    border: `1px solid ${
                      language === lang
                        ? "var(--accent)"
                        : "var(--border-color)"
                    }`,
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary px-5 py-2.5 text-sm text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.getInTouch")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

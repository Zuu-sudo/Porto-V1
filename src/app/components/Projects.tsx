"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsapTextReveal } from "../hooks/useGsapTextReveal";
import { projects } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { t } = useLanguage();

  useGsapTextReveal(headingRef);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div data-aos="fade-up" className="mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block gradient-text">
            {t("projects.label")}
          </span>
          <h2
            id="projects-heading"
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            {t("projects.heading")}
          </h2>
        </div>

        {/* Projects grid */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {projects.map((project, index) => (
            <li
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group flex flex-col"
            >
              <article className="glass-card rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500">
                {/* Project Image */}
                <figure className="relative w-full h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, var(--accent-glow), transparent)",
                    }}
                  ></div>
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${
                      project.title
                    } - ${project.description.slice(0, 50)}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </figure>

                {/* Project content */}
                <div className="flex-grow p-6">
                  <p
                    className="text-base leading-relaxed mb-4"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <ul
                    className="flex flex-wrap gap-2 mb-6"
                    role="list"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.techStack.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "var(--accent-subtle)",
                          color: "var(--badge-text)",
                        }}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 group/btn"
                  style={{
                    background: "var(--accent-subtle)",
                    color: "var(--foreground)",
                    borderTop: "1px solid var(--border-color)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--accent-subtle)";
                    e.currentTarget.style.color = "var(--foreground)";
                  }}
                  aria-label={`View ${project.title} project`}
                >
                  <span>{project.title.toUpperCase()}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </article>
            </li>
          ))}
        </ul>

        {/* More projects link */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-16"
        >
          <a
            href="/building"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3"
            id="view-all-projects"
          >
            {t("projects.viewAll")}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

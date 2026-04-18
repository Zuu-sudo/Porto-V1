"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsapTextReveal } from "../hooks/useGsapTextReveal";
import { skills } from "../data/portfolio";

const skillIconMap: Record<string, string> = {
  "React.js": "https://cdn.simpleicons.org/react/61DAFB",
  "Vue.js": "https://cdn.simpleicons.org/vuedotjs/4FC08D",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  "Express.js": "https://cdn.simpleicons.org/express/000000",
  Go: "https://cdn.simpleicons.org/go/00ADD8",
  "Spring Boot": "https://cdn.simpleicons.org/springboot/6DB33F",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  Prisma: "https://cdn.simpleicons.org/prisma/2D3748",
  Supabase: "https://cdn.simpleicons.org/supabase/3ECF8E",
  Git: "https://cdn.simpleicons.org/git/F05032",
  Docker: "https://cdn.simpleicons.org/docker/2496ED",
  Postman: "https://cdn.simpleicons.org/postman/FF6C37",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
};

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGsapTextReveal(headingRef);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 px-6 border-t border-[#E5E7EB]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div data-aos="fade-up" className="mb-16">
          <span className="text-sm font-semibold text-[#2ECC71] tracking-widest uppercase mb-4 block">
            01 — ABOUT
          </span>
          <h2
            id="about-heading"
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase"
          >
            WHO I AM
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Description */}
          <article data-aos="fade-right" data-aos-delay="100">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              I am an Informatics student at Universitas Teknologi Digital
              Indonesia with a strong focus on backend web development. I
              specialize in building reliable, scalable, and well-structured
              server-side applications.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              As a web developer, I enjoy working with modern technologies to
              design clean architectures and transform complex business logic
              into efficient solutions. I prioritize code quality,
              maintainability, and performance in every project I work on.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Currently based in Indonesia, I am continuously improving my
              backend expertise and open to collaborating on impactful web
              projects and real-world applications.
            </p>

            {/* Stats */}
            <dl
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#E5E7EB]"
            >
              <div>
                <dt className="sr-only">Years of Experience</dt>
                <dd className="text-4xl md:text-5xl font-bold text-black">
                  2+
                </dd>
                <dd className="text-sm text-gray-500 mt-2">Years Experience</dd>
              </div>
              <div>
                <dt className="sr-only">Projects Completed</dt>
                <dd className="text-4xl md:text-5xl font-bold text-black">
                  10+
                </dd>
                <dd className="text-sm text-gray-500 mt-2">Projects Done</dd>
              </div>
            </dl>
          </article>

          {/* Right column - Skills */}
          <div>
            <div className="space-y-8">
              {skills.map((category, index) => (
                <article
                  key={category.name}
                  data-aos="fade-left"
                  data-aos-delay={index * 100 + 100}
                  className="p-6 border border-[#E5E7EB] rounded-2xl hover:border-[#2ECC71] transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
                    <span
                      className="w-8 h-8 bg-[#2ECC71] text-white rounded-full flex items-center justify-center text-sm"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    {category.name}
                  </h3>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {category.items.map((skill) => (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-[#2ECC71] hover:text-white transition-colors duration-300"
                      >
                        {skillIconMap[skill] ? (
                          <Image
                            src={skillIconMap[skill]}
                            alt=""
                            aria-hidden="true"
                            width={16}
                            height={16}
                            unoptimized
                            className="shrink-0"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="inline-flex w-4 h-4 items-center justify-center rounded-full bg-gray-300 text-[10px] leading-none text-gray-700"
                          >
                            {skill[0]}
                          </span>
                        )}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

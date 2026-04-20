import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Unityゲーム作品",
    tech: ["C#", "Unity"],
    description:
      "2年間のUnity開発で制作したゲーム作品。企画からデザイン、実装まで一貫して担当。ゲームロジックの設計やUI実装を通じて、オブジェクト指向設計の理解を深めました。",
    image: "/images/game.jpg",
    imageAlt: "Game controller",
    link: null,
  },
  {
    title: "ポートフォリオサイト",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    description:
      "このサイトです。就活に向けて自分のスキルや経歴をまとめるために制作。Next.js と Tailwind CSS を使ったモダンなWeb開発を実践しています。",
    image: "/images/code.jpg",
    imageAlt: "Code editor on laptop",
    link: "https://github.com/sotarooooo/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-5xl mx-auto px-6 pt-24 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Projects<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            つくったもの。
          </p>
        </ScrollReveal>

        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 150}>
              <div className="glass-card rounded-2xl overflow-hidden project-card">
                <div className="grid sm:grid-cols-5">
                  <div className="sm:col-span-2 h-48 sm:h-auto relative">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 hidden sm:block" />
                  </div>

                  <div className="sm:col-span-3 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((t) => (
                        <span key={t} className="tag-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent font-semibold hover:text-accent-dark transition-colors group"
                      >
                        GitHub で見る
                        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

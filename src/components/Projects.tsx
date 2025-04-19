import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { Microbe } from "./BioDecorations";

const projects = [
  {
    title: "Unityゲーム作品",
    tech: ["C#", "Unity"],
    description:
      "2年間のUnity開発で制作したゲーム作品。企画からデザイン、実装まで一貫して担当。ゲームロジックの設計やUI実装を通じて、オブジェクト指向設計の理解を深めました。",
    image: "/images/microscope.jpg",
    imageAlt: "Game development",
    link: null,
  },
  {
    title: "ポートフォリオサイト",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    description:
      "このサイトです。就活に向けて自分のスキルや経歴をまとめるために制作。Next.js と Tailwind CSS を使ったモダンなWeb開発を実践しています。",
    image: "/images/hero-bio.jpg",
    imageAlt: "Portfolio website",
    link: "https://github.com/sotarooooo/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border relative overflow-hidden">
      <Microbe className="absolute -left-2 top-32 w-24 h-24 text-accent/25 animate-float hidden lg:block" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            Projects<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 150}>
              <div className="project-card bg-white/90 backdrop-blur-sm rounded-xl border-2 border-accent/10 overflow-hidden hover:border-accent/30">
                <div className="h-48 sm:h-56 relative">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm font-mono px-2.5 py-1 rounded-full bg-white/90 text-accent-dark font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-base text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-base text-accent font-medium hover:underline"
                    >
                      GitHub で見る
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

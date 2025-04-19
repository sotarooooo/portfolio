import ScrollReveal from "./ScrollReveal";
import { Microbe } from "./BioDecorations";

const projects = [
  {
    title: "Unityゲーム作品",
    tech: ["C#", "Unity"],
    description:
      "2年間のUnity開発で制作したゲーム作品。企画からデザイン、実装まで一貫して担当。ゲームロジックの設計やUI実装を通じて、オブジェクト指向設計の理解を深めました。",
    link: null,
  },
  {
    title: "ポートフォリオサイト",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    description:
      "このサイトです。就活に向けて自分のスキルや経歴をまとめるために制作。Next.js と Tailwind CSS を使ったモダンなWeb開発を実践しています。",
    link: "https://github.com/sotarooooo/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border relative overflow-hidden">
      <Microbe className="absolute -left-4 top-32 w-20 h-20 text-accent/10 animate-float hidden lg:block" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            Projects<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 150}>
              <div className="project-card bg-white/80 backdrop-blur-sm rounded-xl border border-border p-6 sm:p-8 hover:border-accent/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm font-mono px-2.5 py-1 rounded-full bg-accent-light text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-base text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base text-accent hover:underline"
                  >
                    GitHub で見る
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="text-sm text-muted mt-8">
            ※ ゲーム作品のスクリーンショットや動画は準備中です。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

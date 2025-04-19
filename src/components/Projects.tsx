import ScrollReveal from "./ScrollReveal";
import { Microbe } from "./BioDecorations";

const projects = [
  {
    title: "Unityゲーム作品",
    tech: ["C#", "Unity"],
    description:
      "2年間のUnity開発で制作したゲーム作品。企画からデザイン、実装まで一貫して担当。ゲームロジックの設計やUI実装を通じて、オブジェクト指向設計の理解を深めました。",
    image: null,
    link: null,
  },
  {
    title: "ポートフォリオサイト",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    description:
      "このサイトです。就活に向けて自分のスキルや経歴をまとめるために制作。Next.js と Tailwind CSS を使ったモダンなWeb開発を実践しています。",
    image: null,
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
                {/* Project image area */}
                <div className="h-48 sm:h-56 bg-gradient-to-br from-accent/10 via-accent-light/30 to-accent/5 flex items-center justify-center relative">
                  {/* TODO: Replace with <Image src="/project-name.jpg" ... /> */}
                  <div className="text-center">
                    <svg className="w-12 h-12 text-accent/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-sm text-accent/40">スクリーンショットを追加</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-sm font-mono px-2.5 py-1 rounded-full bg-accent-light text-accent-dark font-medium"
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

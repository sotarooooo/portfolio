import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    period: "長期インターン",
    role: "アプリ開発エンジニア",
    description:
      "Streamlit を使った社内向けアプリケーションの開発に従事。Python によるデータ処理やUI構築を担当し、チーム開発の流れや Git を用いたバージョン管理を実践的に学びました。",
    skills: ["Python", "Streamlit", "Git"],
  },
  {
    period: "個人開発（2年間）",
    role: "ゲーム開発",
    description:
      "Unity と C# を使ったゲーム開発を継続的に行い、企画・設計・実装を一人で完結。オブジェクト指向プログラミングやゲームアーキテクチャの基礎を身につけました。",
    skills: ["C#", "Unity"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-5xl mx-auto px-6 pt-24 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Experience<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            これまでの経験。
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 via-border to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={exp.period} delay={idx * 150}>
                <div className="sm:pl-12 relative">
                  <div className="hidden sm:block absolute left-0 top-1.5">
                    <div className="timeline-dot" />
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-semibold mt-2 mb-3">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="tag-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

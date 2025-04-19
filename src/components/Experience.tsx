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
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            Experience<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={exp.period} delay={idx * 150}>
                <div className="sm:pl-10 relative">
                  <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background hidden sm:block" />
                  <div>
                    <span className="text-sm font-mono text-accent uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-base text-muted leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm font-mono px-2.5 py-1 rounded-full bg-accent-light text-accent"
                        >
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

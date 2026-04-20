import ScrollReveal from "./ScrollReveal";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C#", level: "2年", description: "Unity でのゲーム開発" },
      { name: "JavaScript", level: "1年", description: "Web フロントエンド開発" },
      { name: "Python", level: "1年", description: "データ分析・アプリ開発" },
      { name: "TypeScript", level: "学習中", description: "このポートフォリオで使用" },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Unity", level: "2年", description: "2D/3D ゲーム開発" },
      { name: "Streamlit", level: "実務経験", description: "インターンでのアプリ開発" },
      { name: "Next.js / React", level: "学習中", description: "このポートフォリオで使用" },
      { name: "Git / GitHub", level: "実務経験", description: "チーム開発でのバージョン管理" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-5xl mx-auto px-6 pt-24 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Skills<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            これまでに身につけた技術スタック。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((group, groupIdx) => (
            <ScrollReveal key={group.category} delay={groupIdx * 150}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {group.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-card rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm">{skill.name}</span>
                        <span className="tag-pill text-xs">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-muted">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

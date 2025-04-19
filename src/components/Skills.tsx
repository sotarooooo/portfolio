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
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-12">
          Skills<span className="text-accent">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-base font-semibold uppercase tracking-widest text-accent mb-6">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white rounded-lg border border-border p-4 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-base">{skill.name}</span>
                      <span className="text-sm text-muted bg-background px-2 py-0.5 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

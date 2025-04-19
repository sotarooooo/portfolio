import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            About<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12">
          <ScrollReveal delay={100}>
            <div className="md:col-span-3 space-y-5 text-muted leading-relaxed text-lg">
              <p>
                ゲーム開発をきっかけにプログラミングを始め、C#でのUnity開発を2年間続けてきました。
                その後、JavaScriptによるWeb開発やPythonでのデータ分析・アプリ開発にも取り組み、
                幅広い技術領域に触れてきました。
              </p>
              <p>
                長期インターンではStreamlitを使ったアプリ開発に携わり、
                チーム開発の進め方や実務レベルのコード品質について学びました。
              </p>
              <p>
                「動くものを作る」ことにやりがいを感じるタイプで、
                ユーザーが触れるプロダクトに関わる仕事を目指しています。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl border border-border p-6 space-y-4">
                <h3 className="text-base font-semibold uppercase tracking-widest text-accent">
                  Profile
                </h3>
                <dl className="space-y-3 text-base">
                  <div>
                    <dt className="text-muted">名前</dt>
                    <dd className="font-medium mt-0.5">Sotaro</dd>
                  </div>
                  <div>
                    <dt className="text-muted">興味分野</dt>
                    <dd className="font-medium mt-0.5">
                      Web開発 / ゲーム開発 / データ分析
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted">趣味</dt>
                    <dd className="font-medium mt-0.5">ゲーム制作・バスケ</dd>
                  </div>
                </dl>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

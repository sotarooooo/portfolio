import ScrollReveal from "./ScrollReveal";
import { CellStructure } from "./BioDecorations";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border relative overflow-hidden">
      <CellStructure className="absolute -right-8 top-12 w-36 h-36 text-accent/8 animate-float-slow hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            About<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-5 text-muted leading-relaxed text-lg">
              <p>
                大学ではバイオ系を専攻しながら、独学でプログラミングを始めました。
                C#でのUnity開発を2年間続け、その後JavaScriptによるWeb開発や
                Pythonでのデータ分析・アプリ開発にも取り組んできました。
              </p>
              <p>
                長期インターンではStreamlitを使ったアプリ開発に携わり、
                チーム開発の進め方や実務レベルのコード品質について学びました。
              </p>
              <p>
                生命科学の視点とエンジニアリングの技術を掛け合わせて、
                「動くものを作る」ことにやりがいを感じています。
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-border p-6 space-y-4">
                <h3 className="text-base font-semibold uppercase tracking-widest text-accent">
                  Profile
                </h3>
                <dl className="space-y-3 text-base">
                  <div>
                    <dt className="text-muted">名前</dt>
                    <dd className="font-medium mt-0.5">Sotaro</dd>
                  </div>
                  <div>
                    <dt className="text-muted">専攻</dt>
                    <dd className="font-medium mt-0.5">バイオ系</dd>
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

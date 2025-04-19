import ScrollReveal from "./ScrollReveal";
import { CellStructure } from "./BioDecorations";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border relative overflow-hidden">
      <CellStructure className="absolute -right-4 top-12 w-40 h-40 text-accent/20 animate-float-slow hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            About<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6">
              {/* Profile photo */}
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/50 border-2 border-accent/20 flex items-center justify-center overflow-hidden mb-6">
                {/* TODO: Replace with actual photo: <Image src="/profile.jpg" ... /> */}
                <svg className="w-16 h-16 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>

              <div className="space-y-5 text-muted leading-relaxed text-lg">
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
            </div>

            <div className="md:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl border-2 border-accent/15 p-6 space-y-4 shadow-sm">
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

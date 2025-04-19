import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { CellStructure } from "./BioDecorations";
import IllustrationFrame from "./IllustrationFrame";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border relative overflow-hidden">
      <IllustrationFrame className="absolute -right-2 top-16 hidden lg:block animate-float-slow">
        <CellStructure className="w-32 h-32 text-accent" />
      </IllustrationFrame>

      <div className="max-w-5xl mx-auto px-6 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            About<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6">
              {/* Bio-themed photo */}
              <div className="w-full h-48 rounded-2xl overflow-hidden border-2 border-accent/15 shadow-sm mb-6 relative">
                <Image
                  src="/images/cells.jpg"
                  alt="Laboratory research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <p className="absolute bottom-3 left-4 text-white text-sm font-medium">
                  Bio × Engineering
                </p>
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

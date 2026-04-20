import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-5xl mx-auto px-6 pt-24 relative">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            About<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            バイオとエンジニアリングの交差点から。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-6">
              <div className="w-full h-52 rounded-2xl overflow-hidden shadow-md relative">
                <Image
                  src="/images/cells.jpg"
                  alt="Laboratory research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/10 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-white text-sm font-medium tracking-wide">
                    Bio × Engineering
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-muted leading-relaxed text-base">
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
              <div className="glass-card rounded-2xl p-6 space-y-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                    Profile
                  </h3>
                </div>
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between items-baseline border-b border-border/50 pb-3">
                    <dt className="text-muted">名前</dt>
                    <dd className="font-medium">Sotaro</dd>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-border/50 pb-3">
                    <dt className="text-muted">専攻</dt>
                    <dd className="font-medium">バイオ系</dd>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-border/50 pb-3">
                    <dt className="text-muted">興味分野</dt>
                    <dd className="font-medium text-right">Web / Game / Data</dd>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <dt className="text-muted">趣味</dt>
                    <dd className="font-medium">ゲーム制作・バスケ</dd>
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

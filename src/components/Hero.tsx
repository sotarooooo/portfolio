export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <p className="text-accent font-mono text-sm mb-4 tracking-wide">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          Sotaro
          <span className="text-accent">.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted max-w-2xl leading-relaxed mb-10">
          ゲーム開発からWebアプリまで、
          <br className="hidden sm:block" />
          ものづくりが好きなエンジニア。
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            制作物を見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-border rounded-lg text-sm font-medium text-muted hover:text-foreground hover:border-foreground transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}

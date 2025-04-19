export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-accent/15 rounded-full animate-float-slow" />

      <div className="max-w-5xl mx-auto px-6 py-24 w-full relative hero-animate">
        <p className="text-accent font-mono text-base mb-4 tracking-wide">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          Sotaro
          <span className="text-accent">.</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-muted max-w-2xl leading-relaxed mb-10">
          ゲーム開発からWebアプリまで、
          <br className="hidden sm:block" />
          ものづくりが好きなエンジニア。
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
          >
            制作物を見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-border rounded-lg text-base font-medium text-muted hover:text-foreground hover:border-foreground transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}

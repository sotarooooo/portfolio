import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="hero-animate">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light/60 border border-accent/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-mono text-accent-dark tracking-wide">
                Open to opportunities
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Bio
              <span className="text-accent"> × </span>
              <br className="hidden sm:block" />
              Engineering
              <span className="text-accent">.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted max-w-lg leading-relaxed mb-10">
              生命科学を学びながら、コードで
              <br className="hidden sm:block" />
              ものづくりをするエンジニア。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
              >
                制作物を見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 border-2 border-border rounded-xl text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block h-[420px]">
            <div className="absolute top-4 right-4 w-60 h-60 rounded-2xl overflow-hidden shadow-xl border border-accent/15 rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/game.jpg"
                alt="Game controller"
                fill
                className="object-cover"
                sizes="240px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-3 left-4 text-white text-xs font-mono tracking-wider opacity-80">
                GAME DEV
              </span>
            </div>
            <div className="absolute bottom-4 left-4 w-52 h-52 rounded-2xl overflow-hidden shadow-xl border border-accent/15 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/code.jpg"
                alt="Code editor"
                fill
                className="object-cover"
                sizes="208px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-3 left-4 text-white text-xs font-mono tracking-wider opacity-80">
                WEB DEV
              </span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white/80 z-10">
              <Image
                src="/images/cells.jpg"
                alt="Laboratory research"
                fill
                className="object-cover"
                sizes="176px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-xs font-mono tracking-wider opacity-80">
                BIO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { DnaHelix, CellStructure, MoleculeStructure, Microbe } from "./BioDecorations";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-light/30 rounded-full blur-3xl" />

      {/* Bio illustrations - much more visible */}
      <DnaHelix className="absolute right-16 top-28 w-20 h-48 text-accent/40 animate-float hidden lg:block" />
      <CellStructure className="absolute right-1/4 bottom-24 w-36 h-36 text-accent/30 animate-float-slow hidden md:block" />
      <MoleculeStructure className="absolute left-12 bottom-32 w-28 h-28 text-accent/30 animate-spin-slow hidden lg:block" />
      <Microbe className="absolute right-24 top-1/2 w-20 h-20 text-accent/25 animate-float hidden md:block" />

      {/* Small floating dots */}
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float" />
      <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-accent/20 rounded-full animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent/35 rounded-full animate-float" />

      <div className="max-w-5xl mx-auto px-6 py-24 w-full relative hero-animate">
        <p className="text-accent font-mono text-base mb-4 tracking-wide">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          Sotaro
          <span className="text-accent">.</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-muted max-w-2xl leading-relaxed mb-10">
          バイオ × エンジニアリング。
          <br className="hidden sm:block" />
          ものづくりが好きなエンジニア。
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg text-base font-medium hover:bg-accent-dark transition-colors"
          >
            制作物を見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border-2 border-accent rounded-lg text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}

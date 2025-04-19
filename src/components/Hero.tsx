import Image from "next/image";
import { DnaHelix, CellStructure, MoleculeStructure, Microbe } from "./BioDecorations";
import IllustrationFrame from "./IllustrationFrame";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Framed bio illustrations */}
      <IllustrationFrame className="absolute right-8 top-24 hidden lg:block animate-float">
        <DnaHelix className="w-16 h-40 text-accent" />
      </IllustrationFrame>
      <IllustrationFrame className="absolute right-1/4 bottom-20 hidden md:block animate-float-slow">
        <CellStructure className="w-28 h-28 text-accent" />
      </IllustrationFrame>
      <IllustrationFrame className="absolute left-8 bottom-28 hidden lg:block animate-spin-slow">
        <MoleculeStructure className="w-24 h-24 text-accent" />
      </IllustrationFrame>
      <IllustrationFrame className="absolute right-20 top-1/2 hidden md:block animate-float">
        <Microbe className="w-16 h-16 text-accent" />
      </IllustrationFrame>

      <div className="max-w-5xl mx-auto px-6 py-24 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hero-animate">
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

          {/* Hero image collage */}
          <div className="relative hidden lg:block h-96">
            <div className="absolute top-0 right-0 w-56 h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-accent/20 rotate-3">
              <Image
                src="/images/game.jpg"
                alt="Game controller"
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-accent/20 -rotate-2">
              <Image
                src="/images/code.jpg"
                alt="Code editor"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-accent/30">
              <Image
                src="/images/cells.jpg"
                alt="Laboratory research"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

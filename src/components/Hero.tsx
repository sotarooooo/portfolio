import Image from "next/image";
import { DnaHelix, CellStructure, MoleculeStructure, Microbe } from "./BioDecorations";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Bio illustrations */}
      <DnaHelix className="absolute right-16 top-28 w-20 h-48 text-accent/40 animate-float hidden lg:block" />
      <CellStructure className="absolute right-1/4 bottom-24 w-36 h-36 text-accent/30 animate-float-slow hidden md:block" />
      <MoleculeStructure className="absolute left-12 bottom-32 w-28 h-28 text-accent/30 animate-spin-slow hidden lg:block" />
      <Microbe className="absolute right-24 top-1/2 w-20 h-20 text-accent/25 animate-float hidden md:block" />

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
            <div className="absolute top-0 right-0 w-56 h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 rotate-3">
              <Image
                src="/images/hero-bio.jpg"
                alt="Laboratory beakers"
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 -rotate-2">
              <Image
                src="/images/microscope.jpg"
                alt="Fluorescent cell imaging"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-accent/20">
              <Image
                src="/images/cells.jpg"
                alt="Pipetting in laboratory"
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

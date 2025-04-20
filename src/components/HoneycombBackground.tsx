import { DnaHelix, CellStructure, MoleculeStructure, Microbe } from "./BioDecorations";

export default function HoneycombBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Honeycomb SVG pattern */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="honeycomb"
            width="120"
            height="208"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.2)"
          >
            <path
              d="M60 4 L105 30 L105 82 L60 108 L15 82 L15 30 Z"
              fill="none"
              stroke="#c0c8cc"
              strokeWidth="1.2"
              opacity="0.35"
            />
            <path
              d="M60 4 L105 30 L105 82 L60 108 L15 82 L15 30 Z"
              fill="white"
              opacity="0.06"
            />
            <path
              d="M120 108 L165 134 L165 186 L120 212 L75 186 L75 134 Z"
              fill="none"
              stroke="#c0c8cc"
              strokeWidth="1.2"
              opacity="0.35"
            />
            <path
              d="M120 108 L165 134 L165 186 L120 212 L75 186 L75 134 Z"
              fill="white"
              opacity="0.06"
            />
            <path
              d="M0 108 L45 134 L45 186 L0 212 L-45 186 L-45 134 Z"
              fill="none"
              stroke="#c0c8cc"
              strokeWidth="1.2"
              opacity="0.35"
            />
            <path
              d="M0 108 L45 134 L45 186 L0 212 L-45 186 L-45 134 Z"
              fill="white"
              opacity="0.06"
            />
          </pattern>

          <radialGradient id="fade-mask" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0.15" />
          </radialGradient>
          <mask id="hex-fade">
            <rect width="100%" height="100%" fill="url(#fade-mask)" />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#honeycomb)"
          mask="url(#hex-fade)"
        />
      </svg>

      {/* Bio illustrations fixed inside hexagon cells */}
      <div className="absolute top-[8%] right-[10%]">
        <IllustrationHex>
          <DnaHelix className="w-10 h-28 text-accent/60" />
        </IllustrationHex>
      </div>
      <div className="absolute top-[35%] left-[5%]">
        <IllustrationHex>
          <CellStructure className="w-16 h-16 text-accent/60" />
        </IllustrationHex>
      </div>
      <div className="absolute top-[60%] right-[8%]">
        <IllustrationHex>
          <MoleculeStructure className="w-14 h-14 text-accent/60" />
        </IllustrationHex>
      </div>
      <div className="absolute top-[15%] left-[15%]">
        <IllustrationHex>
          <Microbe className="w-12 h-12 text-accent/60" />
        </IllustrationHex>
      </div>
      <div className="absolute bottom-[15%] left-[12%]">
        <IllustrationHex>
          <DnaHelix className="w-8 h-20 text-accent/40" />
        </IllustrationHex>
      </div>
      <div className="absolute bottom-[10%] right-[15%]">
        <IllustrationHex>
          <CellStructure className="w-14 h-14 text-accent/40" />
        </IllustrationHex>
      </div>
      <div className="absolute top-[50%] left-[45%]">
        <IllustrationHex size="sm">
          <Microbe className="w-8 h-8 text-accent/30" />
        </IllustrationHex>
      </div>
      <div className="absolute top-[80%] left-[35%]">
        <IllustrationHex size="sm">
          <MoleculeStructure className="w-10 h-10 text-accent/35" />
        </IllustrationHex>
      </div>
    </div>
  );
}

function IllustrationHex({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? 80 : 110;
  const r = dim / 2 - 2;
  const cx = dim / 2;
  const cy = dim / 2;
  const points = hexPoints(cx, cy, r);

  return (
    <div className="relative" style={{ width: dim, height: dim }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${dim} ${dim}`}
        fill="none"
      >
        <polygon points={points} fill="white" opacity="0.15" />
        <polygon
          points={points}
          stroke="#b0bec5"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
  }).join(" ");
}

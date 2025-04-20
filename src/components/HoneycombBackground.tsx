import { DnaHelix, CellStructure, MoleculeStructure, Microbe } from "./BioDecorations";

const HEX_W = 144;
const HEX_H = 249.6;
const ROW1_CX = 72;
const ROW1_CY = 67.2;
const ROW2_CX = 144;
const ROW2_CY = 192;

function gridPos(col: number, row: number) {
  const isOddRow = row % 2 !== 0;
  const x = col * HEX_W + (isOddRow ? ROW2_CX : ROW1_CX);
  const y = Math.floor(row / 2) * HEX_H + (isOddRow ? ROW2_CY : ROW1_CY);
  return { x, y };
}

const illustrations = [
  { col: 0, row: 1, el: <DnaHelix className="w-10 h-24 text-accent/50" /> },
  { col: 8, row: 0, el: <CellStructure className="w-16 h-16 text-accent/50" /> },
  { col: 1, row: 3, el: <MoleculeStructure className="w-14 h-14 text-accent/45" /> },
  { col: 9, row: 2, el: <Microbe className="w-12 h-12 text-accent/50" /> },
  { col: 5, row: 5, el: <DnaHelix className="w-8 h-18 text-accent/35" /> },
  { col: 10, row: 4, el: <CellStructure className="w-12 h-12 text-accent/35" /> },
  { col: 2, row: 6, el: <Microbe className="w-10 h-10 text-accent/30" /> },
  { col: 7, row: 7, el: <MoleculeStructure className="w-12 h-12 text-accent/30" /> },
];

export default function HoneycombBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
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
              stroke="#a0adb5"
              strokeWidth="2"
              opacity="0.55"
            />
            <path
              d="M60 4 L105 30 L105 82 L60 108 L15 82 L15 30 Z"
              fill="white"
              opacity="0.06"
            />
            <path
              d="M120 108 L165 134 L165 186 L120 212 L75 186 L75 134 Z"
              fill="none"
              stroke="#a0adb5"
              strokeWidth="2"
              opacity="0.55"
            />
            <path
              d="M120 108 L165 134 L165 186 L120 212 L75 186 L75 134 Z"
              fill="white"
              opacity="0.06"
            />
            <path
              d="M0 108 L45 134 L45 186 L0 212 L-45 186 L-45 134 Z"
              fill="none"
              stroke="#a0adb5"
              strokeWidth="2"
              opacity="0.55"
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

      {/* Illustrations snapped to honeycomb grid centers */}
      {illustrations.map((item, i) => {
        const pos = gridPos(item.col, item.row);
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {item.el}
          </div>
        );
      })}
    </div>
  );
}

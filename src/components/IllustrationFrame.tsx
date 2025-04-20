import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { w: 100, h: 115 },
  md: { w: 140, h: 162 },
  lg: { w: 180, h: 208 },
};

export default function IllustrationFrame({ children, className = "", size = "md" }: Props) {
  const { w, h } = sizes[size];

  const points = hexPoints(w / 2, h / 2, Math.min(w, h) / 2 - 2);

  return (
    <div className={`relative ${className}`} style={{ width: w, height: h }}>
      {/* Honeycomb hex shape */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
      >
        {/* Fill */}
        <polygon
          points={points}
          fill="currentColor"
          className="text-accent/8"
        />
        {/* Border */}
        <polygon
          points={points}
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-accent/50"
          fill="none"
        />
        {/* Inner hex border */}
        <polygon
          points={hexPoints(w / 2, h / 2, Math.min(w, h) / 2 - 10)}
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent/20"
          fill="none"
          strokeDasharray="6 4"
        />
      </svg>
      {/* Content centered inside hex */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

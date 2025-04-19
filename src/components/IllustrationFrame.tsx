import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function IllustrationFrame({ children, className = "" }: Props) {
  return (
    <div
      className={`relative p-3 ${className}`}
    >
      {/* Grid/lattice background */}
      <div className="absolute inset-0 rounded-xl border-2 border-accent/25 bg-accent/5">
        <svg className="absolute inset-0 w-full h-full rounded-xl" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path
                d="M 16 0 L 0 0 0 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent/15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

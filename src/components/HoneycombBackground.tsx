export default function HoneycombBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Single hexagon shape */}
          <pattern
            id="honeycomb"
            width="120"
            height="208"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.2)"
          >
            {/* Row 1 hex */}
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
            {/* Row 2 hex (offset) */}
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
            {/* Row 2 hex left (offset) */}
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

          {/* Fade mask - stronger in center, fades at edges */}
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
    </div>
  );
}

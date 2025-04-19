export function DnaHelix({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10 C50 30, 50 50, 20 70 C-10 90, -10 110, 20 130 C50 150, 50 170, 20 190"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 10 C30 30, 30 50, 60 70 C90 90, 90 110, 60 130 C30 150, 30 170, 60 190"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Cross bars */}
      <line x1="28" y1="20" x2="52" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="60" x2="55" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="25" y1="100" x2="55" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="120" x2="60" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="140" x2="55" y2="140" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="28" y1="180" x2="52" y2="180" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Nodes */}
      <circle cx="20" cy="70" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="60" cy="70" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="130" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="60" cy="130" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function CellStructure({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cell membrane */}
      <ellipse cx="60" cy="60" rx="55" ry="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="60" cy="60" rx="52" ry="47" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
      {/* Nucleus */}
      <circle cx="55" cy="55" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="52" cy="52" r="6" fill="currentColor" opacity="0.15" />
      {/* Organelles */}
      <ellipse cx="85" cy="45" rx="8" ry="5" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(-20 85 45)" />
      <ellipse cx="35" cy="82" rx="9" ry="5" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(15 35 82)" />
      <ellipse cx="80" cy="75" rx="7" ry="4" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(-30 80 75)" />
      {/* Small dots (ribosomes) */}
      <circle cx="70" cy="35" r="1.5" fill="currentColor" opacity="0.25" />
      <circle cx="90" cy="60" r="1.5" fill="currentColor" opacity="0.25" />
      <circle cx="45" cy="40" r="1.5" fill="currentColor" opacity="0.25" />
      <circle cx="75" cy="88" r="1.5" fill="currentColor" opacity="0.25" />
      <circle cx="30" cy="60" r="1.5" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export function MoleculeStructure({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bonds */}
      <line x1="50" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="50" y1="50" x2="30" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="50" y1="50" x2="70" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="30" y1="70" x2="15" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="70" y1="70" x2="85" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="50" y1="30" x2="35" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="50" y1="30" x2="65" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Atoms */}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="30" r="5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
      <circle cx="30" cy="70" r="5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
      <circle cx="70" cy="70" r="5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
      <circle cx="15" cy="60" r="4" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1" />
      <circle cx="85" cy="60" r="4" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1" />
      <circle cx="35" cy="18" r="4" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1" />
      <circle cx="65" cy="18" r="4" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Microbe({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="40" cy="42" rx="22" ry="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="35" cy="38" r="4" fill="currentColor" opacity="0.15" />
      <circle cx="46" cy="44" r="3" fill="currentColor" opacity="0.1" />
      {/* Flagella */}
      <path d="M18 42 C10 38, 5 45, 0 40" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <path d="M40 22 C38 14, 44 8, 42 2" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <path d="M58 35 C65 30, 72 34, 78 28" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

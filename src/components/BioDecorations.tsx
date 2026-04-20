export function DnaHelix({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Double helix strands */}
      <path d="M18 4C34 10 34 22 18 28C2 34 2 46 18 52C34 58 34 62 28 64" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M46 4C30 10 30 22 46 28C62 34 62 46 46 52C30 58 30 62 36 64" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Base pairs */}
      <line x1="22" y1="8" x2="42" y2="8" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <line x1="18" y1="16" x2="46" y2="16" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <line x1="20" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <line x1="20" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <line x1="18" y1="48" x2="46" y2="48" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <line x1="22" y1="56" x2="42" y2="56" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      {/* Nucleotide dots */}
      <circle cx="18" cy="28" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="46" cy="28" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="52" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="46" cy="52" r="3" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function Microscope({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base */}
      <rect x="12" y="54" width="40" height="4" rx="2" fill="currentColor" opacity="0.8" />
      <rect x="28" y="50" width="8" height="6" rx="1" fill="currentColor" opacity="0.6" />
      {/* Arm */}
      <rect x="30" y="14" width="4" height="38" rx="2" fill="currentColor" opacity="0.7" />
      {/* Top arm */}
      <path d="M22 14 L34 14 L34 18 L22 18 Z" fill="currentColor" opacity="0.6" rx="1" />
      {/* Eyepiece */}
      <rect x="20" y="6" width="8" height="10" rx="3" fill="currentColor" opacity="0.8" />
      <rect x="22" y="4" width="4" height="4" rx="2" fill="currentColor" opacity="0.5" />
      {/* Objective lens */}
      <rect x="24" y="38" width="6" height="8" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="25" y="44" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
      {/* Stage */}
      <rect x="16" y="46" width="20" height="3" rx="1" fill="currentColor" opacity="0.6" />
      {/* Focus knob */}
      <circle cx="38" cy="32" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="38" cy="32" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function MoleculeStructure({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bonds */}
      <line x1="32" y1="16" x2="32" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="32" y1="32" x2="16" y2="48" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="32" y1="32" x2="48" y2="48" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="32" y1="16" x2="18" y2="8" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="32" y1="16" x2="46" y2="8" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="16" y1="48" x2="6" y2="42" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="48" y1="48" x2="58" y2="42" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      {/* Atoms - different sizes for different elements */}
      <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="16" r="5" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="48" r="5" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="48" r="5" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="8" r="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="46" cy="8" r="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="6" cy="42" r="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="58" cy="42" r="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Flask({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flask body */}
      <path d="M24 6 L24 24 L8 52 C6 56 9 60 14 60 L50 60 C55 60 58 56 56 52 L40 24 L40 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Neck ring */}
      <line x1="22" y1="6" x2="42" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Liquid level */}
      <path d="M14 44 L50 44 L56 52 C58 56 55 60 50 60 L14 60 C9 60 6 56 8 52 Z" fill="currentColor" opacity="0.15" />
      {/* Bubbles */}
      <circle cx="28" cy="50" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="36" cy="46" r="1.5" fill="currentColor" opacity="0.25" />
      <circle cx="22" cy="54" r="1" fill="currentColor" opacity="0.2" />
      <circle cx="40" cy="52" r="1.5" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export function CellStructure({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cell membrane */}
      <ellipse cx="32" cy="32" rx="28" ry="26" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      {/* Nucleus */}
      <circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <circle cx="26" cy="26" r="4" fill="currentColor" opacity="0.25" />
      {/* ER */}
      <path d="M40 18 C44 20 46 24 44 28" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M42 20 C46 22 48 26 46 30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Mitochondria */}
      <ellipse cx="44" cy="42" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" transform="rotate(-25 44 42)" />
      <path d="M38 40 C40 42 42 40 44 42 C46 44 48 42 49 44" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Organelles */}
      <ellipse cx="18" cy="44" rx="6" ry="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" transform="rotate(15 18 44)" />
      {/* Ribosomes */}
      <circle cx="36" cy="16" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="50" cy="32" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="24" cy="46" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="30" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function Atom({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Nucleus */}
      <circle cx="32" cy="32" r="5" fill="currentColor" opacity="0.5" />
      {/* Electron orbits */}
      <ellipse cx="32" cy="32" rx="26" ry="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="32" cy="32" rx="26" ry="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="26" ry="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" transform="rotate(120 32 32)" />
      {/* Electrons */}
      <circle cx="58" cy="32" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="19" cy="10" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="19" cy="54" r="3" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function Bacteria({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="32" cy="34" rx="18" ry="14" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <ellipse cx="32" cy="34" rx="18" ry="14" fill="currentColor" opacity="0.08" />
      {/* Internal structures */}
      <circle cx="28" cy="32" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="38" cy="36" r="3" fill="currentColor" opacity="0.15" />
      {/* Flagella */}
      <path d="M14 34 C8 30 4 36 0 32" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <path d="M32 20 C30 14 36 10 34 4" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <path d="M48 28 C54 24 58 28 64 24" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      {/* Pili */}
      <line x1="20" y1="22" x2="16" y2="16" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <line x1="44" y1="22" x2="48" y2="16" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <line x1="22" y1="46" x2="18" y2="52" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <line x1="42" y1="46" x2="46" y2="52" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Leaf shape */}
      <path d="M32 8 C48 8 58 20 58 36 C58 48 48 58 32 58 C16 58 8 44 8 32 C8 18 18 8 32 8Z" stroke="currentColor" strokeWidth="2" opacity="0.7" fill="currentColor" fillOpacity="0.08" />
      {/* Main vein */}
      <path d="M32 12 L32 54" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      {/* Side veins */}
      <path d="M32 20 L44 16" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M32 20 L20 18" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M32 28 L48 24" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M32 28 L16 26" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M32 36 L50 34" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M32 36 L14 34" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M32 44 L46 44" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M32 44 L18 42" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      {/* Stem */}
      <path d="M32 54 L28 62" stroke="currentColor" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
    </svg>
  );
}

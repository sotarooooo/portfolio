export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 bg-foreground/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold tracking-tight">
              Sotaro<span className="text-accent">.</span>
            </span>
            <span className="text-xs text-muted">Bio × Engineering</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sotarooooo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:basketball20031122@gmail.com"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted/70">
            &copy; 2025 Sotaro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; 2025 Sotaro. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sotarooooo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:basketball20031122@gmail.com"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

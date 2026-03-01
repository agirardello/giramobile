import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
            Gira Mobile
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/terms"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
}

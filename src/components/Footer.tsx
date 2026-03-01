import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          &copy; {year} Gira Mobile. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/terms"
            className="text-sm text-slate-400 hover:text-slate-700 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-slate-400 hover:text-slate-700 transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

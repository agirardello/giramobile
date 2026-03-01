import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-2">
        <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms</Link>
        <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy</Link>
      </div>
      <p className="text-xs text-slate-300">&copy; {new Date().getFullYear()} Gira Mobile</p>
    </footer>
  );
}

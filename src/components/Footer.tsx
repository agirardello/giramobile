import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Gira Mobile</p>
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-slate-700 transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-slate-700 transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

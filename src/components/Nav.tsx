import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white hover:text-blue-100 transition-colors">
          Gira Mobile
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/terms" className="text-sm text-blue-100 hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-blue-100 hover:text-white transition-colors">
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import LegalSections from "@/components/LegalSections";

export const metadata: Metadata = {
  title: "Gira Mobile",
  description: "Minimalistic and functional apps that everyone can use.",
};

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="flex flex-col items-center text-center px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <Image
          src="/sudoku-icon.png"
          alt="Sudoku"
          width={96}
          height={96}
          className="rounded-[22px] mb-8"
          priority
        />
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-none">
          Sudoku
        </h1>
        <p className="mt-3 text-base font-medium text-[#86868B] tracking-wide uppercase">
          by Gira Mobile
        </p>
        <p className="mt-6 text-xl text-[#6E6E73] max-w-xs sm:max-w-sm leading-relaxed">
          The classic number puzzle — clean, focused, and distraction&#8209;free.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=me.gira.sudoku"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2.5 bg-[#1D1D1F] hover:bg-[#3a3a3c] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3.18 23.76a2 2 0 0 0 2.12-.22l12.09-6.88-2.93-2.93-11.28 10.03ZM.5 1.4A2 2 0 0 0 0 2.67v18.67a2 2 0 0 0 .5 1.26L.62 22.7l10.45-10.45v-.25L.62 1.56.5 1.4ZM20.37 10.43 17.4 8.76l-3.18 3.18 3.18 3.18 2.98-1.69a2 2 0 0 0 0-3l-.01.01ZM3.18.24 14.34 7.26 11.4 10.2.62 1.33A2 2 0 0 0 3.18.24Z" />
          </svg>
          Get it on Google Play
        </a>
      </section>

      {/* ── Legal (shown only when #terms or #privacy is in the URL) ── */}
      <LegalSections />

      {/* ── Footer ── */}
      <footer className="border-t border-[#D2D2D7] px-6 py-10">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#86868B]">&copy; {new Date().getFullYear()} Gira Mobile</p>
          <div className="flex gap-6 text-sm text-[#86868B]">
            <a href="#terms" className="hover:text-[#1D1D1F] transition-colors">Terms</a>
            <a href="#privacy" className="hover:text-[#1D1D1F] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}

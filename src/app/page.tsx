import type { Metadata } from "next";
import Image from "next/image";
import LegalSections from "@/components/LegalSections";
import FooterHomeButton from "@/components/FooterHomeButton";

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
        {/* Official Google Play badge per badge guidelines */}
        <a
          href="https://play.google.com/store/apps/details?id=me.gira.sudoku"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
          aria-label="Get it on Google Play"
        >
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={200}
            height={77}
            priority
          />
        </a>
      </section>

      {/* ── Legal (shown only when #terms or #privacy is in the URL) ── */}
      <LegalSections />

      {/* ── Footer ── */}
      <footer className="border-t border-[#D2D2D7] px-6 py-10">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#86868B]">&copy; {new Date().getFullYear()} Gira Mobile</p>
          <div className="flex gap-6 text-sm text-[#86868B]">
            <FooterHomeButton />
            <a href="#terms" className="hover:text-[#1D1D1F] transition-colors">Terms</a>
            <a href="#privacy" className="hover:text-[#1D1D1F] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}

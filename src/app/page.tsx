import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gira Mobile",
  description: "Minimalistic and functional apps that everyone can use.",
};

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-16">
      {/* Brand */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#1565C0] mb-1">
          Gira Mobile
        </h1>
        <p className="text-sm text-slate-500">
          Minimalistic and functional apps that everyone can use.
        </p>
      </div>

      {/* App card */}
      <div className="w-full max-w-sm bg-white rounded-4xl shadow-card overflow-hidden">
        {/* Card header strip */}
        <div className="h-1.5 bg-[#1565C0]" />

        <div className="p-7">
          {/* Icon + name */}
          <div className="flex items-center gap-4 mb-5">
            <Image
              src="/sudoku-icon.png"
              alt="Sudoku app icon"
              width={64}
              height={64}
              className="rounded-2xl"
              priority
            />
            <div>
              <h2 className="text-xl font-semibold text-slate-900 leading-tight">
                Sudoku
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 font-medium uppercase tracking-wide">
                Puzzle
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-7">
            A clean, distraction-free Sudoku with four difficulty levels,
            hints, pencil marks, and auto-save — so you never lose your progress.
          </p>

          {/* Play Store button */}
          <a
            href="https://play.google.com/store/apps/details?id=me.gira.sudoku"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#1565C0] hover:bg-[#0D47A1] active:bg-[#0A3880] text-white text-sm font-medium py-3 px-5 rounded-2xl transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.18 23.76a2 2 0 0 0 2.12-.22l12.09-6.88-2.93-2.93-11.28 10.03ZM.5 1.4A2 2 0 0 0 0 2.67v18.67a2 2 0 0 0 .5 1.26L.62 22.7l10.45-10.45v-.25L.62 1.56.5 1.4ZM20.37 10.43 17.4 8.76l-3.18 3.18 3.18 3.18 2.98-1.69a2 2 0 0 0 0-3l-.01.01ZM3.18.24 14.34 7.26 11.4 10.2.62 1.33A2 2 0 0 0 3.18.24Z" />
            </svg>
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}

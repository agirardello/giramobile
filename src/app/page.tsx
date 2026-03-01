import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gira Mobile",
  description: "Minimalistic and functional apps that everyone can use.",
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Our Apps</h1>
        <p className="text-slate-500">Minimalistic and functional apps that everyone can use.</p>
      </div>

      <div className="flex items-start gap-6">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="8" height="8" rx="1" fill="white" fillOpacity="0.9"/>
            <rect x="12" y="2" width="8" height="8" rx="1" fill="white" fillOpacity="0.5"/>
            <rect x="22" y="2" width="8" height="8" rx="1" fill="white" fillOpacity="0.9"/>
            <rect x="2" y="12" width="8" height="8" rx="1" fill="white" fillOpacity="0.5"/>
            <rect x="12" y="12" width="8" height="8" rx="1" fill="white" fillOpacity="0.9"/>
            <rect x="22" y="12" width="8" height="8" rx="1" fill="white" fillOpacity="0.5"/>
            <rect x="2" y="22" width="8" height="8" rx="1" fill="white" fillOpacity="0.9"/>
            <rect x="12" y="22" width="8" height="8" rx="1" fill="white" fillOpacity="0.5"/>
            <rect x="22" y="22" width="8" height="8" rx="1" fill="white" fillOpacity="0.9"/>
          </svg>
        </div>

        {/* App info */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-1">Sudoku</h2>
          <p className="text-slate-500 mb-4">
            A clean, distraction-free Sudoku experience with multiple difficulty levels,
            hints, and auto-save so you never lose your progress.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=me.gira.android.sudoku"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.18 23.76a2 2 0 0 0 2.12-.22l12.09-6.88-2.93-2.93-11.28 10.03ZM.5 1.4A2 2 0 0 0 0 2.67v18.67a2 2 0 0 0 .5 1.26L.62 22.7l10.45-10.45v-.25L.62 1.56.5 1.4ZM20.37 10.43 17.4 8.76l-3.18 3.18 3.18 3.18 2.98-1.69a2 2 0 0 0 0-3l-.01.01ZM3.18.24 14.34 7.26 11.4 10.2.62 1.33A2 2 0 0 0 3.18.24Z" />
            </svg>
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}

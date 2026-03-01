import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gira Mobile – Minimalistic and functional apps",
  description: "Minimalistic and functional apps that everyone can use.",
};

const apps = [
  {
    name: "Sudoku",
    tagline: "The classic puzzle, perfected.",
    description:
      "A clean, distraction-free Sudoku experience with multiple difficulty levels, hints, and an auto-save feature so you never lose your progress.",
    icon: "/icons/sudoku.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=me.gira.android.sudoku",
  },
  {
    name: "Countdown for Events",
    tagline: "Never miss a moment.",
    description:
      "Track the days to your most important events with a beautiful home screen widget. Birthdays, anniversaries, trips — always at a glance.",
    icon: "/icons/countdown.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=me.gira.android.countdown",
  },
];

function GooglePlayBadge({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-700 text-white px-5 py-3 rounded-xl transition-colors group"
      aria-label="Get it on Google Play"
    >
      <svg
        className="w-5 h-5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3.18 23.76a2 2 0 0 0 2.12-.22l12.09-6.88-2.93-2.93-11.28 10.03ZM.5 1.4A2 2 0 0 0 0 2.67v18.67a2 2 0 0 0 .5 1.26L.62 22.7l10.45-10.45v-.25L.62 1.56.5 1.4ZM20.37 10.43 17.4 8.76l-3.18 3.18 3.18 3.18 2.98-1.69a2 2 0 0 0 0-3l-.01.01ZM3.18.24 14.34 7.26 11.4 10.2.62 1.33A2 2 0 0 0 3.18.24Z" />
      </svg>
      <div className="text-left leading-none">
        <div className="text-[10px] font-normal opacity-80 mb-0.5">GET IT ON</div>
        <div className="text-sm font-semibold">Google Play</div>
      </div>
    </a>
  );
}

function AppCard({ app }: { app: (typeof apps)[0] }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 p-8 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-50 transition-all duration-300">
      <div className="flex items-start gap-5 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-200">
          <span className="text-white text-2xl font-bold">
            {app.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">{app.name}</h3>
          <p className="text-sm font-medium text-brand-600">{app.tagline}</p>
        </div>
      </div>
      <p className="text-slate-500 leading-relaxed mb-8">{app.description}</p>
      <GooglePlayBadge url={app.playStoreUrl} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 to-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 20%, #818cf8 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-6 py-28 sm:py-36 text-center">
          <p className="text-brand-300 text-sm font-semibold tracking-widest uppercase mb-4">
            Gira Mobile
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-balance">
            Minimalistic and functional apps that{" "}
            <span className="text-brand-400">everyone</span> can use.
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Simple, focused Android apps — no clutter, no subscriptions, just
            the experience you need.
          </p>
        </div>
      </section>

      {/* Apps */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Apps</h2>
          <p className="text-slate-500">Available on Google Play</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-20 grid sm:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: "✦",
              title: "Minimal by design",
              body: "Every feature earns its place. Nothing more, nothing less.",
            },
            {
              icon: "◈",
              title: "Privacy first",
              body: "Your data stays on your device unless you choose otherwise.",
            },
            {
              icon: "◉",
              title: "Built to last",
              body: "Reliable apps that work offline and respect your battery.",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-brand-500 text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

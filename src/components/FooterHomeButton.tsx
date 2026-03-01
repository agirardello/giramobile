"use client";

export default function FooterHomeButton() {
  return (
    <button
      onClick={() => {
        history.replaceState(null, "", "/");
        window.dispatchEvent(new Event("hashchange"));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="hover:text-[#1D1D1F] transition-colors"
    >
      Home
    </button>
  );
}

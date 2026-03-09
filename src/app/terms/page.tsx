import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Gira Mobile",
  description: "Terms of Service for Gira Mobile applications.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="px-6 py-16 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="text-3xl font-bold text-[#1D1D1F]">Terms of Service</h1>
          <Link href="/" className="mt-1.5 text-sm text-[#0071E3] hover:underline shrink-0">
            ← Home
          </Link>
        </div>
        <p className="text-sm text-[#86868B] mb-12">Last updated: March 1, 2026</p>

        <div className="space-y-8 text-[#3A3A3C] leading-relaxed text-[15px]">
          <p>
            By downloading or using any application distributed by Gira Mobile, you agree to
            these Terms.
          </p>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">1. License</h2>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to use the
              software for personal, non-commercial use.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">2. Restrictions</h2>
            <p>
              You may not reverse engineer, redistribute, resell, or use the software for illegal
              purposes.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">3. Purchases</h2>
            <p>
              Payments and refunds for in-app purchases are handled by Google Play and subject to
              Google policies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">4. Liability</h2>
            <p>
              The software is provided &ldquo;as is&rdquo; without warranties. To the maximum extent allowed
              by law, Gira Mobile is not liable for indirect or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">5. Contact</h2>
            <p>
              Questions can be sent to{" "}
              <a href="mailto:info@gira.me" className="text-[#0071E3] hover:underline">
                info@gira.me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

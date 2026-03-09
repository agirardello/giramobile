import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Gira Mobile",
  description: "Privacy Policy for Gira Mobile applications.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="px-6 py-16 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="text-3xl font-bold text-[#1D1D1F]">Privacy Policy</h1>
          <Link href="/" className="mt-1.5 text-sm text-[#0071E3] hover:underline shrink-0">
            ← Home
          </Link>
        </div>
        <p className="text-sm text-[#86868B] mb-12">Last updated: March 1, 2026</p>

        <div className="space-y-8 text-[#3A3A3C] leading-relaxed text-[15px]">
          <p>
            Gira Mobile is committed to protecting your privacy. This policy explains how we
            collect, use, and safeguard information when you use our applications.
          </p>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">1. Information We Collect</h2>
            <p>
              We do not collect personal data unless it is explicitly required to operate a
              feature. The app may collect aggregated non-personal diagnostics (such as crashes)
              to improve reliability.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">2. How We Use Data</h2>
            <p>
              Data is used to provide and improve the app, troubleshoot issues, and comply with
              legal obligations. We do not sell personal data.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">3. Third-Party Services</h2>
            <p>
              The app may use Google services such as Firebase and AdMob. Their handling of data
              is governed by Google policies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1D1D1F] mb-2">4. Your Rights</h2>
            <p>
              You can request account/data deletion where applicable. Questions can be sent to{" "}
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

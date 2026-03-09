import Link from "next/link";
import FooterHomeButton from "@/components/FooterHomeButton";

export default function TermsPage() {
  return (
    <>
      <main className="border-t border-[#D2D2D7] px-6 py-20">
        <div className="max-w-2xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h2 className="text-3xl font-bold text-[#1D1D1F]">Terms of Service</h2>
          <Link href="/" className="mt-1.5 text-sm text-[#0071E3] hover:underline shrink-0">
            ← Home
          </Link>
        </div>
        <p className="text-sm text-[#86868B] mb-12">Last updated: March 1, 2026</p>

        <div className="space-y-8 text-[#3A3A3C] leading-relaxed text-[15px]">
          <p>
            Please read these Terms carefully before installing, downloading, or using any
            application distributed by <strong className="text-[#1D1D1F]">Gira Mobile</strong>{" "}
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the Software you
            agree to be bound by these Terms.
          </p>

          {[
            {
              title: "1. Definitions",
              body: '"Software" refers to any application distributed by Gira Mobile, including all associated content, object code, documentation, updates, and upgrades. "User" (or "you") refers to any individual who installs, downloads, or otherwise uses the Software.',
            },
            {
              title: "2. License Grant",
              body: "Gira Mobile grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Software on a device you own or control, solely for your personal, non-commercial purposes. Some features may require additional purchases made through the Google Play Store.",
            },
            {
              title: "4. Ownership",
              body: "The Software and all intellectual property rights therein are and shall remain the exclusive property of Gira Mobile and its licensors. These Terms do not grant you any rights to trademarks, service marks, or logos of Gira Mobile.",
            },
            {
              title: "5. Purchases and Payments",
              body: "Any paid features or in-app purchases are processed exclusively through the Google Play Store and are subject to Google's terms and conditions. Refund requests must be submitted directly to Google Play. Gira Mobile has no control over payment processing or refund decisions made by Google.",
            },
            {
              title: "7. Disclaimer of Warranties",
              body: 'THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GIRA MOBILE DISCLAIMS ALL WARRANTIES INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
            },
            {
              title: "8. Limitation of Liability",
              body: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GIRA MOBILE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF OR INABILITY TO USE THE SOFTWARE.",
            },
            {
              title: "10. Termination",
              body: "You may terminate this agreement at any time by deleting the Software and your account. These Terms terminate automatically if you breach any provision. Upon termination, all licenses granted to you immediately cease.",
            },
            {
              title: "11. Changes to These Terms",
              body: "We reserve the right to modify these Terms at any time. Your continued use of the Software after changes are posted constitutes your acceptance of the revised Terms.",
            },
            {
              title: "12. Governing Law",
              body: "These Terms shall be governed by the laws of the Canton of Zürich, Switzerland. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zürich, Switzerland.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-semibold text-[#1D1D1F] mb-2">{title}</h3>
              <p>{body}</p>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-[#1D1D1F] mb-2">3. Restrictions</h3>
            <p className="mb-3">You may not, and may not permit others to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Copy, distribute, sell, or make derivative works of the Software;</li>
              <li>Reverse engineer, decompile, or attempt to extract source code;</li>
              <li>Use the Software for any unlawful or abusive purpose;</li>
              <li>Remove or obscure any proprietary notices on the Software.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] mb-2">6. Privacy and Data</h3>
            <p>
              Your use of the Software is also governed by our{" "}
              <a href="/privacy" className="text-[#0071E3] hover:underline">
                Privacy Policy
              </a>
              , incorporated into these Terms by reference.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] mb-2">13. Contact</h3>
            <p>
              Questions about these Terms?{" "}
              <a href="mailto:info@gira.me" className="text-[#0071E3] hover:underline">
                info@gira.me
              </a>
            </p>
          </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#D2D2D7] px-6 py-10">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#86868B]">&copy; {new Date().getFullYear()} Gira Mobile</p>
          <div className="flex gap-6 text-sm text-[#86868B]">
            <FooterHomeButton />
            <a href="/terms" className="hover:text-[#1D1D1F] transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-[#1D1D1F] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}

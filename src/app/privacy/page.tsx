import Link from "next/link";
import FooterHomeButton from "@/components/FooterHomeButton";

export default function PrivacyPage() {
  return (
    <>
      <main className="border-t border-[#D2D2D7] px-6 py-20">
        <div className="max-w-2xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h2 className="text-3xl font-bold text-[#1D1D1F]">Privacy Policy</h2>
          <Link href="/" className="mt-1.5 text-sm text-[#0071E3] hover:underline shrink-0">
            ← Home
          </Link>
        </div>
        <p className="text-sm text-[#86868B] mb-12">Last updated: March 1, 2026</p>

        <div className="space-y-8 text-[#3A3A3C] leading-relaxed text-[15px]">
          <p>
            Gira Mobile is committed to protecting your privacy. This policy explains how we
            collect, use, and safeguard information when you use our applications (the
            &ldquo;Software&rdquo;).
          </p>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] mb-2">1. Information We Collect</h3>
            <p className="mb-3">
              Gira Mobile will never collect personal data unless explicitly required to operate a
              specific feature. If you create an account, we collect only what is necessary (e.g. an
              email address). The Software does not collect precise location data.
            </p>
            <p>
              The Software may automatically collect non-personal, aggregated usage statistics —
              such as crash reports and feature usage — to improve reliability. This data cannot
              identify you individually.
            </p>
          </div>

          {[
            {
              title: "2. How We Use Your Information",
              body: "We use collected information to provide, maintain, and improve the Software; diagnose bugs; understand aggregate usage patterns; and comply with legal obligations. We do not sell your personal data.",
            },
            {
              title: "3. Data Storage",
              body: "Personal information is stored locally on your device by default. If you opt into remote backup, your data is stored using Google Firebase. We retain data only as long as necessary to provide the service.",
            },
            {
              title: "6. Children's Privacy",
              body: "The Software is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, contact us and we will promptly delete it.",
            },
            {
              title: "7. Data Security",
              body: "We implement appropriate safeguards to protect your information. No method of transmission over the internet is 100% secure, but we are committed to continuously improving our protections.",
            },
            {
              title: "8. Changes to This Policy",
              body: "We may update this policy from time to time and will indicate the revision date at the top of this page. Your continued use of the Software after changes are posted constitutes acceptance.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-semibold text-[#1D1D1F] mb-2">{title}</h3>
              <p>{body}</p>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-[#1D1D1F] mb-2">4. Third-Party Services</h3>
            <p className="mb-3">The Software integrates with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#1D1D1F]">Google Firebase</strong> — analytics, crash
                reporting, and optional cloud backup.{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0071E3] hover:underline"
                >
                  Firebase Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-[#1D1D1F]">Google AdMob</strong> — advertisements in the
                free version. You can opt out via your device&apos;s advertising settings.{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0071E3] hover:underline"
                >
                  Google Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] mb-2">5. Your Rights and Choices</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-[#1D1D1F]">Access &amp; correction</strong> — view and
                update your account in app settings.
              </li>
              <li>
                <strong className="text-[#1D1D1F]">Account deletion</strong> — delete your account
                anytime in app settings. Deletion is permanent.
              </li>
              <li>
                <strong className="text-[#1D1D1F]">Opt-out of analytics</strong> — adjust the
                setting in-app, or uninstall the Software.
              </li>
              <li>
                <strong className="text-[#1D1D1F]">Ad personalization</strong> — adjust via
                Settings &rarr; Privacy &rarr; Ads on your device.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] mb-2">9. Contact</h3>
            <p>
              Questions about privacy?{" "}
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

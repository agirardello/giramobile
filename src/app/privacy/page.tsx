import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Gira Mobile applications.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-4xl shadow-card px-8 py-10 sm:px-12">
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-[#1565C0] hover:text-[#0D47A1] transition-colors mb-6 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400">Last updated: March 1, 2026</p>
      </div>

      <div className="space-y-8 text-slate-600 leading-relaxed">
        <section>
          <p>
            Gira Mobile (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard information when you use our
            Android applications (the &ldquo;Software&rdquo;). By using the
            Software, you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            1. Information We Collect
          </h2>
          <h3 className="text-base font-semibold text-slate-800 mb-2">
            Information you provide
          </h3>
          <p>
            Gira Mobile will never collect any personal data unless explicitly
            required to operate a specific Software feature. If you choose to
            create an account to access optional features (such as cloud backup),
            we collect only the information necessary to provide that service,
            such as an email address.
          </p>
          <h3 className="text-base font-semibold text-slate-800 mb-2 mt-4">
            Automatically collected information
          </h3>
          <p>
            The Software may automatically collect non-personal, aggregated usage
            statistics — such as crash reports, feature usage frequency, and
            performance metrics — to help us improve reliability and user
            experience. This information cannot be used to identify you
            individually.
          </p>
          <h3 className="text-base font-semibold text-slate-800 mb-2 mt-4">
            Location data
          </h3>
          <p>
            The Software does not collect precise information about the location
            of your mobile device. Any coarse location data (e.g., country-level)
            that may be inferred from your IP address by third-party services
            is governed by those third parties&apos; privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Provide, maintain, and improve the Software;</li>
            <li>
              Diagnose technical problems, fix bugs, and ensure stability;
            </li>
            <li>
              Understand aggregate usage patterns to guide future development;
            </li>
            <li>Comply with legal obligations when required.</li>
          </ul>
          <p className="mt-3">
            We do not sell your personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            3. Data Storage
          </h2>
          <p>
            Personal information (if any) is stored locally on your device by
            default. If you opt into remote backup or account features, your
            data is securely stored using Google Firebase infrastructure. We
            retain your data only for as long as necessary to provide the
            service or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            4. Third-Party Services
          </h2>
          <p>
            The Software integrates with third-party services that may collect
            information under their own privacy policies. These include:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-3">
            <li>
              <strong>Google Firebase</strong> — used for analytics, crash
              reporting, and optional cloud backup. See{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1565C0] hover:text-[#0D47A1] underline underline-offset-2"
              >
                Firebase Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Google AdMob</strong> — used to serve advertisements in
              free versions of the Software. AdMob may use device identifiers
              and usage data for ad personalization. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1565C0] hover:text-[#0D47A1] underline underline-offset-2"
              >
                Google Privacy Policy
              </a>
              . You can opt out of personalized ads through your device&apos;s
              advertising settings.
            </li>
          </ul>
          <p className="mt-4">
            We may also disclose information to authorities if required to do so
            by law or in response to a valid legal request.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            5. Your Rights and Choices
          </h2>
          <p>You have the following rights regarding your data:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Access &amp; correction:</strong> You can view and update
              your account information directly within the app settings.
            </li>
            <li>
              <strong>Account deletion:</strong> You can delete your account at
              any time through the app&apos;s settings. Deletion is permanent
              and cannot be undone. All associated personal data will be removed
              from our servers within a reasonable timeframe.
            </li>
            <li>
              <strong>Opt-out of analytics:</strong> You may opt out of
              analytics collection by adjusting the relevant setting within the
              app, or by uninstalling the Software.
            </li>
            <li>
              <strong>Ad personalization:</strong> You can limit ad tracking
              through your device&apos;s advertising settings
              (Settings &gt; Privacy &gt; Ads on Android).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            6. Children&apos;s Privacy
          </h2>
          <p>
            The Software is not directed to children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If you believe a child has provided us with personal information,
            please contact us and we will promptly delete it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            7. Data Security
          </h2>
          <p>
            We implement appropriate physical, electronic, and procedural
            safeguards to protect your information. However, no method of
            transmission over the internet or electronic storage is 100% secure.
            We cannot guarantee absolute security but are committed to
            continuously improving our protections.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will indicate
            the date of the last revision at the top of this page. We encourage
            you to review this page periodically. Your continued use of the
            Software after changes are posted constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            9. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className="mt-3">
            <a
              href="mailto:info@gira.me"
              className="text-[#1565C0] hover:text-[#0D47A1] underline underline-offset-2"
            >
              info@gira.me
            </a>
          </p>
        </section>
      </div>
      </div>
    </div>
  );
}

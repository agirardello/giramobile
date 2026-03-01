"use client";
import { useEffect, useState } from "react";

type Section = "terms" | "privacy" | null;

function read(): Section {
  const h = typeof window !== "undefined" ? window.location.hash : "";
  if (h === "#terms") return "terms";
  if (h === "#privacy") return "privacy";
  return null;
}

export default function LegalSections() {
  const [active, setActive] = useState<Section>(null);

  useEffect(() => {
    setActive(read());
    const onHashChange = () => setActive(read());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (active) {
      document.getElementById(active)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [active]);

  if (!active) return null;

  return (
    <section
      id={active}
      className="border-t border-[#D2D2D7] px-6 py-20"
    >
      <div className="max-w-2xl mx-auto">
        {active === "terms" ? <Terms /> : <Privacy />}
      </div>
    </section>
  );
}

function Terms() {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#1D1D1F] mb-1">Terms of Service</h2>
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
            <a href="#privacy" className="text-[#0071E3] hover:underline">
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
    </>
  );
}

function Privacy() {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#1D1D1F] mb-1">Privacy Policy</h2>
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
    </>
  );
}

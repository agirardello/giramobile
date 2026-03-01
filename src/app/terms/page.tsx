import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Gira Mobile applications.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400">Last updated: March 1, 2026</p>
      </div>

      <div className="space-y-8 text-slate-600 leading-relaxed">
        <section>
          <p>
            Please read these Terms of Service carefully before installing,
            downloading, or using any software application distributed by{" "}
            <strong>Gira Mobile</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;). By accessing or using the Software, you
            agree to be bound by these Terms. If you do not agree, do not
            install or use the Software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            1. Definitions
          </h2>
          <p>
            &ldquo;Software&rdquo; refers to any mobile application distributed
            by Gira Mobile, including all associated digital content, object
            code, documentation, updates, and upgrades. &ldquo;User&rdquo;
            (or &ldquo;you&rdquo;) refers to any individual who installs,
            downloads, or otherwise uses the Software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            2. License Grant
          </h2>
          <p>
            Subject to your compliance with these Terms, Gira Mobile grants you
            a limited, non-exclusive, non-transferable, revocable license to
            install and use the Software on a device you own or control, solely
            for your personal, non-commercial purposes. Some features may
            require additional purchases made through the Google Play Store.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            3. Restrictions
          </h2>
          <p>You may not, and you may not permit others to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Copy, reproduce, distribute, sell, resell, or sublicense the
              Software or any portion of it;
            </li>
            <li>
              Modify, translate, adapt, or create derivative works based on the
              Software;
            </li>
            <li>
              Reverse engineer, decompile, disassemble, or attempt to extract
              the source code of the Software, except to the extent permitted
              by applicable law;
            </li>
            <li>
              Use the Software for any unlawful, harmful, abusive, fraudulent,
              or otherwise objectionable purpose;
            </li>
            <li>
              Remove, alter, or obscure any proprietary notices or labels on
              the Software.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            4. Ownership
          </h2>
          <p>
            The Software and all intellectual property rights therein are and
            shall remain the exclusive property of Gira Mobile and its
            licensors. These Terms do not grant you any rights to trademarks,
            service marks, or logos of Gira Mobile. All rights not expressly
            granted herein are reserved.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            5. Purchases and Payments
          </h2>
          <p>
            Any paid features or in-app purchases are processed exclusively
            through the Google Play Store and are subject to Google&apos;s
            terms and conditions. Refund requests must be submitted directly to
            Google Play in accordance with their refund policy. Gira Mobile has
            no control over and assumes no responsibility for payment processing
            or refund decisions made by Google.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            6. Privacy and Data
          </h2>
          <p>
            Your use of the Software is also governed by our{" "}
            <Link
              href="/privacy"
              className="text-[#1565C0] hover:text-[#0D47A1] underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. By using the
            Software, you consent to the data practices described therein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            7. Disclaimer of Warranties
          </h2>
          <p>
            THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GIRA MOBILE
            EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, TITLE, AND NON-INFRINGEMENT. GIRA MOBILE DOES NOT WARRANT
            THAT THE SOFTWARE WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR
            FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
            SHALL GIRA MOBILE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO
            YOUR USE OF OR INABILITY TO USE THE SOFTWARE, EVEN IF GIRA MOBILE
            HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT
            SHALL GIRA MOBILE&apos;S TOTAL LIABILITY TO YOU EXCEED THE AMOUNT
            YOU PAID FOR THE SOFTWARE IN THE TWELVE MONTHS PRECEDING THE CLAIM.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            9. Technical Support
          </h2>
          <p>
            Gira Mobile has no obligation to provide technical support unless
            separately agreed to in writing. We may, at our sole discretion,
            provide updates, patches, or new versions of the Software, but we
            are under no obligation to do so.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            10. Termination
          </h2>
          <p>
            These Terms are effective until terminated. You may terminate this
            agreement at any time by deleting the Software and your account (if
            applicable) from all devices. These Terms will terminate
            automatically and without notice if you breach any provision herein.
            Upon termination, all licenses granted to you under these Terms
            immediately cease, and you must cease all use of the Software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            11. Changes to These Terms
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            indicate the date of the last update at the top of this page. Your
            continued use of the Software after changes are posted constitutes
            your acceptance of the revised Terms. If you do not agree to the
            changes, you must stop using the Software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            12. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the Canton of Zürich, Switzerland, without regard to
            conflict of law principles. Any disputes arising under or in
            connection with these Terms shall be subject to the exclusive
            jurisdiction of the courts of Zürich, Switzerland.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            13. Contact
          </h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:info@gira.me"
              className="text-[#1565C0] hover:text-[#0D47A1] underline underline-offset-2"
            >
              info@gira.me
            </a>
            .
          </p>
        </section>
      </div>
      </div>
    </div>
  );
}

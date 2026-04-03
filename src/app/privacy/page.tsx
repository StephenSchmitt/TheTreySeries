import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Trey Series website by Dr. Victoria Schmitt.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-ocean-800 mb-8"
          style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-ocean-500 mb-8">Last updated: April 2026</p>

        <div className="space-y-6 text-ocean-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              1. Introduction
            </h2>
            <p>
              The Trey Series (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects
              your privacy and is committed to protecting the personal information you share with us
              through this website. This Privacy Policy explains what information we collect, how we
              use it, and the choices you have regarding your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              2. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Contact Form Submissions:</strong> When you use our contact form, we
                collect your name, email address, inquiry type, and message content.
              </li>
              <li>
                <strong>Analytics Data:</strong> We may use analytics services to collect
                anonymized usage data such as page views, browser type, device type, and
                geographic region to help us improve the website experience.
              </li>
              <li>
                <strong>Cookies:</strong> This website may use cookies to enhance your browsing
                experience and remember your preferences. You can control cookie settings through
                your browser.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Respond to your inquiries and messages</li>
              <li>Improve our website content and user experience</li>
              <li>Understand how visitors interact with our site</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              4. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>With service providers who help us operate our website (e.g., hosting, analytics)</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              5. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              6. Children&rsquo;s Privacy
            </h2>
            <p>
              This website is designed to provide information about children&rsquo;s books and
              is intended for adults. We do not knowingly collect personal information from
              children under 13. If you believe a child has submitted personal information
              through our contact form, please contact us so we can promptly remove it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              7. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of any
              personal information we hold about you. To exercise these rights, please contact
              us through our{" "}
              <a href="/contact" className="text-teal-600 hover:text-teal-700 underline">
                Contact page
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              8. Cookies
            </h2>
            <p>
              Cookies are small files placed on your device that help us provide a better
              browsing experience. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent. If you choose to disable cookies, some
              portions of our website may not function as intended.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              10. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact Dr. Victoria Schmitt
              through our{" "}
              <a href="/contact" className="text-teal-600 hover:text-teal-700 underline">
                Contact page
              </a>.
            </p>
            <p className="mt-4 text-sm text-ocean-500">
              Website created and maintained by Lifestyle Creations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

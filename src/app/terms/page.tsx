import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for The Trey Series website by Dr. Victoria Schmitt.",
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-ocean-800 mb-8"
          style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
        >
          Terms of Use
        </h1>
        <p className="text-sm text-ocean-500 mb-8">Last updated: April 2026</p>

        <div className="prose-ocean space-y-6 text-ocean-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (&ldquo;The Trey Series&rdquo; at thetreyseries.com),
              you agree to be bound by these Terms of Use. If you do not agree with any part of
              these terms, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              2. Intellectual Property
            </h2>
            <p>
              All content on this website — including but not limited to text, images, illustrations,
              character designs, book covers, companion guide materials, logos, and branding — is the
              property of Dr. Victoria Schmitt and/or their respective rights holders. You may not
              reproduce, distribute, modify, or create derivative works from any content without
              prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              3. Use of Website
            </h2>
            <p>
              This website is provided for informational purposes — to share information about
              The Trey Series, companion guides, characters, and related content. You agree to
              use this site only for lawful purposes and in a manner that does not infringe upon
              or restrict the use and enjoyment of this site by others.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              4. External Links & Purchases
            </h2>
            <p>
              This website may contain links to third-party websites or platforms where books and
              companion guides are available for purchase. We are not responsible for the content,
              policies, or practices of third-party sites. Any purchases made through external links
              are subject to the terms and conditions of those platforms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              5. Disclaimer of Warranties
            </h2>
            <p>
              This website is provided &ldquo;as is&rdquo; without warranties of any kind, either
              express or implied. We make no guarantees about the accuracy, completeness, or
              reliability of any information on this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              6. Limitation of Liability
            </h2>
            <p>
              Dr. Victoria Schmitt and Lifestyle Creations shall not be held liable for any
              damages arising from the use of or inability to use this website, including but
              not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms of Use at any time. Changes will be
              posted on this page with an updated effective date. Your continued use of the
              website after changes are posted constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ocean-800 mt-8 mb-3" style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}>
              8. Contact
            </h2>
            <p>
              If you have questions about these Terms of Use, please contact us through our{" "}
              <a href="/contact" className="text-teal-600 hover:text-teal-700 underline">
                Contact page
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

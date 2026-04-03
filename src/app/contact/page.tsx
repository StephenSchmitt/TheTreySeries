import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dr. Victoria Schmitt about The Trey Series — for general questions, speaking engagements, school partnerships, and media inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 ocean-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.12),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 mb-6">
            Get in Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
          >
            Let&rsquo;s Connect
          </h1>
          <p className="mt-6 text-lg text-teal-100/80 leading-relaxed max-w-2xl mx-auto">
            Whether you&rsquo;re a parent, educator, counselor, or someone who believes in the power
            of stories — Dr. Victoria Schmitt would love to hear from you.
          </p>
        </div>
      </section>

      {/* ─── Contact Content ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <h2
                className="text-2xl font-bold text-ocean-800"
                style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
              >
                How Can We Help?
              </h2>
              <p className="mt-3 text-ocean-600 leading-relaxed">
                We welcome thoughtful inquiries about The Trey Series, partnerships, and
                opportunities to bring these stories into new spaces.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "General Questions",
                    description: "Questions about the books, companion guides, or the series.",
                    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                  {
                    title: "Speaking & Events",
                    description: "Invite Dr. Schmitt to speak at your school, conference, or community event.",
                    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
                  },
                  {
                    title: "School & Counselor Interest",
                    description: "Explore how The Trey Series can support your students, clients, or programs.",
                    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  },
                  {
                    title: "Media & Collaboration",
                    description: "Press inquiries, interviews, partnerships, and creative collaborations.",
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-teal-100 to-aqua-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ocean-800">{item.title}</h3>
                      <p className="text-sm text-ocean-600 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-teal-50/60 border border-teal-200/40">
                <p className="text-sm text-ocean-600">
                  <strong className="text-ocean-800">Email:</strong>{" "}
                  {/* Replace with real email */}
                  <a href="mailto:hello@thetreyseries.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                    hello@thetreyseries.com
                  </a>
                </p>
                <p className="text-xs text-ocean-500 mt-2">
                  Website created by Lifestyle Creations
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

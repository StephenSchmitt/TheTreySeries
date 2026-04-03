import type { Metadata } from "next";
import GuideCard from "@/components/GuideCard";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Companion Guides",
  description:
    "Companion guides for The Trey Series — practical resources for parents, caregivers, educators, and counselors supporting children through adoption, loss, and belonging.",
};

export default function GuidesPage() {
  const guideOne = guides[0];
  const futureGuides = guides.slice(1);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 ocean-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.15),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 mb-6">
            For Caregivers &amp; Educators
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
          >
            Companion Guides
          </h1>
          <p className="mt-6 text-lg text-teal-100/80 leading-relaxed max-w-2xl mx-auto">
            Each companion guide pairs with a storybook in The Trey Series, giving the
            adults in a child&rsquo;s life the language, tools, and confidence to turn
            reading into connection. Sold separately.
          </p>
        </div>
      </section>

      {/* ─── What Are Companion Guides ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="More Than a Book"
            title="What Is a Companion Guide?"
            subtitle="Companion guides are thoughtfully designed resources that extend each story into meaningful conversations, reflective moments, and family-building activities."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Guided Conversations",
                description:
                  "Chapter-by-chapter questions that help caregivers explore the story's themes with children in age-appropriate, emotionally safe ways.",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              },
              {
                title: "Emotional Validation",
                description:
                  "Language frameworks that help adults acknowledge children's feelings without rushing to fix them — modeling safety through presence.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Connection Activities",
                description:
                  "Hands-on prompts and activities that bring families closer — designed to be gentle, flexible, and adaptable to each child's needs.",
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Caregiver Support",
                description:
                  "Guidance for parents, foster caregivers, and adoptive families on supporting children through transitions with patience and love.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Educator Resources",
                description:
                  "Classroom-ready discussion guides and activities for teachers integrating social-emotional learning into their reading programs.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                title: "Counselor Tools",
                description:
                  "Therapeutic prompts and frameworks for counselors and social workers supporting children and families through adoption, grief, and attachment.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-100 to-aqua-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aqua-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold text-ocean-800"
                  style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ocean-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Guide One ─── */}
      <section className="py-16 md:py-24 ocean-gradient-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Available Now"
            title="Companion Guide: A New Beginning"
            subtitle="The first companion guide — designed to support caregivers and educators through the tender themes of Book One."
          />
          <GuideCard guide={guideOne} featured />
        </div>
      </section>

      {/* ─── Future Guides Grid ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Coming Soon"
            title="Future Companion Guides"
            subtitle="A companion guide for every book in the series — because every story deserves a conversation."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {futureGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title="Support the Children You Care For"
        subtitle="Companion guides give you the tools to turn a story into a bridge — connecting you with the child who needs to hear that they belong."
        primaryLabel="Get Companion Guide One"
        primaryHref={guideOne.purchaseUrl || "#"}
        secondaryLabel="Explore the Books"
        secondaryHref="/books"
      />
    </>
  );
}

import type { Metadata } from "next";
import BookCard from "@/components/BookCard";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore The Trey Series — a 10-book children's collection about adoption, belonging, and family. Book One, Trey: A New Beginning, is available now.",
};

export default function BooksPage() {
  const bookOne = books[0];
  const futureBooks = books.slice(1);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 ocean-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 mb-6">
            The Collection
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
          >
            The Trey Series Books
          </h1>
          <p className="mt-6 text-lg text-teal-100/80 leading-relaxed max-w-2xl mx-auto">
            A growing collection of 10 children&rsquo;s books that explore love, loss,
            belonging, and the courage it takes to call somewhere new &ldquo;home.&rdquo;
            Each book is sold separately.
          </p>
        </div>
      </section>

      {/* ─── Featured Book One ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Available Now"
            title="Trey: A New Beginning"
            subtitle="The story that started it all — a gentle ocean tale about a tiny octopus who loses everything and discovers that family can grow through love."
          />
          <BookCard book={bookOne} featured />
        </div>
      </section>

      {/* ─── All Books Grid ─── */}
      <section className="py-16 md:py-24 ocean-gradient-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Coming Soon"
            title="The Complete Series"
            subtitle="Nine more adventures await beneath the waves. Each book continues Trey's journey of growth, connection, and belonging."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {futureBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Companion Guide Callout ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 glow-ocean">
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua-600 mb-3 block">
              Sold Separately
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-ocean-800"
              style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
            >
              Each Book Has a Companion Guide
            </h2>
            <p className="mt-4 text-ocean-600 leading-relaxed max-w-xl mx-auto">
              Companion guides give parents, caregivers, educators, and counselors the tools
              they need to turn every reading into a meaningful conversation. Guided questions,
              reflective prompts, and connection-building activities included.
            </p>
            <a
              href="/guides"
              className="mt-6 inline-flex px-7 py-3 bg-gradient-to-r from-aqua-600 to-ocean-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              Explore Companion Guides
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title="Begin with Book One"
        subtitle="A gentle story about loss, love, and finding where you belong — perfect for families, classrooms, and quiet bedtime moments."
        primaryLabel="Get Trey: A New Beginning"
        primaryHref={bookOne.purchaseUrl || "#"}
        secondaryLabel="Meet the Characters"
        secondaryHref="/characters"
      />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FlipBook from "@/components/FlipBook";
import { getFlipbook, flipbooks } from "@/data/flipbooks";
import { books } from "@/data/books";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return flipbooks.map((fb) => ({ slug: fb.bookSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getFlipbook(slug);
  if (!config) return { title: "Book Not Found" };

  return {
    title: `Read: ${config.title}`,
    description: `Read a preview of ${config.title} from The Trey Series by Dr. Victoria Schmitt. Turn the pages of this gentle ocean story about love, belonging, and new beginnings.`,
  };
}

export default async function ReadPage({ params }: PageProps) {
  const { slug } = await params;
  const config = getFlipbook(slug);
  if (!config) notFound();

  const book = books.find((b) => b.slug === slug);

  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 ocean-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.12),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          {config.subtitle && (
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 mb-4">
              {config.subtitle}
            </span>
          )}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
          >
            {config.title}
          </h1>
          <p className="mt-4 text-base text-teal-100/80 leading-relaxed max-w-xl mx-auto">
            Turn the pages and explore a preview of this gentle ocean story about
            love, belonging, and new beginnings.
          </p>
        </div>
      </section>

      {/* ─── Flipbook ─── */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FlipBook pages={config.pages} title={config.title} />
        </div>
      </section>

      {/* ─── Below the book ─── */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-10 glow-teal">
            <h2
              className="text-xl md:text-2xl font-bold text-ocean-800"
              style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
            >
              Want to read the full story?
            </h2>
            <p className="mt-3 text-ocean-600 leading-relaxed">
              This is just a preview. Get the complete book to share with your
              family, classroom, or the children in your care.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {book?.purchaseUrl && (
                <Link
                  href={book.purchaseUrl}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-aqua-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Get the Full Book
                </Link>
              )}
              <Link
                href="/books"
                className="px-6 py-3 border-2 border-teal-300 text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-colors"
              >
                View All Books
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

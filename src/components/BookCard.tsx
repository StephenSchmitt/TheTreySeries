import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  featured?: boolean;
  /** Hide the HTML title/author overlay on the cover image */
  hideCoverText?: boolean;
}

function CoverOverlay({ title, author }: { title: string; author: string }) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
      {/* Top gradient + title */}
      <div className="relative flex flex-col items-center" style={{ paddingTop: "6%", paddingBottom: "4%" }}>
        {/* Soft vignette gradient — taller coverage, gentle falloff */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,30,50,0.52) 0%, rgba(15,30,50,0.38) 35%, rgba(15,30,50,0.14) 70%, transparent 100%)",
          }}
        />
        <div className="relative px-[10%] text-center" style={{ paddingTop: "4%" }}>
          <h4
            className="font-bold leading-[1.2] tracking-[0.02em]"
            style={{
              fontFamily: "var(--font-cover)",
              fontSize: "clamp(1.15rem, 5.5cqi, 2.2rem)",
              color: "#fffdf8",
              textShadow:
                "0 2px 12px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.35), 0 0 20px rgba(0,0,0,0.15)",
              wordSpacing: "0.04em",
            }}
          >
            {title}
          </h4>
        </div>
      </div>

      {/* Bottom gradient + author */}
      <div className="relative flex flex-col items-center" style={{ paddingBottom: "7%", paddingTop: "4%" }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,30,50,0.45) 0%, rgba(15,30,50,0.25) 40%, rgba(15,30,50,0.06) 75%, transparent 100%)",
          }}
        />
        <div className="relative px-[10%] text-center">
          <p
            className="font-semibold tracking-[0.06em]"
            style={{
              fontFamily: "var(--font-cover)",
              fontSize: "clamp(0.5rem, 2.5cqi, 0.9rem)",
              color: "rgba(255,253,248,0.92)",
              textShadow:
                "0 1px 8px rgba(0,0,0,0.45), 0 0 3px rgba(0,0,0,0.25)",
              letterSpacing: "0.08em",
            }}
          >
            {author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BookCard({ book, featured = false, hideCoverText = false }: BookCardProps) {
  const isAvailable = book.status === "available";
  const showOverlay = !hideCoverText && isAvailable && book.id === 1;

  if (featured) {
    return (
      <div className="glass-card rounded-3xl overflow-hidden glow-teal">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Cover image */}
          <div className="relative aspect-[3/4] md:aspect-auto bg-gradient-to-br from-teal-100 to-ocean-100 flex items-center justify-center p-8">
            <div
              className="relative w-full max-w-[280px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl"
              style={{ containerType: "inline-size" }}
            >
              <Image
                src={book.coverImage}
                alt={`${book.title} cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 280px"
                priority
              />
              {showOverlay && (
                <CoverOverlay title="Trey: A New Beginning" author="Dr. Victoria Schmitt" />
              )}
            </div>
            {isAvailable && (
              <span className="absolute top-6 left-6 px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full shadow-lg">
                Available Now
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            {book.subtitle && (
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-2">
                {book.subtitle}
              </span>
            )}
            <h3
              className="text-2xl md:text-3xl font-bold text-ocean-800 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {book.title}
            </h3>
            <p className="mt-4 text-ocean-600 leading-relaxed">
              {book.description || book.summary}
            </p>
            {book.themes.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {book.themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full border border-teal-200/60"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {book.purchaseUrl && (
                <Link
                  href={book.purchaseUrl}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-aqua-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Get This Book
                </Link>
              )}
              <Link
                href={`/books#book-${book.id}`}
                className="px-6 py-3 border-2 border-teal-300 text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id={`book-${book.id}`}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group ${
        !isAvailable ? "opacity-75" : "glow-teal"
      }`}
    >
      {/* Cover */}
      <div className="relative aspect-[2/3] bg-gradient-to-br from-teal-50 to-ocean-50 flex items-center justify-center p-6">
        <div
          className="relative w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{ containerType: "inline-size" }}
        >
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 280px"
          />
          {showOverlay && (
            <CoverOverlay title="Trey: A New Beginning" author="Dr. Victoria Schmitt" />
          )}
        </div>
        <span
          className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full shadow ${
            isAvailable
              ? "bg-teal-500 text-white"
              : "bg-white/80 text-ocean-600"
          }`}
        >
          {isAvailable ? "Available" : "Coming Soon"}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        {book.subtitle && (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-teal-500">
            {book.subtitle}
          </span>
        )}
        <h3
          className="text-lg font-bold text-ocean-800 mt-1 leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {book.title}
        </h3>
        <p className="mt-2 text-sm text-ocean-600 leading-relaxed line-clamp-3">
          {book.summary}
        </p>
        {isAvailable && book.purchaseUrl && (
          <Link
            href={book.purchaseUrl}
            className="mt-4 inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            Get This Book
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

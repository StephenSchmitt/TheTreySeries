import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export default function BookCard({ book, featured = false }: BookCardProps) {
  const isAvailable = book.status === "available";

  if (featured) {
    return (
      <div className="glass-card rounded-3xl overflow-hidden glow-teal">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Cover image */}
          <div className="relative bg-gradient-to-br from-teal-100 to-ocean-100 flex items-center justify-center p-8">
            <div
              className="book-cover-container relative shadow-2xl"
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
              {book.readUrl && (
                <Link
                  href={book.readUrl}
                  className="px-6 py-3 bg-gradient-to-r from-ocean-600 to-aqua-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Read Preview
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
      <div className="flex flex-col sm:flex-row">
        {/* Cover */}
        <div className="relative bg-gradient-to-br from-teal-50 to-ocean-50 flex items-center justify-center p-5 shrink-0">
          <div
            className="book-cover-container relative shadow-lg"
            style={{ containerType: "inline-size" }}
          >
            <Image
              src={book.coverImage}
              alt={`${book.title} cover`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="280px"
            />
          </div>
          <span
            className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full shadow ${
              isAvailable
                ? "bg-teal-500 text-white"
                : "bg-white/80 text-ocean-600"
            }`}
          >
            {isAvailable ? "Available" : "Coming Soon"}
          </span>
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col justify-center">
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
          {isAvailable && (
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              {book.purchaseUrl && (
                <Link
                  href={book.purchaseUrl}
                  className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Get This Book
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
              {book.readUrl && (
                <Link
                  href={book.readUrl}
                  className="inline-flex items-center text-sm font-semibold text-ocean-600 hover:text-ocean-700 transition-colors"
                >
                  Read Preview
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

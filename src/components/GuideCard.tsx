import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/data/guides";

interface GuideCardProps {
  guide: Guide;
  featured?: boolean;
}

export default function GuideCard({ guide, featured = false }: GuideCardProps) {
  const isAvailable = guide.status === "available";

  if (featured) {
    return (
      <div className="glass-card rounded-3xl overflow-hidden glow-ocean">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[3/4] md:aspect-auto bg-gradient-to-br from-ocean-100 to-aqua-100 flex items-center justify-center p-8">
            <div className="relative w-full max-w-[280px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={guide.coverImage}
                alt={`${guide.title} cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 280px"
                priority
              />
            </div>
            {isAvailable && (
              <span className="absolute top-6 left-6 px-3 py-1 bg-aqua-600 text-white text-xs font-semibold rounded-full shadow-lg">
                Available Now
              </span>
            )}
          </div>

          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            {guide.subtitle && (
              <span className="text-xs font-semibold uppercase tracking-widest text-aqua-600 mb-2">
                {guide.subtitle}
              </span>
            )}
            <h3
              className="text-2xl md:text-3xl font-bold text-ocean-800 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {guide.title}
            </h3>
            <p className="mt-4 text-ocean-600 leading-relaxed">
              {guide.description || guide.summary}
            </p>

            {guide.features.length > 0 && (
              <ul className="mt-5 space-y-2">
                {guide.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ocean-600">
                    <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {guide.audiences.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {guide.audiences.map((audience) => (
                  <span
                    key={audience}
                    className="px-3 py-1 bg-ocean-50 text-ocean-700 text-xs font-medium rounded-full border border-ocean-200/60"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {guide.purchaseUrl && (
                <Link
                  href={guide.purchaseUrl}
                  className="px-6 py-3 bg-gradient-to-r from-aqua-600 to-ocean-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Get This Guide
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group ${
        !isAvailable ? "opacity-75" : "glow-ocean"
      }`}
    >
      <div className="relative aspect-[2/3] bg-gradient-to-br from-ocean-50 to-aqua-50 flex items-center justify-center p-6">
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src={guide.coverImage}
            alt={`${guide.title} cover`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 280px"
          />
        </div>
        <span
          className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full shadow ${
            isAvailable
              ? "bg-aqua-600 text-white"
              : "bg-white/80 text-ocean-600"
          }`}
        >
          {isAvailable ? "Available" : "Coming Soon"}
        </span>
      </div>

      <div className="p-5">
        {guide.subtitle && (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-aqua-600">
            {guide.subtitle}
          </span>
        )}
        <h3
          className="text-lg font-bold text-ocean-800 mt-1 leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {guide.title}
        </h3>
        <p className="mt-2 text-sm text-ocean-600 leading-relaxed line-clamp-3">
          {guide.summary}
        </p>
        {isAvailable && guide.purchaseUrl && (
          <Link
            href={guide.purchaseUrl}
            className="mt-4 inline-flex items-center text-sm font-semibold text-aqua-700 hover:text-aqua-800 transition-colors"
          >
            Get This Guide
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

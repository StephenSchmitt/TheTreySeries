import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 ocean-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_70%)]" />

      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-3 h-3 rounded-full bg-white/10 top-1/4 left-1/4 animate-float" />
        <div className="absolute w-2 h-2 rounded-full bg-white/8 top-1/3 right-1/3 animate-float-slow" />
        <div className="absolute w-4 h-4 rounded-full bg-white/5 bottom-1/4 left-1/3 animate-float-delay" />
        <div className="absolute w-2 h-2 rounded-full bg-white/10 bottom-1/3 right-1/4 animate-float" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h2>
        <p className="mt-4 text-lg text-teal-100/80 leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={primaryHref}
            className="px-8 py-3.5 bg-white text-ocean-800 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

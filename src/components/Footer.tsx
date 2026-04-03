import Link from "next/link";
import { footerNav } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const primaryLinks = footerNav.filter(
    (item) => !["/terms", "/privacy"].includes(item.href)
  );
  const legalLinks = footerNav.filter((item) =>
    ["/terms", "/privacy"].includes(item.href)
  );

  return (
    <footer className="relative mt-auto overflow-hidden">
      <div className="absolute inset-0 ocean-gradient opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Decorative wave top */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full h-12 md:h-20 -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="currentColor"
            className="text-ocean-900/90"
          />
        </svg>
      </div>

      <div className="relative z-10 bg-ocean-900/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-aqua-500 text-white font-bold text-lg shadow-md">
                  T
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    The Trey Series
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-teal-300 leading-none">
                    By Dr. Victoria Schmitt
                  </span>
                </div>
              </Link>
              <p className="mt-4 text-sm text-teal-200/70 max-w-xs leading-relaxed">
                Stories of love, belonging, and new beginnings — helping families
                grow closer, one story at a time.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">
                Explore
              </h3>
              <ul className="space-y-2">
                {primaryLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-teal-100/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Credit */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-teal-100/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-teal-200/50">
                  For inquiries, contact{" "}
                  <Link href="/contact" className="text-teal-300/70 hover:text-teal-200 transition-colors">
                    Dr. Victoria Schmitt
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-teal-200/50">
              &copy; {currentYear} The Trey Series by Dr. Victoria Schmitt. All
              rights reserved.
            </p>
            <p className="text-xs text-teal-200/40">
              Website by{" "}
              <span className="text-teal-300/60 font-medium">
                Lifestyle Creations
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

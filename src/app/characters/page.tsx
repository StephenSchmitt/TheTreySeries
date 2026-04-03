import type { Metadata } from "next";
import Link from "next/link";
import CharacterCard from "@/components/CharacterCard";
import CTASection from "@/components/CTASection";
import { characters } from "@/data/characters";

export const metadata: Metadata = {
  title: "Meet the Characters",
  description:
    "Meet Trey, Raya, Ray, Cray, and Marina — the ocean characters of The Trey Series by Dr. Victoria Schmitt. Each character teaches children about love, safety, belonging, and family.",
};

export default function CharactersPage() {
  const mainCharacter = characters.find((c) => c.isMainCharacter);
  const supportingCharacters = characters.filter((c) => !c.isMainCharacter);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 ocean-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_60%)]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-3 h-3 rounded-full bg-white/8 top-1/4 left-[15%] animate-float" />
          <div className="absolute w-4 h-4 rounded-full bg-white/5 bottom-1/3 right-[20%] animate-float-slow" />
          <div className="absolute w-2 h-2 rounded-full bg-teal-300/10 top-[40%] right-[10%] animate-float-delay" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 mb-6">
            The Ocean Family
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
          >
            Meet the Characters
          </h1>
          <p className="mt-6 text-lg text-teal-100/80 leading-relaxed max-w-2xl mx-auto">
            Every character in The Trey Series carries a purpose and a heart. Together, they
            show children what it means to be cared for, to care for others, and to find
            where you belong.
          </p>
        </div>
      </section>

      {/* ─── Main Character ─── */}
      {mainCharacter && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CharacterCard character={mainCharacter} />
          </div>
        </section>
      )}

      {/* ─── Supporting Characters ─── */}
      <section className="py-16 md:py-24 ocean-gradient-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3 block">
              The Ocean Family
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-ocean-800"
              style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
            >
              Friends Who Make the Journey Possible
            </h2>
            <p className="mt-4 text-ocean-600 leading-relaxed">
              Each character brings something unique to Trey&rsquo;s world — kindness, strength,
              perspective, and the quiet assurance that no one has to face the ocean alone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {supportingCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3D Collectibles Teaser ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 glow-teal">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-100 to-aqua-100 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-ocean-800"
              style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
            >
              Coming Soon: Collectible Figures
            </h2>
            <p className="mt-4 text-ocean-600 leading-relaxed max-w-xl mx-auto">
              Your favorite characters are coming to life beyond the pages. We&rsquo;re developing
              beautifully crafted 3D printed collectible figures of Trey and his ocean family —
              perfect for play, display, and keeping these characters close.
            </p>
            <p className="mt-6 text-sm text-teal-600 font-medium">
              Stay connected for updates on availability and pre-orders.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex px-6 py-3 bg-gradient-to-r from-teal-500 to-aqua-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              Get Notified
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title="Read Their Stories"
        subtitle="Discover the adventures, challenges, and tender moments that bring Trey and his friends to life."
        primaryLabel="Explore the Books"
        primaryHref="/books"
        secondaryLabel="View Companion Guides"
        secondaryHref="/guides"
      />
    </>
  );
}

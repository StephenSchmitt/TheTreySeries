import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import BookCard from "@/components/BookCard";
import CharacterCard from "@/components/CharacterCard";
import CTASection from "@/components/CTASection";
import { books } from "@/data/books";
import { guides } from "@/data/guides";
import { characters } from "@/data/characters";
import { videos } from "@/data/videos";

export default function HomePage() {
  const bookOne = books[0];
  const guideOne = guides[0];
  const featuredVideo = videos.find((v) => v.isFeatured);
  const characterSpotlight = characters.slice(0, 3);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 ocean-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_60%)]" />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-4 h-4 rounded-full bg-white/8 top-1/4 left-[10%] animate-float" />
          <div className="absolute w-3 h-3 rounded-full bg-teal-300/10 top-[45%] right-[15%] animate-float-slow" />
          <div className="absolute w-5 h-5 rounded-full bg-white/5 bottom-1/4 left-[30%] animate-float-delay" />
          <div className="absolute w-2 h-2 rounded-full bg-aqua-300/10 top-[20%] right-[25%] animate-float" />
          <div className="absolute w-3 h-3 rounded-full bg-white/6 bottom-[35%] right-[10%] animate-float-slow" />
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-16 md:h-24" preserveAspectRatio="none">
            <path d="M0 60C360 120 720 0 1080 60C1260 90 1380 100 1440 80V120H0V60Z" fill="white" fillOpacity="0.06" />
            <path d="M0 80C360 120 720 20 1080 80C1260 100 1380 110 1440 100V120H0V80Z" className="fill-teal-50" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 mb-6">
                A Children&rsquo;s Book Series by Dr. Victoria Schmitt
              </span>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
                style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
              >
                Stories of Love, Belonging &amp;{" "}
                <span className="text-gradient-ocean bg-gradient-to-r from-teal-300 via-aqua-300 to-teal-200 bg-clip-text text-transparent">
                  New Beginnings
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-teal-100/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Gentle ocean stories that help children and families explore adoption,
                healing, and the many ways love builds a home.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/books"
                  className="px-7 py-3.5 bg-white text-ocean-800 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Explore Book One
                </Link>
                <Link
                  href="/characters"
                  className="px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Meet the Characters
                </Link>
                <Link
                  href="/guides"
                  className="px-7 py-3.5 border-2 border-white/20 text-teal-200 font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  View Companion Guides
                </Link>
              </div>
            </div>

            {/* Hero image area */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 md:w-96 animate-float-slow">
                {/* Replace with hero image of Trey or Book One cover */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <Image
                    src="/images/heroes/trey-hero.png"
                    alt="Trey — a loving little octopus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 384px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/30 to-transparent" />
                </div>
                {/* Decorative glow ring */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-400/20 to-aqua-400/10 -z-10 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Book ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Featured Book"
            title="Trey: A New Beginning"
            subtitle="The first story in a 10-book series that explores love, loss, and the courage it takes to belong again."
          />
          <BookCard book={bookOne} featured />
        </div>
      </section>

      {/* ─── Companion Guide ─── */}
      <section className="py-16 md:py-24 ocean-gradient-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="For Caregivers & Educators"
            title="Companion Guides"
            subtitle="Each book has a separate companion guide designed to support parents, caregivers, teachers, and counselors through meaningful conversations with children."
          />
          <div className="glass-card rounded-3xl overflow-hidden glow-ocean">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[3/4] md:aspect-auto bg-gradient-to-br from-ocean-100 to-aqua-100 flex items-center justify-center p-8">
                <div className="relative w-full max-w-[260px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={guideOne.coverImage}
                    alt={`${guideOne.title} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 260px"
                  />
                </div>
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-aqua-600 mb-2">
                  Sold Separately
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-ocean-800 leading-tight"
                  style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
                >
                  {guideOne.title}
                </h3>
                <p className="mt-4 text-ocean-600 leading-relaxed">
                  {guideOne.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {guideOne.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ocean-600">
                      <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/guides"
                    className="px-6 py-3 bg-gradient-to-r from-aqua-600 to-ocean-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                  >
                    Explore Companion Guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Series Collection ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="The Complete Collection"
            title="A 10-Book Journey"
            subtitle="Each story in The Trey Series explores a new chapter of growth, connection, and belonging beneath the waves."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className={`relative rounded-2xl overflow-hidden aspect-[2/3] transition-all duration-300 group ${
                  book.status === "available"
                    ? "shadow-lg hover:shadow-xl cursor-pointer"
                    : "opacity-60"
                }`}
                style={{ containerType: "inline-size" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-ocean-100" />
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                />
                {/* Cover text overlay for Book One */}
                {book.id === 1 && (
                  <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
                    <div className="relative pt-[10%] px-[6%]">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-transparent" />
                      <p
                        className="relative text-center text-white font-bold leading-[1.15] drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
                        style={{
                          fontFamily: "var(--font-cover)",
                          fontSize: "clamp(0.65rem, 4.5cqi, 1.3rem)",
                          textShadow: "0 1px 6px rgba(0,0,0,0.35)",
                        }}
                      >
                        Trey: A New Beginning
                      </p>
                    </div>
                    <div className="relative pb-[22%] px-[6%]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/8 to-transparent" />
                      <p
                        className="relative text-center text-white/90 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
                        style={{
                          fontFamily: "var(--font-cover)",
                          fontSize: "clamp(0.4rem, 2.2cqi, 0.65rem)",
                          fontStyle: "italic",
                          textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        Dr. Victoria Schmitt
                      </p>
                    </div>
                  </div>
                )}
                {book.id !== 1 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent" />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-200">
                    {book.subtitle}
                  </span>
                  <p className="text-sm font-bold text-white leading-snug mt-0.5">
                    {book.status === "available" ? book.title.replace("Trey: ", "") : "Coming Soon"}
                  </p>
                </div>
                {book.status === "available" && (
                  <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50 z-20" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/books"
              className="inline-flex items-center px-6 py-3 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
            >
              View All Books
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Character Spotlight ─── */}
      <section className="py-16 md:py-24 ocean-gradient-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Meet the Characters"
            title="Friends Beneath the Waves"
            subtitle="Every character in The Trey Series carries a heart full of purpose. Get to know the ocean family that helps Trey find where he belongs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characterSpotlight.map((character) => (
              <div
                key={character.id}
                className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative bg-gradient-to-br from-teal-50 to-aqua-50 flex items-center justify-center p-6 min-h-[240px]">
                  <div className="relative w-40 aspect-[3/4]">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                      sizes="160px"
                    />
                  </div>
                  {character.isMainCharacter && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-teal-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                      Main Character
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3
                    className="text-xl font-bold text-ocean-800"
                    style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
                  >
                    {character.name}
                  </h3>
                  <p className="text-sm text-teal-600 font-medium">{character.role}</p>
                  <p className="mt-2 text-sm text-ocean-600 leading-relaxed line-clamp-3">
                    {character.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/characters"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-500 to-aqua-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              Meet All Characters
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Video Preview ─── */}
      {featuredVideo && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Watch"
              title="Dive Into the Story"
              subtitle="See The Trey Series come to life through video. Trailers, read-alongs, and more."
            />
            <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden glow-teal">
              <div className="relative aspect-video bg-ocean-900">
                <iframe
                  src={featuredVideo.embedUrl}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                {featuredVideo.embedUrl.includes("VIDEO_ID_HERE") && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ocean-800 to-ocean-900">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-sm font-medium">Series trailer coming soon</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3
                  className="text-xl font-bold text-ocean-800"
                  style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
                >
                  {featuredVideo.title}
                </h3>
                <p className="mt-2 text-ocean-600">{featuredVideo.description}</p>
                <Link
                  href="/video"
                  className="mt-4 inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  View All Videos
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── About Preview ─── */}
      <section className="py-16 md:py-24 ocean-gradient-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3 block">
                About the Author
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-ocean-800 leading-tight"
                style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
              >
                Dr. Victoria Schmitt
              </h2>
              <p className="mt-4 text-ocean-600 leading-relaxed">
                Dr. Victoria Schmitt is the creator of The Trey Series, a growing collection of
                children&rsquo;s books that explore the tender realities of adoption, loss, and family
                formed through love. With a background rooted in care and connection, Dr. Schmitt
                writes for the children who need to know they belong — and for the adults who walk
                beside them.
              </p>
              <p className="mt-4 text-ocean-600 leading-relaxed">
                Each story is crafted with emotional intelligence, warmth, and a deep respect for
                the experiences of families navigating change. The companion guides extend that care,
                giving caregivers, educators, and counselors practical tools for meaningful conversations.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                Read the Full Story
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 md:w-80 aspect-square rounded-3xl overflow-hidden shadow-xl">
                {/* Replace with author photo */}
                <Image
                  src="/images/heroes/author.jpg"
                  alt="Dr. Victoria Schmitt"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust / Audience ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Who These Stories Are For"
            title="Written With Care, For Everyone Who Cares"
            subtitle="The Trey Series supports the adults and communities that wrap around children during life's most important moments."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Families",
                description:
                  "For parents and children reading together — building bonds through stories that reflect their own journey of love and belonging.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                title: "Caregivers",
                description:
                  "For foster parents, adoptive families, and kinship caregivers who show up with love every day — even when the path is uncertain.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Educators",
                description:
                  "For teachers and school counselors who create safe spaces where every child feels seen, heard, and valued.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                title: "Counselors",
                description:
                  "For therapists, social workers, and support professionals who guide families through transitions with compassion and skill.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
            ].map((audience) => (
              <div
                key={audience.title}
                className="glass-card rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-teal-100 to-aqua-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={audience.icon} />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold text-ocean-800"
                  style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
                >
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm text-ocean-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title="Begin the Journey"
        subtitle="Discover a story that meets children where they are — and walks beside the adults who love them."
        primaryLabel="Explore Book One"
        primaryHref="/books"
        secondaryLabel="View Companion Guides"
        secondaryHref="/guides"
      />
    </>
  );
}

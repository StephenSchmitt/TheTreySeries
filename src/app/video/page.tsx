import type { Metadata } from "next";
import VideoCard from "@/components/VideoCard";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Video",
  description:
    "Watch trailers, read-alongs, and behind-the-scenes videos from The Trey Series by Dr. Victoria Schmitt.",
};

export default function VideoPage() {
  const featuredVideo = videos.find((v) => v.isFeatured);
  const otherVideos = videos.filter((v) => !v.isFeatured);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 ocean-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 mb-6">
            Watch
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
          >
            Video Gallery
          </h1>
          <p className="mt-6 text-lg text-teal-100/80 leading-relaxed max-w-2xl mx-auto">
            Watch The Trey Series come to life. Explore trailers, read-alongs, and glimpses
            into the world beneath the waves.
          </p>
        </div>
      </section>

      {/* ─── Featured Video ─── */}
      {featuredVideo && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Featured"
              title={featuredVideo.title}
              subtitle={featuredVideo.description}
            />
            <VideoCard video={featuredVideo} featured />
          </div>
        </section>
      )}

      {/* ─── More Videos ─── */}
      {otherVideos.length > 0 && (
        <section className="py-16 md:py-24 ocean-gradient-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="More Videos"
              title="Explore the Collection"
              subtitle="Trailers, read-alongs, and more from The Trey Series."
            />
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {otherVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Placeholder Note ─── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="glass-card rounded-2xl p-8 glow-ocean">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-ocean-100 to-aqua-100 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3
              className="text-xl font-bold text-ocean-800"
              style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
            >
              More Videos Coming Soon
            </h3>
            <p className="mt-3 text-ocean-600 leading-relaxed">
              We&rsquo;re creating beautiful new video content for The Trey Series — including
              animated trailers, author read-alongs, and behind-the-scenes looks at the world of Trey.
              Check back soon or follow along for updates.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title="Read the Story Behind the Video"
        subtitle="Every video starts with a story. Explore the books that bring Trey and his ocean family to life."
        primaryLabel="Explore the Books"
        primaryHref="/books"
        secondaryLabel="Meet the Characters"
        secondaryHref="/characters"
      />
    </>
  );
}

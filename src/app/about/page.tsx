import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Trey Series by Dr. Victoria Schmitt — children's books about adoption, belonging, and family healing. Discover the mission, themes, and the heart behind the stories.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 ocean-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 mb-6">
            About the Series
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
          >
            Where Every Story Begins with Heart
          </h1>
          <p className="mt-6 text-lg text-teal-100/80 leading-relaxed max-w-2xl mx-auto">
            The Trey Series was born from a belief that every child deserves to see themselves
            in a story — and every caregiver deserves a hand to hold along the way.
          </p>
        </div>
      </section>

      {/* ─── About the Series ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader
                tag="The Trey Series"
                title="Stories That Heal, Connect, and Grow"
                centered={false}
              />
              <div className="space-y-4 text-ocean-600 leading-relaxed -mt-6">
                <p>
                  The Trey Series is a 10-book collection of children&rsquo;s stories set beneath
                  the ocean waves, where a tiny octopus named Trey and his friends navigate the
                  big, tender feelings that come with change, loss, and new beginnings.
                </p>
                <p>
                  Each story is carefully crafted to meet children where they are — honoring their
                  grief, celebrating their courage, and showing them that love doesn&rsquo;t replace
                  what was lost. It grows around it.
                </p>
                <p>
                  These are not just books for children. They are bridges between children and the
                  adults who care for them. Every story opens a door for conversation, reflection,
                  and connection — the kind that builds trust and deepens belonging.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-xl">
                {/* Replace with thematic series artwork */}
                <Image
                  src="/images/heroes/series-art.jpg"
                  alt="The Trey Series — ocean world"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About the Author ─── */}
      <section className="py-16 md:py-24 ocean-gradient-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative w-72 md:w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
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
            <div className="order-1 md:order-2">
              <SectionHeader
                tag="The Author"
                title="Dr. Victoria Schmitt"
                centered={false}
              />
              <div className="space-y-4 text-ocean-600 leading-relaxed -mt-6">
                <p>
                  Dr. Victoria Schmitt is an author, advocate, and champion for children navigating
                  the complexities of family change. Her work is grounded in a deep understanding of
                  what children need to feel safe, seen, and held — even when their world is shifting.
                </p>
                <p>
                  Through The Trey Series, Dr. Schmitt brings together the art of storytelling with
                  the science of emotional safety. Every book is designed not just to be read, but to
                  be felt — by the child curled up listening and the caregiver reading aloud.
                </p>
                <p>
                  Her companion guides extend this work into practical territory, providing parents,
                  teachers, counselors, and social workers with language frameworks, reflection
                  prompts, and activities that prioritize connection over correction.
                </p>
                <p>
                  Dr. Schmitt believes that the most powerful thing we can give a child is the
                  knowledge that they belong — and these stories are her way of making sure every
                  child hears that message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our Mission"
            title="Why These Stories Matter"
            subtitle="Children don't just read stories — they live inside them. The right book at the right moment can change how a child understands their own story."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[
              {
                title: "Honoring Grief & Loss",
                description:
                  "These stories acknowledge that loss is real and love doesn't ask children to forget. Healing begins when grief is held, not hidden.",
              },
              {
                title: "Celebrating Adoption",
                description:
                  "Families are formed in many ways. These stories celebrate the courage, love, and beauty of adoption without minimizing its complexity.",
              },
              {
                title: "Emotional Safety",
                description:
                  "Every child deserves to feel safe — physically, emotionally, and relationally. These books model what emotional safety looks and feels like.",
              },
              {
                title: "Belonging & Identity",
                description:
                  "When a child knows they belong, everything changes. These stories help children see that belonging is not earned — it is given freely through love.",
              },
              {
                title: "Connection Over Correction",
                description:
                  "The companion guides teach caregivers to lead with presence, patience, and validation — because children grow best when they feel connected.",
              },
              {
                title: "Supporting the Whole Family",
                description:
                  "These books are for everyone who cares for children — parents, foster families, educators, counselors, and communities building safe spaces together.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-aqua-100 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-teal-500" />
                </div>
                <h3
                  className="text-lg font-bold text-ocean-800"
                  style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ocean-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lifestyle Creations Credit ─── */}
      <section className="py-12 md:py-16 border-t border-teal-100">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm text-ocean-500">
            The Trey Series website and digital platform are created and maintained by{" "}
            <span className="font-semibold text-ocean-700">Lifestyle Creations</span>, supporting
            Dr. Victoria Schmitt&rsquo;s vision of bringing healing stories to families everywhere.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title="Start Reading Together"
        subtitle="Every great journey begins with a single story. Discover Trey: A New Beginning and open the door to conversations that matter."
        primaryLabel="Explore the Books"
        primaryHref="/books"
        secondaryLabel="Meet the Characters"
        secondaryHref="/characters"
      />
    </>
  );
}

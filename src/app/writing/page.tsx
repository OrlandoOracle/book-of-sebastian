import Link from "next/link";
import { Metadata } from "next";
import { publishedPosts } from "@/content/posts";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Writing | The Book of Sebastian",
  description:
    "Short essays from the rebuild — the survival, the stage, the doorway.",
  openGraph: {
    title: "Writing | The Book of Sebastian",
    description:
      "Short essays from the rebuild — the survival, the stage, the doorway.",
    url: "https://bookofsebastian.com/writing",
    siteName: "The Book of Sebastian",
    type: "website",
  },
  alternates: { canonical: "https://bookofsebastian.com/writing" },
};

export default function WritingIndex() {
  return (
    <div className="w-full">
      <section className="sec-hero">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Writing</p>
          <h1 className="font-title text-5xl md:text-7xl font-bold tracking-tight">
            Essays
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-ink-soft">
            Short pieces from the rebuild — the survival, the stage, the
            doorway.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="mx-auto max-w-2xl space-y-4">
          {publishedPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/writing/${p.slug}`}
              className="oracle-card hover-lift block p-7 text-left"
            >
              <p className="eyebrow mb-2">{p.series}</p>
              <h2 className="font-title text-2xl font-semibold text-left">
                {p.title}
              </h2>
              <p className="mt-2 text-left font-serif text-ink-soft">
                {p.excerpt}
              </p>
            </Link>
          ))}

          <p className="pt-4 text-center font-serif italic text-ink-faint">
            More essays as they&apos;re written.
          </p>

          <div className="pt-6 text-center">
            <CTAButton
              href="https://sebastiangerhardt.substack.com/subscribe"
              variant="primary"
              external
              utmCampaign="writing_index"
            >
              Get New Essays by Email
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

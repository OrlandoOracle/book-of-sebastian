import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Sebastian",
  description:
    "The memoir of a magician and brain cancer survivor — the doorway between the life that ended and the life that came after. New chapters as the work is finished.",
  openGraph: {
    title: "The Book of Sebastian",
    description:
      "The doorway between the life that ended and the life that came after.",
    url: "https://bookofsebastian.com",
    siteName: "The Book of Sebastian",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Book of Sebastian",
    description:
      "The doorway between the life that ended and the life that came after.",
  },
  alternates: { canonical: "https://bookofsebastian.com" },
  robots: { index: true, follow: true },
};

const GALLERY = [
  {
    src: "/photos/perform.jpg",
    alt: "Sebastian mid-performance, telling a story",
    caption: "On stage",
  },
  {
    src: "/photos/portrait-coin.jpg",
    alt: "Sebastian holding a coin, direct gaze",
    caption: "The work in the hands",
  },
  {
    src: "/photos/two-shadows.jpg",
    alt: "Sebastian with two shadows — one holding a martini, one holding cards",
    caption: "Two worlds",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Cinematic hero */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "88vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/photos/hero-library.jpg"
          alt="Sebastian in a dark library, holding his own head, a book titled Art and Magic where his face should be"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,10,15,0.45) 0%, rgba(10,10,15,0.25) 32%, rgba(10,10,15,0.78) 78%, #0a0a0f 100%)",
          }}
        />
        <div className="reveal" style={{ position: "relative", zIndex: 1 }}>
          <div className="mx-auto max-w-3xl px-6 pb-16 text-center md:pb-24">
            <p className="eyebrow mb-7">A Testament in Two Worlds</p>
            <h1 className="font-title text-6xl md:text-8xl font-bold leading-[1.04] tracking-tight">
              The Book of
              <br />
              <span className="gold-text">Sebastian</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl font-serif text-xl md:text-2xl italic leading-relaxed text-ink">
              A magician. A brain cancer survivor. The doorway between the life
              that ended and the life that came after.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/chapters" variant="primary">
                Start Reading
              </CTAButton>
              <CTAButton
                href="https://sebastiangerhardt.substack.com/subscribe"
                variant="secondary"
                external
                utmCampaign="hero_subscribe"
              >
                Get New Chapters
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[248px]">
          <Link
            href="/chapters"
            className="oracle-card hover-lift group flex flex-col justify-center gap-7 p-12 text-left md:col-span-2 md:row-span-2"
          >
            <div>
              <p className="eyebrow mb-5">The Book</p>
              <h2 className="font-title text-3xl md:text-4xl font-semibold text-left">
                Read it, a chapter at a time.
              </h2>
              <p className="mt-4 max-w-md text-left font-serif text-lg leading-relaxed text-ink-soft">
                Eighteen short chapters across three movements — the seen world,
                the world that ended, and the world made after.
              </p>
            </div>
            <span className="font-sans text-sm uppercase tracking-[0.14em] text-gold">
              Open the chapters →
            </span>
          </Link>

          <Link
            href="/about"
            className="oracle-card oracle-card--raised hover-lift flex flex-col justify-center gap-3 p-8 text-left"
          >
            <p className="eyebrow mb-3">About</p>
            <p className="text-left font-serif text-lg text-ink">
              A magician who saw the world twice — and then for real.
            </p>
          </Link>

          <a
            href="https://sebastiangerhardt.substack.com/subscribe?utm_source=website&utm_medium=bento&utm_campaign=home"
            className="oracle-card oracle-card--raised hover-lift flex flex-col justify-center gap-3 p-8 text-left"
          >
            <p className="eyebrow mb-3">Follow</p>
            <p className="text-left font-serif text-lg text-ink">
              New chapters by email, as the work is finished.
            </p>
          </a>
        </div>
      </section>

      {/* Restrained photo band */}
      <section className="px-5 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-8 text-center">The Two Worlds</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className="hover-lift oracle-card overflow-hidden p-0"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
                <figcaption className="px-5 py-4 text-center font-sans text-xs uppercase tracking-[0.14em] text-ink-soft">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* A line from the book */}
      <section className="px-6 py-28 md:py-32">
        <div className="glass-panel reveal mx-auto max-w-2xl p-12 md:p-16 text-center">
          <p className="eyebrow mb-6">From the Book</p>
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed text-ink">
            “People sometimes ask if magic is about deception. It isn&apos;t.
            The trick is the doorway. The wonder is what walks through.”
          </blockquote>
          <cite className="verse-ref mt-6 block not-italic">
            — The Trick Is the Doorway
          </cite>
          <div className="mt-8">
            <CTAButton href="/chapters" variant="primary">
              Read the Chapters
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

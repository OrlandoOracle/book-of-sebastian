import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SubscribeModal from "@/components/SubscribeModal";
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
      {/* Hero — split: text on dark canvas (left) | full uncropped image (right). No overlap, no scrim. */}
      <section className="hero2">
        <div className="hero2__text reveal">
          <div style={{ maxWidth: "34rem" }}>
            <p className="eyebrow" style={{ margin: "0 0 1.3rem" }}>
              A Testament in Two Worlds
            </p>
            <h1
              className="font-title font-bold"
              style={{
                margin: 0,
                fontSize: "clamp(3rem, 5.8vw, 5.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "#f4f3ef",
              }}
            >
              The Book of <span className="gold-text">Sebastian</span>
            </h1>
            <p
              className="font-serif italic text-ink"
              style={{
                margin: "1.4rem 0 0",
                fontSize: "clamp(1.18rem, 2.2vw, 1.6rem)",
                lineHeight: 1.55,
              }}
            >
              A magician, a mentalist, a cancer survivor, and an insurance
              executive walk into a timeline…
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ marginTop: "2.2rem" }}
            >
              <CTAButton href="/chapters" variant="primary">
                Start Reading
              </CTAButton>
              <SubscribeModal label="Get New Chapters" variant="secondary" />
            </div>
          </div>
        </div>
        <div className="hero2__imgwrap">
          <img
            className="hero2__img"
            src="/photos/hero-library.jpg"
            alt="Sebastian in a dark library, holding his own head, a book titled Art and Magic where his face should be"
          />
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
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

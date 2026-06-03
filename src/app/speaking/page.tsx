import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Speaking & Performances | The Book of Sebastian",
  description:
    "Bring the story to your stage — a keynote on wonder and survival, and The Other Side, a theatrical mentalism performance. Book Sebastian for your event.",
  openGraph: {
    title: "Speaking & Performances | The Book of Sebastian",
    description:
      "A keynote on wonder and survival, and The Other Side — a theatrical mentalism performance. Book Sebastian for your event.",
    url: "https://bookofsebastian.com/speaking",
    siteName: "The Book of Sebastian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking & Performances | The Book of Sebastian",
    description:
      "A keynote on wonder and survival, and The Other Side — a theatrical mentalism performance.",
  },
  alternates: { canonical: "https://bookofsebastian.com/speaking" },
};

const GALLERY = [
  {
    src: "/photos/perf-otherside.jpg",
    alt: "Sebastian's show The Other Side — his face projected on the stage screen, red light",
  },
  {
    src: "/photos/perf-closeup.jpg",
    alt: "Sebastian mid-show in a leather jacket, gesturing to the audience",
  },
  {
    src: "/photos/perf-cosmos-card.jpg",
    alt: "Sebastian holding a mystery card against a cosmic, zodiac-lit backdrop",
  },
  {
    src: "/photos/perf-cosmos-board.jpg",
    alt: "Sebastian performing a number-board routine on a cosmic stage",
  },
  {
    src: "/photos/perf-stage-wide.jpg",
    alt: "Sebastian alone on a vast stage, wide cinematic shot",
  },
];

const OFFERINGS = [
  {
    head: "The Keynote — “The Doorway”",
    body: "The story underneath the book: a Grade 4 diagnosis at twenty-two, the life that ended, and the one built after. A talk about wonder, resilience, and choosing to author what comes next — for conferences, leadership teams, and healthcare audiences.",
  },
  {
    head: "The Other Side — stage show",
    body: "A theatrical mentalism performance. Part magic, part memoir — an hour that leaves a room genuinely astonished and a little more awake to its own life.",
  },
  {
    head: "Close-up & corporate",
    body: "Strolling and close-up magic for galas, brand activations, and private events — the work in the hands, inches from the eyes.",
  },
];

export default function Speaking() {
  return (
    <div className="w-full">
      <section className="sec-hero">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Speaking &amp; Performances</p>
          <h1 className="font-title text-5xl md:text-7xl font-bold tracking-tight">
            Bring it to your <span className="gold-text">stage</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-ink-soft">
            A keynote on wonder and survival, and a theatrical performance that
            leaves a room astonished.
          </p>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm uppercase tracking-[0.14em] text-ink-faint">
            Featured in Penguin Magic Monthly
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-10 text-center">What I Bring</p>
          <div className="space-y-4">
            {OFFERINGS.map((o) => (
              <div key={o.head} className="oracle-card p-6 text-left">
                <h3 className="font-title text-xl font-semibold text-gold">
                  {o.head}
                </h3>
                <p className="mt-2 text-left font-serif text-ink-soft">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-8 text-center">On Stage</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    height: "260px",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="glass-panel reveal mx-auto max-w-xl p-10 text-center">
          <p className="eyebrow mb-3">Book Sebastian</p>
          <h2 className="font-title text-3xl font-semibold text-ink">
            Tell me about your event.
          </h2>
          <p className="mx-auto mt-3 max-w-md font-serif text-ink-soft">
            Conference, theater, gala, or private event — send the date,
            audience, and what you have in mind, and I&apos;ll be in touch.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton
              href="mailto:sebastian@bookofsebastian.com?subject=Speaking%2FPerformance%20Inquiry&body=Event%3A%0ADate%3A%0ALocation%3A%0AAudience%20size%3A%0AWhat%20you%20have%20in%20mind%3A%0A"
              variant="primary"
              external
            >
              Send an Inquiry
            </CTAButton>
            <CTAButton href="/about" variant="secondary">
              Read the Story
            </CTAButton>
          </div>
          <p className="mt-6 font-sans text-xs text-ink-faint">
            Or call the office: (321) 359-8363
          </p>
        </div>
      </section>
    </div>
  );
}

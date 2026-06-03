import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Musings | The Book of Sebastian",
  description:
    "The work in two forms — the memoir as it's written, and the shorter essays around it.",
  openGraph: {
    title: "Musings | The Book of Sebastian",
    description:
      "The work in two forms — the memoir as it's written, and the shorter essays around it.",
    url: "https://bookofsebastian.com/musings",
    siteName: "The Book of Sebastian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musings | The Book of Sebastian",
    description:
      "The work in two forms — the memoir as it's written, and the shorter essays around it.",
  },
  alternates: { canonical: "https://bookofsebastian.com/musings" },
};

export default function Musings() {
  return (
    <div className="w-full">
      <section className="sec-hero">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Musings</p>
          <h1 className="font-title text-5xl md:text-7xl font-bold tracking-tight">
            The work, in two <span className="gold-text">forms</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-ink-soft">
            The memoir as it&apos;s written, and the shorter essays around it.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <Link
            href="/chapters"
            className="oracle-card hover-lift p-10 text-left"
          >
            <p className="eyebrow mb-4">The Book</p>
            <h2 className="font-title text-3xl font-semibold text-left">
              The memoir
            </h2>
            <p className="mt-3 text-left font-serif text-ink-soft">
              Eighteen short chapters across three movements — the seen world,
              the world that ended, and the world made after.
            </p>
            <span className="mt-5 inline-block font-sans text-sm uppercase tracking-[0.14em] text-gold">
              Read the chapters →
            </span>
          </Link>

          <Link
            href="/writing"
            className="oracle-card hover-lift p-10 text-left"
          >
            <p className="eyebrow mb-4">Essays</p>
            <h2 className="font-title text-3xl font-semibold text-left">
              The thinking around it
            </h2>
            <p className="mt-3 text-left font-serif text-ink-soft">
              Shorter pieces — the ideas, the days, and the work underneath the
              book.
            </p>
            <span className="mt-5 inline-block font-sans text-sm uppercase tracking-[0.14em] text-gold">
              Read the essays →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

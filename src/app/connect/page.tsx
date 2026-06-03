import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Connect | The Book of Sebastian",
  description: "Follow the book and get in touch.",
  openGraph: {
    title: "Connect | The Book of Sebastian",
    description: "Follow the book and get in touch.",
    url: "https://bookofsebastian.com/connect",
    siteName: "The Book of Sebastian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect | The Book of Sebastian",
    description: "Follow the book and get in touch.",
  },
  alternates: { canonical: "https://bookofsebastian.com/connect" },
};

export default function Connect() {
  return (
    <div className="w-full">
      <section className="sec-hero">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Connect</p>
          <h1 className="font-title text-5xl md:text-7xl font-bold tracking-tight">
            Follow the book.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-ink-soft">
            New chapters by email, and a direct line for anything else.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="https://sebastiangerhardt.substack.com?utm_source=website&utm_medium=connect&utm_campaign=social"
            className="oracle-card hover-lift p-8 text-left"
          >
            <p className="eyebrow mb-3">Substack</p>
            <h2 className="font-title text-2xl font-semibold text-left">
              New chapters by email
            </h2>
            <p className="mt-2 text-left font-serif text-ink-soft">
              The book as it&apos;s written, delivered when each chapter is
              finished.
            </p>
            <span className="mt-4 inline-block font-sans text-sm uppercase tracking-[0.14em] text-gold">
              Subscribe →
            </span>
          </a>

          <a
            href="mailto:sebastian@bookofsebastian.com"
            className="oracle-card hover-lift p-8 text-left"
          >
            <p className="eyebrow mb-3">Email</p>
            <h2 className="font-title text-2xl font-semibold text-left">
              Get in touch
            </h2>
            <p className="mt-2 text-left font-serif text-ink-soft">
              Questions, your own story, speaking and media — write directly.
            </p>
            <span className="mt-4 inline-block font-sans text-sm uppercase tracking-[0.14em] text-gold">
              sebastian@bookofsebastian.com
            </span>
          </a>
        </div>
      </section>

      <section className="sec text-center">
        <CTAButton href="/chapters" variant="primary">
          Start Reading
        </CTAButton>
      </section>
    </div>
  );
}

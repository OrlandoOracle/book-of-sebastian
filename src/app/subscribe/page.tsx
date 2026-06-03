import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Subscribe | The Book of Sebastian",
  description: "Get each new chapter by email as the work is finished.",
  openGraph: {
    title: "Subscribe | The Book of Sebastian",
    description: "Get each new chapter by email as the work is finished.",
    url: "https://bookofsebastian.com/subscribe",
    siteName: "The Book of Sebastian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscribe | The Book of Sebastian",
    description: "Get each new chapter by email as the work is finished.",
  },
  alternates: { canonical: "https://bookofsebastian.com/subscribe" },
};

const RECEIVE = [
  {
    head: "Each new chapter",
    body: "The book as it gets written, delivered when a chapter is finished.",
  },
  {
    head: "A note from behind the work",
    body: "Now and then, the thinking underneath a chapter — only when there's something worth saying.",
  },
  {
    head: "First word on the full book",
    body: "When the chapters become a book, subscribers hear first.",
  },
];

export default function Subscribe() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="sec-hero">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Subscribe</p>
          <h1 className="font-title text-5xl md:text-7xl font-bold tracking-tight">
            Get new <span className="gold-text">chapters</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-ink-soft">
            By email, as the work is finished. Free. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Embed */}
      <section className="sec">
        <div className="oracle-card mx-auto max-w-xl overflow-hidden p-4">
          <iframe
            src="https://sebastiangerhardt.substack.com/embed"
            width="100%"
            height="320"
            style={{
              border: "0",
              background: "transparent",
              colorScheme: "light",
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <p className="mx-auto mt-6 max-w-lg text-center font-serif text-ink-soft">
          No schedule and no filler. When a chapter is true and finished, it
          goes up — and you get it in your inbox.
        </p>
      </section>

      {/* What you'll receive */}
      <section className="sec">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-10 text-center">What You&apos;ll Receive</p>
          <div className="space-y-4">
            {RECEIVE.map((r) => (
              <div key={r.head} className="oracle-card p-6 text-left">
                <h3 className="font-title text-xl font-semibold text-gold">
                  {r.head}
                </h3>
                <p className="mt-2 text-left font-serif text-ink-soft">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec text-center">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href="/chapters" variant="primary">
            Start Reading
          </CTAButton>
          <CTAButton
            href="https://sebastiangerhardt.substack.com/subscribe"
            variant="secondary"
            external
            utmCampaign="subscribe_page_final"
          >
            Subscribe by Email
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

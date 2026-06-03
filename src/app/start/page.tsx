import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Start Here | The Book of Sebastian",
  description: "New to the book? How to read it, and where to begin.",
  openGraph: {
    title: "Start Here | The Book of Sebastian",
    description: "New to the book? How to read it, and where to begin.",
    url: "https://bookofsebastian.com/start",
    siteName: "The Book of Sebastian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Here | The Book of Sebastian",
    description: "New to the book? How to read it, and where to begin.",
  },
  alternates: { canonical: "https://bookofsebastian.com/start" },
};

const STEPS = [
  {
    num: "I",
    head: "Begin at the first chapter",
    body: "The book is built as a doorway, not a timeline. The opening chapter sets the one fact everything rests on: I see the world twice.",
  },
  {
    num: "II",
    head: "Read through the three movements",
    body: "The Seen World, the World That Ended, the Made World. Each chapter is short. Read one, or read them in a sitting.",
  },
  {
    num: "III",
    head: "Follow as it's written",
    body: "New chapters arrive as the work is finished. Subscribe and each one comes to your inbox.",
  },
];

const FAQ = [
  {
    q: "How often do new chapters come?",
    a: "As the work is finished. No schedule, no filler. When a chapter is true and done, it goes up.",
  },
  {
    q: "Is it free?",
    a: "Yes. The chapters are free to read here. Subscribe if you want each new one delivered by email.",
  },
  {
    q: "What is it about?",
    a: "A magician diagnosed with Grade 4 pineoblastoma at twenty-two, who survived and rebuilt a life. The survival, the rebuild, and the doorway between the two.",
  },
  {
    q: "Can I start anywhere?",
    a: "Each chapter stands on its own. But the first one frames the rest, so start there if you can.",
  },
];

export default function StartHere() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="sec-hero">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Start Here</p>
          <h1 className="font-title text-5xl md:text-7xl font-bold tracking-tight">
            How to read it
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-ink-soft">
            New to the book. Here is where to begin.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="sec">
        <div className="mx-auto max-w-2xl space-y-4">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="oracle-card flex items-start gap-5 p-6 text-left"
            >
              <span className="font-title text-3xl font-bold leading-none gold-text">
                {s.num}
              </span>
              <div>
                <h3 className="font-title text-xl font-semibold text-left">
                  {s.head}
                </h3>
                <p className="mt-1 text-left font-serif text-ink-soft">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/chapters" variant="primary">
            Go to the Chapters
          </CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-10 text-center">Questions</p>
          <div className="space-y-8">
            {FAQ.map((f) => (
              <div key={f.q} className="text-left">
                <h3 className="font-title text-xl font-semibold text-gold">
                  {f.q}
                </h3>
                <p className="mt-2 text-left font-serif text-ink-soft">{f.a}</p>
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
            utmCampaign="start_page_subscribe"
          >
            Get New Chapters by Email
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

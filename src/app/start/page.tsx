import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import OrnamentalDivider from "@/components/OrnamentalDivider";

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
  alternates: {
    canonical: "https://bookofsebastian.com/start",
  },
};

export default function StartHere() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center">
          <h1 className="font-title text-5xl md:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight uppercase">
            Start Here
          </h1>
          <p className="font-serif text-xl md:text-2xl text-dark-gray leading-relaxed italic max-w-2xl mx-auto">
            New to the book. Here is how to read it, and where to begin.
          </p>
          <OrnamentalDivider />
        </div>
      </section>

      {/* How to Read */}
      <section className="border-t border-b border-silver bg-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeader>How to Read It</SectionHeader>

          <div className="space-y-8 mt-8">
            <div className="flex items-start gap-5">
              <span className="font-title text-3xl text-royal-blue font-bold leading-none">
                I
              </span>
              <div className="text-left">
                <h3 className="font-title text-xl font-semibold text-black mb-1">
                  Begin at the first chapter
                </h3>
                <p className="font-serif text-dark-gray leading-relaxed">
                  The book is built as a doorway, not a timeline. The opening
                  chapter sets the one fact everything else rests on: I see the
                  world twice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="font-title text-3xl text-royal-blue font-bold leading-none">
                II
              </span>
              <div className="text-left">
                <h3 className="font-title text-xl font-semibold text-black mb-1">
                  Read through the three movements
                </h3>
                <p className="font-serif text-dark-gray leading-relaxed">
                  The Seen World, the World That Ended, the Made World. Each
                  chapter is short. Read one, or read them in a sitting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="font-title text-3xl text-royal-blue font-bold leading-none">
                III
              </span>
              <div className="text-left">
                <h3 className="font-title text-xl font-semibold text-black mb-1">
                  Follow as it&apos;s written
                </h3>
                <p className="font-serif text-dark-gray leading-relaxed">
                  New chapters arrive as the work is finished. Subscribe and
                  each one comes to your inbox.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/chapters" variant="primary">
              Go to the Chapters
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-silver bg-black text-white py-24">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-title text-center text-sm md:text-base uppercase tracking-biblical text-silver mb-12">
            — • Questions • —
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-title text-xl font-semibold text-white mb-2">
                How often do new chapters come?
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                As the work is finished. No schedule, no filler. When a chapter
                is true and done, it goes up.
              </p>
            </div>

            <div>
              <h3 className="font-title text-xl font-semibold text-white mb-2">
                Is it free?
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                Yes. The chapters are free to read here. Subscribe if you want
                each new one delivered by email.
              </p>
            </div>

            <div>
              <h3 className="font-title text-xl font-semibold text-white mb-2">
                What is it about?
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                A magician who was diagnosed with Grade 4 pineoblastoma at
                twenty-two, survived, and rebuilt a life. The survival, the
                rebuild, and the doorway between the two.
              </p>
            </div>

            <div>
              <h3 className="font-title text-xl font-semibold text-white mb-2">
                Can I start anywhere?
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                Each chapter stands on its own. But the first one frames the
                rest, so start there if you can.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-title text-3xl md:text-4xl font-semibold text-black mb-6 tracking-wide">
          Ready to Begin?
        </h2>
        <p className="font-serif text-xl text-dark-gray mb-8 max-w-xl mx-auto">
          Start reading, or get new chapters by email as they&apos;re finished.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/chapters" variant="primary">
            Start Reading
          </CTAButton>
          <CTAButton
            href="https://sebastiangerhardt.substack.com/subscribe"
            variant="secondary"
            external={true}
            utmCampaign="start_page_subscribe"
          >
            Get New Chapters by Email
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import OrnamentalDivider from "@/components/OrnamentalDivider";

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
  alternates: {
    canonical: "https://bookofsebastian.com/subscribe",
  },
};

export default function Subscribe() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center">
          <h1 className="font-title text-5xl md:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight uppercase">
            Subscribe
          </h1>
          <p className="font-serif text-xl md:text-2xl text-dark-gray leading-relaxed italic max-w-2xl mx-auto">
            Each new chapter by email, as the work is finished. Free.
            Unsubscribe anytime.
          </p>
          <OrnamentalDivider />
        </div>
      </section>

      {/* Subscribe */}
      <section className="border-t border-b border-silver bg-white py-16">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeader>Get New Chapters</SectionHeader>

          <div className="max-w-xl mx-auto my-8">
            <iframe
              src="https://sebastiangerhardt.substack.com/embed"
              width="100%"
              height="320"
              style={{ border: "1px solid #EEE", background: "white" }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>

          <p className="font-serif text-center text-dark-gray leading-relaxed max-w-lg mx-auto">
            No schedule and no filler. When a chapter is true and finished, it
            goes up, and you get it in your inbox.
          </p>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <SectionHeader>What You&apos;ll Receive</SectionHeader>

        <div className="space-y-8 mt-8">
          <div className="text-left border-l-2 border-royal-blue pl-6">
            <h3 className="font-title text-xl font-semibold text-black mb-1">
              Each new chapter
            </h3>
            <p className="font-serif text-dark-gray leading-relaxed">
              The book as it gets written, delivered when a chapter is finished.
            </p>
          </div>

          <div className="text-left border-l-2 border-royal-blue pl-6">
            <h3 className="font-title text-xl font-semibold text-black mb-1">
              The occasional note from behind the work
            </h3>
            <p className="font-serif text-dark-gray leading-relaxed">
              Now and then, the thinking underneath a chapter. Only when
              there&apos;s something worth saying.
            </p>
          </div>

          <div className="text-left border-l-2 border-royal-blue pl-6">
            <h3 className="font-title text-xl font-semibold text-black mb-1">
              First word on the full book
            </h3>
            <p className="font-serif text-dark-gray leading-relaxed">
              When the chapters become a book, subscribers hear first.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-silver bg-black text-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-title text-3xl md:text-4xl font-semibold text-white mb-4 tracking-wide">
            Read, or Subscribe
          </h2>
          <p className="font-serif text-lg text-silver mb-10">
            Free. Unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/chapters" variant="primary">
              Start Reading
            </CTAButton>
            <CTAButton
              href="https://sebastiangerhardt.substack.com/subscribe"
              variant="secondary"
              external={true}
              utmCampaign="subscribe_page_final"
            >
              Subscribe by Email
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

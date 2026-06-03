import CTAButton from "@/components/CTAButton";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import SectionHeader from "@/components/SectionHeader";
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
  alternates: {
    canonical: "https://bookofsebastian.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="bg-parchment">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16 mb-16">
        <div className="text-center">
          <h1 className="font-title text-6xl md:text-8xl font-bold text-black mb-6 leading-[1.1] tracking-tight uppercase">
            The Book
            <br />
            of
            <br />
            Sebastian
          </h1>
          <p className="font-serif text-xl md:text-2xl text-dark-gray mb-8 leading-relaxed italic max-w-2xl mx-auto">
            A magician. A brain cancer survivor.
            <br />
            The doorway between the life that ended
            <br />
            and the life that came after.
          </p>

          <OrnamentalDivider />

          <div className="flex flex-col gap-4 items-center mt-8">
            <CTAButton href="/chapters" variant="primary">
              Start Reading
            </CTAButton>
            <CTAButton
              href="https://sebastiangerhardt.substack.com/subscribe"
              variant="secondary"
              external={true}
              utmCampaign="hero_subscribe"
            >
              Get New Chapters by Email
            </CTAButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-b border-silver bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader>Two Worlds</SectionHeader>

          <div className="text-center space-y-8 w-full max-w-2xl mx-auto mt-8">
            <p className="drop-cap font-serif text-lg md:text-xl text-black leading-relaxed text-center mx-auto">
              I see the world twice. That is not a way of speaking. It is my
              eyes. Most of the time my brain lays the two pictures over each
              other and I see one world. When I am tired, or when something
              matters, they pull apart.
            </p>
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed text-center mx-auto">
              I grew up doing magic. The first world. In 2018, at twenty-two,
              the second one arrived — Grade 4 pineoblastoma, and no insurance
              to meet it. I survived. The version of me that thought time was a
              thing I owned did not.
            </p>
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed text-center mx-auto">
              This is the book about what came after. The survival, the rebuild,
              the doorway. I write it down a chapter at a time. I am not in a
              hurry.
            </p>
          </div>

          <OrnamentalDivider />

          <div className="text-center mt-8">
            <CTAButton href="/about" variant="secondary">
              About the Author
            </CTAButton>
          </div>
        </div>
      </section>

      {/* A Line From the Book */}
      <section className="max-w-3xl mx-auto px-6 py-20 bg-off-white">
        <SectionHeader>From the Book</SectionHeader>

        <div className="border-l-4 border-royal-blue pl-8 py-8 my-8">
          <div className="text-left">
            <blockquote className="font-serif text-xl md:text-2xl text-black leading-relaxed italic mb-6">
              "People sometimes ask if magic is about deception. It isn't. The
              trick is the doorway. The wonder is what walks through."
            </blockquote>
            <cite className="verse-ref block not-italic text-royal-blue font-medium">
              — The Trick Is the Doorway
            </cite>
          </div>
        </div>

        <div className="text-center mt-8">
          <CTAButton href="/chapters" variant="primary">
            Read the Chapters
          </CTAButton>
        </div>
      </section>

      {/* Join Section */}
      <section className="border-t border-silver bg-black text-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-title text-sm uppercase tracking-wide text-silver mb-8 font-medium">
            — • Follow the Book • —
          </h2>
          <p className="font-serif text-xl md:text-2xl mb-10 leading-relaxed">
            New chapters arrive as the work is finished.
            <br />
            No schedule. No filler. The book, as it gets written.
          </p>

          <div className="ornamental-divider mb-12 text-silver opacity-60">
            ◆
          </div>

          <CTAButton href="/subscribe" variant="primary">
            Get New Chapters by Email
          </CTAButton>
        </div>
      </section>

      {/* Call to Start */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="border-2 border-silver bg-white rounded-lg p-12 text-center">
          <h2 className="font-title text-3xl md:text-4xl font-semibold text-black mb-6 tracking-wide">
            New to The Book of Sebastian?
          </h2>
          <p className="font-serif text-xl text-black mb-10 leading-relaxed">
            Start at the first chapter and read through the doorway.
          </p>

          <div className="ornamental-divider mb-10 text-silver opacity-60">
            ◆
          </div>

          <CTAButton href="/start" variant="primary">
            Start Here
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

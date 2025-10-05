import CTAButton from "@/components/CTAButton";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import SectionHeader from "@/components/SectionHeader";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Book of Sebastian | Modern Testament',
  description: 'A testament for our time. Ancient wisdom meets modern truth. Weekly chronicles of transformation from brain cancer survivor to empire builder.',
  openGraph: {
    title: 'The Book of Sebastian | Modern Testament',
    description: 'A testament for our time. Ancient wisdom meets modern truth.',
    url: 'https://bookofsebastian.com',
    siteName: 'The Book of Sebastian',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Book of Sebastian | Modern Testament',
    description: 'A testament for our time. Ancient wisdom meets modern truth.',
  },
  alternates: {
    canonical: 'https://bookofsebastian.com',
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
            The Book<br />of<br />Sebastian
          </h1>
          <p className="font-serif text-xl md:text-2xl text-dark-gray mb-8 leading-relaxed italic max-w-2xl mx-auto">
            A Testament of Radical Accountability,<br />
            Miraculous Survival, and Building Empire<br />
            from a Guest Room
          </p>

          <OrnamentalDivider />

          <div className="flex flex-col gap-4 items-center mt-8">
            <CTAButton
              href="https://bookofsebastian.substack.com"
              variant="primary"
              external={true}
              utmCampaign="hero"
            >
              Read the Opening Verse
            </CTAButton>
            <CTAButton
              href="https://bookofsebastian.substack.com/subscribe"
              variant="secondary"
              external={true}
              utmCampaign="hero_subscribe"
            >
              Subscribe for Weekly Verses
            </CTAButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-b border-silver bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader>About the Testament</SectionHeader>

          <div className="text-center space-y-8 w-full max-w-3xl mx-auto mt-8">
            <p className="drop-cap font-serif text-lg md:text-xl text-black leading-relaxed text-center mx-auto">
              At twelve, I asked the universe for a story worth telling. At twenty-two, it gave me brain cancer.
              I survived against impossible odds—a medically certified miracle. But survival was just Act One.
            </p>
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed text-center mx-auto">
              I spent four years in a narcissistic marriage that nearly destroyed me. I escaped, drove 992 miles
              to freedom, and started over in my brother's guest room with $77K in debt.
            </p>
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed text-center mx-auto">
              Now I'm documenting the journey in real-time: building empire, using insurance as foundation and
              magic as mission, guided by The Foundation's radical accountability.
            </p>
            <p className="font-serif text-xl md:text-2xl text-royal-blue font-semibold italic mt-8 text-center mx-auto">
              "This is my testimony. Every Sunday, a new verse.<br />
              Every chapter, a step closer to becoming a pillar of light for my community."
            </p>
          </div>

          <OrnamentalDivider />

          <div className="text-center mt-8">
            <CTAButton
              href="/about"
              variant="secondary"
            >
              Learn More About the Journey
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Latest Verse Preview */}
      <section className="max-w-3xl mx-auto px-6 py-20 bg-off-white">
        <SectionHeader>Latest Verse</SectionHeader>

        <div className="border-l-4 border-royal-blue pl-8 py-8 my-8">
          <div className="text-left">
            <blockquote className="font-serif text-xl md:text-2xl text-black leading-relaxed italic mb-6">
              "The universe delivered. I survived brain cancer against impossible odds. I escaped narcissistic abuse.
              I rebuilt from nothing. Now I'm documenting every step of building empire from a guest room.
              This is what I'm doing with the miracle I was given."
            </blockquote>
            <cite className="verse-ref block not-italic text-royal-blue font-medium">
              — Sebastian 1:1
            </cite>
          </div>
        </div>

        <div className="text-center mt-8">
          <CTAButton
            href="https://bookofsebastian.substack.com"
            variant="primary"
            external={true}
            utmCampaign="latest_verse"
          >
            Read on Substack
          </CTAButton>
        </div>
      </section>

      {/* Join Section */}
      <section className="border-t border-silver bg-black text-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-title text-sm uppercase tracking-wide text-silver mb-8 font-medium">
            — • Join the Journey • —
          </h2>
          <p className="font-serif text-xl md:text-2xl mb-10 leading-relaxed">
            Every Sunday, a new verse arrives in your inbox.<br />
            Real-time documentation of transformation,<br />
            accountability, and empire-building.
          </p>

          <div className="ornamental-divider mb-12 text-silver opacity-60">
            ◆
          </div>

          <CTAButton
            href="/subscribe"
            variant="primary"
          >
            Subscribe Now
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
            Start from the beginning and follow the complete journey.
          </p>

          <div className="ornamental-divider mb-10 text-silver opacity-60">
            ◆
          </div>

          <CTAButton
            href="/start"
            variant="primary"
          >
            Start Here
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

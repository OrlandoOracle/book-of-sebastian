import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Start Here | The Book of Sebastian',
  description: 'New to The Book of Sebastian? Start your journey here with recommended reading order and key information about the weekly verses.',
};

export default function StartHere() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          Start Here
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
          New to The Book of Sebastian? Begin your journey with the opening verse.
        </p>
      </section>

      {/* Reading Order */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Recommended Reading Order
          </h2>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start with the Opening Verse</h3>
                <p className="text-gray-700">
                  Chapter 1 sets the foundation—the prophecy, the cancer, the miracle, and the mission.
                  Everything begins here.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Follow the Weekly Verses</h3>
                <p className="text-gray-700">
                  Every Sunday, a new chapter arrives. Subscribe to receive each verse in your inbox and follow
                  the journey in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Engage with the Community</h3>
                <p className="text-gray-700">
                  Join the discussion in the comments, share your own journey, and connect with others who
                  are building from nothing.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButton
              href="https://bookofsebastian.substack.com"
              variant="primary"
              external={true}
              utmCampaign="start_page"
            >
              Read Chapter 1: The Opening Verse
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          What You'll Find Here
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Raw Accountability</h3>
            <p className="text-gray-700">
              No filtered perfection. Real wins, real failures, real growth documented in real-time.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Weekly Verses</h3>
            <p className="text-gray-700">
              Every Sunday, a new chapter. Consistent documentation of the journey from guest room to empire.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cancer Survival Story</h3>
            <p className="text-gray-700">
              The medical miracle that started it all—and what I'm doing with the second chance.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Empire Building</h3>
            <p className="text-gray-700">
              Insurance as foundation, magic as mission. Watch the business grow from $77K debt to freedom.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Foundation Principles</h3>
            <p className="text-gray-700">
              Radical accountability using Rusty's Mindset Upgrade System—the framework guiding the journey.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community & Connection</h3>
            <p className="text-gray-700">
              Join survivors, entrepreneurs, and rebuilders following along and sharing their own journeys.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gold mb-3">How often do you publish?</h3>
              <p className="text-gray-300">
                Every Sunday, a new verse arrives. Consistent, weekly documentation of the journey.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-3">Is it free?</h3>
              <p className="text-gray-300">
                Yes. All verses are published free on Substack. Subscribe to get each chapter delivered to your
                inbox every Sunday.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-3">What's the story about?</h3>
              <p className="text-gray-300">
                The Book of Sebastian chronicles the journey from brain cancer survivor to empire builder.
                It's about surviving the impossible, escaping narcissistic abuse, and building from nothing with
                radical accountability. Every verse is real-time documentation—no highlight reel, just truth.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-3">Can I start from any chapter?</h3>
              <p className="text-gray-300">
                While each verse stands alone, the story builds on itself. Start with Chapter 1 (The Opening Verse)
                to get the full context, then follow along weekly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-3">Who is this for?</h3>
              <p className="text-gray-300">
                Cancer survivors honoring their second chance. Entrepreneurs building from debt. Anyone rebuilding
                after narcissistic abuse or soul-crushing defeat. People who refuse to waste their miracles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Begin?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Subscribe to receive each verse every Sunday. Join the journey.
        </p>
        <CTAButton
          href="https://bookofsebastian.substack.com/subscribe"
          variant="primary"
          external={true}
          utmCampaign="start_page_subscribe"
        >
          Subscribe for Weekly Verses
        </CTAButton>
      </section>
    </div>
  );
}

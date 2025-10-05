import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Subscribe | The Book of Sebastian',
  description: 'Join the journey. Receive weekly verses delivered every Sunday. Real accountability, transformation, and empire building documented in real-time.',
  openGraph: {
    title: 'Subscribe | The Book of Sebastian',
    description: 'Join the journey. Receive weekly verses delivered every Sunday.',
    url: 'https://bookofsebastian.com/subscribe',
    siteName: 'The Book of Sebastian',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subscribe | The Book of Sebastian',
    description: 'Join the journey. Weekly verses delivered to your inbox.',
  },
  alternates: {
    canonical: 'https://bookofsebastian.com/subscribe',
  },
};

export default function Subscribe() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          Join the Journey
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
          New verse every Sunday. Unsubscribe anytime.
        </p>
      </section>

      {/* Main Subscribe Section */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-white border-2 border-silver rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-title text-3xl md:text-4xl font-semibold text-black mb-4">
              Subscribe for Weekly Verses
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Join the community. Receive new chapters and insights directly to your inbox.
            </p>
          </div>

          {/* Substack Embed */}
          <div className="max-w-xl mx-auto mb-8">
            <iframe
              src="https://bookofsebastian.substack.com/embed"
              width="100%"
              height="320"
              style={{
                border: '1px solid #C0C0C0',
                borderRadius: '8px',
                background: 'white'
              }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>

          <div className="text-center">
            <p className="text-base text-dark-gray mb-4">
              Every Sunday, a new chapter in the journey from brain cancer to empire building arrives in your inbox.
              Real accountability. Real transformation. No highlight reel.
            </p>
          </div>

          {/* What Subscribers Get */}
          <div className="border-t border-gray-200 pt-10">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">
              What You'll Receive
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Weekly Chapter Delivered to Your Inbox</h4>
                  <p className="text-gray-700">
                    Every Sunday, the latest verse arrives. Never miss a chapter of the journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Behind-the-Verses Insights</h4>
                  <p className="text-gray-700">
                    The stories behind the stories. Additional context, reflections, and lessons learned.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Early Access to Book News</h4>
                  <p className="text-gray-700">
                    Be the first to know about the full book release, events, and special announcements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Community Discussion Access</h4>
                  <p className="text-gray-700">
                    Join the conversation in the comments. Connect with other survivors, entrepreneurs, and rebuilders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Subscribe */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Subscribe?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gold mb-3">You're a Cancer Survivor</h3>
              <p className="text-gray-300">
                You were given a second chance and you refuse to waste it. This is your community.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-3">You're Building from Nothing</h3>
              <p className="text-gray-300">
                Debt, doubt, obstacles—you're moving forward anyway. Watch someone do it in real-time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-3">You're Rebuilding After Abuse</h3>
              <p className="text-gray-300">
                You escaped narcissistic abuse or toxic relationships. See what's possible on the other side.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-3">You Want Radical Accountability</h3>
              <p className="text-gray-300">
                No filtered perfection. Just real transformation documented honestly, week by week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join?
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            Free. Weekly. Unsubscribe anytime.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            The next verse arrives this Sunday.
          </p>
          <CTAButton
            href="https://bookofsebastian.substack.com/subscribe"
            variant="primary"
            external={true}
            utmCampaign="subscribe_page_final"
          >
            Subscribe Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

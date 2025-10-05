import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About | The Book of Sebastian',
  description: 'From brain cancer miracle at 22 to building empire from a guest room. The testament of radical accountability and transformation documented in real-time.',
  openGraph: {
    title: 'About Sebastian | Modern Testament',
    description: 'From brain cancer miracle at 22 to building empire from a guest room.',
    url: 'https://bookofsebastian.com/about',
    siteName: 'The Book of Sebastian',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sebastian | Modern Testament',
    description: 'From brain cancer miracle at 22 to building empire from a guest room.',
  },
  alternates: {
    canonical: 'https://bookofsebastian.com/about',
  },
};

export default function About() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          About the Testament
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
          The story behind The Book of Sebastian and the mission to document radical transformation in real-time.
        </p>
      </section>

      {/* The Mission */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            The Mission
          </h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              <strong className="text-gold">This testimony is for those who refuse to waste their miracles.</strong>
            </p>
            <p>
              For cancer survivors who were given a second chance and want to make it count.
              For entrepreneurs building from nothing, carrying debt and doubt but moving forward anyway.
              For people rebuilding their lives after narcissistic abuse, domestic violence, or any soul-crushing defeat.
            </p>
            <p>
              Every Sunday, you'll find a new verse—a real-time chapter in the journey from brain cancer survivor
              to empire builder. No highlight reel. No filtered perfection. Just radical accountability, documented
              as it happens.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              This is about honoring those who didn't survive by refusing to waste the life they would have wanted.
            </p>
          </div>
        </div>
      </section>

      {/* The Author */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          The Author
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            At twelve years old, I asked the universe for a story worth telling. I wanted to matter. I wanted
            my life to mean something beyond the ordinary.
          </p>
          <p>
            At twenty-two, the universe answered with brain cancer. Grade II astrocytoma. The doctors gave me
            statistics that felt like a death sentence. But I survived. Against the odds, through surgeries and
            treatments and miracles I still can't fully explain—I survived.
          </p>
          <p>
            Seven years later, I was medically certified as a miracle. The tumor was gone. I had beaten cancer.
            But I hadn't beaten my own demons.
          </p>
          <p>
            I spent four years in a narcissistic marriage that slowly eroded everything I had fought to keep alive.
            Until the day I packed my car, drove 992 miles to my brother's guest room in Las Vegas, and started
            over with $77K in debt and nothing but determination.
          </p>
          <p>
            Now I'm building empire. Using insurance as my foundation—the industry that saved my life when I was
            sick. Using magic (the real kind: manifestation, energy work, faith) as my mission. Guided by The
            Foundation's radical accountability system created by Rusty.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            This is my testimony. Every Sunday, a new verse. Every chapter, proof that transformation is possible.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gray-100 rounded-lg">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Photo Placeholder</h3>
          <p className="text-gray-600 italic">Author photo will be added here</p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Contact</h3>
          <p className="text-gray-700">
            <a href="mailto:sebastian@bookofsebastian.com" className="text-gold hover:underline font-semibold">
              sebastian@bookofsebastian.com
            </a>
          </p>
        </div>
      </section>

      {/* The Journey So Far */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
            The Journey So Far
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-gold pl-6 py-2">
              <h3 className="text-2xl font-bold text-gold mb-2">Age 12: The Prophecy</h3>
              <p className="text-gray-300">
                Asked the universe for a story worth telling. Wanted a life that mattered.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <h3 className="text-2xl font-bold text-gold mb-2">Age 22: Brain Cancer Diagnosis</h3>
              <p className="text-gray-300">
                Grade II astrocytoma. The universe delivered the story—just not the one I expected.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <h3 className="text-2xl font-bold text-gold mb-2">Year 7: Medically Certified Miracle</h3>
              <p className="text-gray-300">
                Cancer-free. Against all odds. A second chance at life.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <h3 className="text-2xl font-bold text-gold mb-2">Age 29: The Rebuild Begins</h3>
              <p className="text-gray-300">
                Escaped narcissistic marriage. 992 miles to freedom. $77K in debt. Guest room to empire.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <h3 className="text-2xl font-bold text-gold mb-2">Present: Building Empire</h3>
              <p className="text-gray-300">
                Insurance as foundation. Magic as mission. Radical accountability as the path.
                Every Sunday, a new verse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Follow the Journey
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          New verse every Sunday. Real-time documentation of transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            href="https://bookofsebastian.substack.com/subscribe"
            variant="primary"
            external={true}
            utmCampaign="about_page"
          >
            Subscribe Now
          </CTAButton>
          <CTAButton
            href="/start"
            variant="secondary"
          >
            Start from the Beginning
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

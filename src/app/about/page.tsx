import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import OrnamentalDivider from "@/components/OrnamentalDivider";

export const metadata: Metadata = {
  title: "About | The Book of Sebastian",
  description:
    "A magician and brain cancer survivor writing the doorway between the life that ended and the life that came after.",
  openGraph: {
    title: "About | The Book of Sebastian",
    description:
      "A magician and brain cancer survivor writing the doorway between the life that ended and the life that came after.",
    url: "https://bookofsebastian.com/about",
    siteName: "The Book of Sebastian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | The Book of Sebastian",
    description:
      "A magician and brain cancer survivor writing the doorway between the life that ended and the life that came after.",
  },
  alternates: {
    canonical: "https://bookofsebastian.com/about",
  },
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center">
          <h1 className="font-title text-5xl md:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight uppercase">
            About
          </h1>
          <p className="font-serif text-xl md:text-2xl text-dark-gray leading-relaxed italic max-w-2xl mx-auto">
            Magician. Cancer survivor. Writing the doorway between the life that
            ended and the life that came after.
          </p>
          <OrnamentalDivider />
        </div>
      </section>

      {/* Two Worlds */}
      <section className="border-t border-b border-silver bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader>Two Worlds</SectionHeader>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <p className="drop-cap font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
              I see the world twice. That is not a way of speaking. It is my
              eyes. Most of the time my brain lays the two pictures over each
              other and I see one world, like everyone else. When I am tired, or
              when something matters, they pull apart.
            </p>
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
              I grew up doing magic. I started at thirteen and never stopped —
              more than twenty years of standing in front of strangers and, for
              a few seconds and with their permission, making the world look
              more permeable than it is. That was the first world. The trick is
              the doorway. The wonder is what walks through.
            </p>
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
              The second world arrived in 2018. I was twenty-two. The diagnosis
              was Grade 4 pineoblastoma — rare, aggressive brain cancer. I was
              uninsured.
            </p>
          </div>
        </div>
      </section>

      {/* What Cancer Did */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <SectionHeader>What It Cost</SectionHeader>
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
            I do not romanticize it. Cancer is not a teacher. It is not a gift.
            It does not come into your life for a reason. What it does is end
            the version of you that thought time was a thing you owned.
          </p>
          <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
            I survived. Surgery. Radiation. A long recovery, and a body that
            kept the marks of it — the eye that does not track quite right, the
            deliberateness with which I now do ordinary things. I also walked
            out with more than half a million dollars in medical debt. At
            twenty-two, the two doors in front of me were dying and bankruptcy.
          </p>
          <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
            A Florida program covered me retroactively because I had been
            disabled before I turned twenty-three. The debt was wiped out. I
            made it to the other side. That is the whole reason I sell insurance
            now. I know what it is to face the worst day of your life and find
            that nobody made sure you were covered.
          </p>
        </div>
      </section>

      {/* The Rebuild */}
      <section className="border-t border-b border-silver bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader>The Rebuild</SectionHeader>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
              Surviving was the first ending. There was a second one. Four years
              in a marriage that nearly erased me, and then a car packed in a
              hurry, almost a thousand miles driven to a guest room, and a
              start-over with seventy-seven thousand dollars of debt and not
              much else.
            </p>
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
              What I did next is the unglamorous part, and the part that
              mattered. I built a system. Not routines — an actual system.
              Software, notebooks, calendars wired together, a way to live with
              double vision and finite energy and two careers and one body and
              still keep the promises I made. I built it for myself. The
              alternative was to keep losing things I had promised not to lose.
            </p>
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
              It took years. It is still taking years. It works.
            </p>
          </div>
        </div>
      </section>

      {/* What This Is For */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <SectionHeader>What This Is For</SectionHeader>
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="font-serif text-lg md:text-xl text-black leading-relaxed mx-auto">
            I am not a guru. I run an insurance practice and a magic career and
            a small company called Orlando Oracle, and on most days I am tired
            and behind on sleep. I keep meeting people who are inside the
            version of the story I was in — who have survived something, or are
            surviving it, and have realized the old life does not fit and the
            new one has not been built yet.
          </p>
          <p className="font-serif text-xl md:text-2xl text-royal-blue font-semibold italic mt-8 mx-auto">
            I would like to be useful to people walking through the door. That
            is what this is for.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h3 className="font-title text-2xl font-semibold text-black mb-4 tracking-wide">
            Contact
          </h3>
          <p className="font-serif text-dark-gray">
            <a
              href="mailto:sebastian@bookofsebastian.com"
              className="text-royal-blue hover:underline font-medium"
            >
              sebastian@bookofsebastian.com
            </a>
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-silver bg-black text-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-title text-center text-sm md:text-base uppercase tracking-biblical text-silver mb-12">
            — • The Shape of It • —
          </h2>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="border-l-2 border-royal-blue pl-6 py-1">
              <h3 className="font-title text-xl font-semibold text-white mb-1">
                Age 13 — The First Move
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                A boy with a shaking voice crosses a room at a magic festival
                and asks to show a stranger a card move. The first world opens.
              </p>
            </div>

            <div className="border-l-2 border-royal-blue pl-6 py-1">
              <h3 className="font-title text-xl font-semibold text-white mb-1">
                2018, Age 22 — The Diagnosis
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                Grade 4 pineoblastoma. Uninsured. The version of me that thought
                time was mine ends here.
              </p>
            </div>

            <div className="border-l-2 border-royal-blue pl-6 py-1">
              <h3 className="font-title text-xl font-semibold text-white mb-1">
                The Other Side
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                Surgery, radiation, recovery. Half a million in debt, wiped out
                by retroactive coverage. I made it across, and learned why
                coverage is not abstract.
              </p>
            </div>

            <div className="border-l-2 border-royal-blue pl-6 py-1">
              <h3 className="font-title text-xl font-semibold text-white mb-1">
                The Second Ending
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                Out of a marriage that nearly erased me. Almost a thousand miles
                to a guest room. Seventy-seven thousand in debt. A start-over.
              </p>
            </div>

            <div className="border-l-2 border-royal-blue pl-6 py-1">
              <h3 className="font-title text-xl font-semibold text-white mb-1">
                Now — Orlando
              </h3>
              <p className="font-serif text-silver leading-relaxed">
                Insurance, magic, and the system I built to live a life that
                fits. Writing it down, a chapter at a time. I am not in a hurry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-title text-3xl md:text-4xl font-semibold text-black mb-6 tracking-wide">
          Read the Book
        </h2>
        <p className="font-serif text-xl text-dark-gray mb-8 max-w-xl mx-auto">
          The memoir, chapter by chapter. New chapters as the work is finished.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/chapters" variant="primary">
            Start Reading
          </CTAButton>
          <CTAButton
            href="https://sebastiangerhardt.substack.com/subscribe"
            variant="secondary"
            external={true}
            utmCampaign="about_page"
          >
            Get New Chapters by Email
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

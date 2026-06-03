import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

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
  alternates: { canonical: "https://bookofsebastian.com/about" },
};

const TIMELINE = [
  {
    head: "Age 13 — The First Move",
    body: "A boy with a shaking voice crosses a room at a magic festival and asks to show a stranger a card move. The first world opens.",
  },
  {
    head: "2018, Age 22 — The Diagnosis",
    body: "Grade 4 pineoblastoma. Uninsured. The version of me that thought time was mine ends here.",
  },
  {
    head: "The Other Side",
    body: "Surgery, radiation, recovery. Half a million in debt, wiped out by retroactive coverage. I made it across — and learned why coverage is not abstract.",
  },
  {
    head: "The Second Ending",
    body: "Out of a marriage that nearly erased me. Almost a thousand miles to a guest room. Seventy-seven thousand in debt. A start-over.",
  },
  {
    head: "Now — Orlando",
    body: "Insurance, magic, and the system I built to live a life that fits. Writing it down, a chapter at a time. I am not in a hurry.",
  },
];

function Prose({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="sec">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-7">{eyebrow}</p>
        <div className="space-y-6 font-serif text-lg md:text-xl leading-relaxed text-ink">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="sec-hero">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">About</p>
          <h1 className="font-title text-5xl md:text-7xl font-bold tracking-tight">
            Two <span className="gold-text">Worlds</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-ink-soft">
            Magician. Cancer survivor. Writing the doorway between the life that
            ended and the life that came after.
          </p>
        </div>
      </section>

      <div className="hairline mx-auto max-w-2xl" />

      <Prose eyebrow="Two Worlds">
        <p className="drop-cap text-left">
          I see the world twice. That is not a way of speaking. It is my eyes.
          Most of the time my brain lays the two pictures over each other and I
          see one world. When I am tired, or when something matters, they pull
          apart.
        </p>
        <p>
          I grew up doing magic. I started at thirteen and never stopped — more
          than twenty years of standing in front of strangers and, for a few
          seconds and with their permission, making the world look more
          permeable than it is. That was the first world. The trick is the
          doorway. The wonder is what walks through.
        </p>
        <p>
          The second world arrived in 2018. I was twenty-two. The diagnosis was
          Grade 4 pineoblastoma — rare, aggressive brain cancer. I was
          uninsured.
        </p>
      </Prose>

      <div className="hairline mx-auto max-w-2xl" />

      <Prose eyebrow="What It Cost">
        <p>
          I do not romanticize it. Cancer is not a teacher. It is not a gift. It
          does not come into your life for a reason. What it does is end the
          version of you that thought time was a thing you owned.
        </p>
        <p>
          I survived. Surgery. Radiation. A long recovery, and a body that kept
          the marks of it — the eye that does not track quite right, the
          deliberateness with which I now do ordinary things. I also walked out
          with more than half a million dollars in medical debt. At twenty-two,
          the two doors in front of me were dying and bankruptcy.
        </p>
        <p>
          A Florida program covered me retroactively because I had been disabled
          before I turned twenty-three. The debt was wiped out. I made it to the
          other side. That is the whole reason I sell insurance now. I know what
          it is to face the worst day of your life and find that nobody made
          sure you were covered.
        </p>
      </Prose>

      <div className="hairline mx-auto max-w-2xl" />

      <Prose eyebrow="The Rebuild">
        <p>
          Surviving was the first ending. There was a second one. Four years in
          a marriage that nearly erased me, and then a car packed in a hurry,
          almost a thousand miles driven to a guest room, and a start-over with
          seventy-seven thousand dollars of debt and not much else.
        </p>
        <p>
          What I did next is the unglamorous part, and the part that mattered. I
          built a system. Not routines — an actual system. Software, notebooks,
          calendars wired together, a way to live with double vision and finite
          energy and two careers and one body and still keep the promises I
          made. I built it for myself. The alternative was to keep losing things
          I had promised not to lose.
        </p>
        <p>It took years. It is still taking years. It works.</p>
      </Prose>

      {/* Timeline */}
      <section className="sec">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-10 text-center">The Shape of It</p>
          <div className="space-y-4">
            {TIMELINE.map((t) => (
              <div key={t.head} className="oracle-card p-6 text-left">
                <h3 className="font-title text-xl font-semibold text-gold">
                  {t.head}
                </h3>
                <p className="mt-2 text-left font-serif text-ink-soft">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="sec">
        <div className="glass-panel mx-auto max-w-2xl p-10 text-center">
          <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-ink">
            I am not a guru. I run an insurance practice, a magic career, and a
            small company called Orlando Oracle. I would like to be useful to
            people walking through the door. That is what this is for.
          </p>
          <p className="mt-6 font-sans text-sm text-ink-faint">
            <a
              href="mailto:sebastian@bookofsebastian.com"
              className="text-gold hover:underline"
            >
              sebastian@bookofsebastian.com
            </a>
          </p>
          <div className="mt-8">
            <CTAButton href="/chapters" variant="primary">
              Read the Book
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { chapters, publishedChapters } from "@/content/chapters";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import CTAButton from "@/components/CTAButton";
import styles from "./chapters.module.css";

export const metadata: Metadata = {
  title: "The Book | The Book of Sebastian",
  description:
    "The memoir, chapter by chapter. A doorway between the life that ended and the life that came after.",
  openGraph: {
    title: "The Book | The Book of Sebastian",
    description: "The memoir, chapter by chapter.",
    url: "https://bookofsebastian.com/chapters",
    siteName: "The Book of Sebastian",
    type: "website",
  },
  alternates: { canonical: "https://bookofsebastian.com/chapters" },
};

const PART_ORDER = [
  "I. The Seen World",
  "II. The World That Ended",
  "III. The Made World",
];

export default function ChaptersIndex() {
  const total = chapters.length;
  const live = publishedChapters.length;

  return (
    <div>
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center">
          <h1 className="font-title text-5xl md:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight uppercase">
            The Book
          </h1>
          <p className="font-serif text-xl md:text-2xl text-dark-gray mb-2 leading-relaxed italic max-w-2xl mx-auto">
            The memoir, chapter by chapter.
          </p>
          <p className="font-serif text-lg text-dark-gray leading-relaxed italic max-w-2xl mx-auto">
            A doorway between the life that ended and the life that came after.
          </p>
          <OrnamentalDivider />
        </div>
      </section>

      <section className="bg-off-white py-12">
        <div className={styles.wrap}>
          {PART_ORDER.map((part) => {
            const inPart = publishedChapters.filter((c) => c.part === part);
            if (inPart.length === 0) return null;
            return (
              <div key={part} className={styles.partGroup}>
                <div className={styles.partLabel}>{part}</div>
                {inPart.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/chapters/${c.slug}`}
                    className={styles.chapterRow}
                  >
                    <div className={styles.chapterNum}>Chapter {c.number}</div>
                    <div className={styles.chapterTitle}>{c.title}</div>
                    <div className={styles.chapterWords}>
                      {c.wordCount.toLocaleString()} words
                    </div>
                  </Link>
                ))}
              </div>
            );
          })}

          <p className={styles.comingSoon}>
            {live} of {total} chapters published. New chapters arrive as the
            work is finished.
          </p>

          <div className="text-center mt-12">
            <CTAButton
              href="https://sebastiangerhardt.substack.com/subscribe"
              variant="primary"
              external={true}
              utmCampaign="chapters_index"
            >
              Get New Chapters by Email
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapter, publishedChapters } from "@/content/chapters";
import SubscribeCTA from "@/components/SubscribeCTA";
import styles from "../chapters.module.css";

export const dynamicParams = false; // static export: only published slugs exist; others 404

export function generateStaticParams() {
  return publishedChapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return { title: "Not Found | The Book of Sebastian" };
  const title = `${chapter.title} | The Book of Sebastian`;
  const description = `Chapter ${chapter.number}. ${chapter.part}.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://bookofsebastian.com/chapters/${chapter.slug}`,
      siteName: "The Book of Sebastian",
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: {
      canonical: `https://bookofsebastian.com/chapters/${chapter.slug}`,
    },
  };
}

// Defensive: never let an unfilled placeholder leak to a public page.
function toParagraphs(body: string): string[] {
  return body
    .replace(/\[\[NEEDS:[^\]]*\]\]/g, "")
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter((p) => p.length > 0);
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter || !chapter.published) notFound();

  const paragraphs = toParagraphs(chapter.body);

  const ordered = publishedChapters.slice().sort((a, b) => a.number - b.number);
  const idx = ordered.findIndex((c) => c.slug === chapter.slug);
  const prev = idx > 0 ? ordered[idx - 1] : null;
  const next = idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : null;

  const readingMinutes = Math.max(1, Math.round(chapter.wordCount / 238));

  return (
    <article className={`${styles.page} ${styles.fadeIn} py-12 md:py-16`}>
      <div className={styles.wrap}>
        <div className={styles.eyebrow}>{chapter.part}</div>
        <h1 className={styles.title}>{chapter.title}</h1>
        <div className={styles.meta}>
          Chapter {chapter.number}
          <span className={styles.dot}>·</span>
          {readingMinutes} min read
        </div>

        <div className={styles.prose}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className={styles.asterism}>⁂</div>

        <nav className={styles.nav}>
          {prev ? (
            <Link href={`/chapters/${prev.slug}`} className={styles.navLink}>
              <span className="dir">Previous</span>
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/chapters/${next.slug}`}
              className={`${styles.navLink} ${styles.navRight}`}
            >
              <span className="dir">Next</span>
              {next.title}
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <div className="text-center">
          <Link
            href="/chapters"
            className="verse-ref"
            style={{ textDecoration: "none" }}
          >
            ← All Chapters
          </Link>
        </div>

        <SubscribeCTA kind="chapter" />
      </div>
    </article>
  );
}

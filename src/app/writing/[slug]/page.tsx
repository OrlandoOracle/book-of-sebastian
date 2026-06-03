import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, publishedPosts } from "@/content/posts";
import SubscribeCTA from "@/components/SubscribeCTA";
import styles from "../../chapters/chapters.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found | The Book of Sebastian" };
  const title = `${post.title} | The Book of Sebastian`;
  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      url: `https://bookofsebastian.com/writing/${post.slug}`,
      siteName: "The Book of Sebastian",
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description: post.excerpt },
    alternates: {
      canonical: `https://bookofsebastian.com/writing/${post.slug}`,
    },
  };
}

// Defensive: never let an unfilled placeholder leak.
function toParagraphs(body: string): string[] {
  return body
    .replace(/\[\[[^\]]*\]\]/g, "")
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter((p) => p.length > 0);
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !post.published) notFound();

  const paragraphs = toParagraphs(post.body);
  const ordered = publishedPosts.slice().sort((a, b) => a.number - b.number);
  const idx = ordered.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? ordered[idx - 1] : null;
  const next = idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : null;

  return (
    <article className={`${styles.page} ${styles.fadeIn} py-12 md:py-16`}>
      <div className={styles.wrap}>
        <div className={styles.eyebrow}>{post.series}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>Essay</div>

        <div className={styles.prose}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className={styles.asterism}>⁂</div>

        <nav className={styles.nav}>
          {prev ? (
            <Link href={`/writing/${prev.slug}`} className={styles.navLink}>
              <span className="dir">Previous</span>
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/writing/${next.slug}`}
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
            href="/writing"
            className="verse-ref"
            style={{ textDecoration: "none" }}
          >
            ← All Essays
          </Link>
        </div>

        <SubscribeCTA kind="essay" />
      </div>
    </article>
  );
}

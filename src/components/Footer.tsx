import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/chapters", label: "The Book" },
  { href: "/writing", label: "Writing" },
  { href: "/start", label: "Start" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/connect", label: "Connect" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-line">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8 text-center">
          <h3 className="font-title text-2xl font-semibold tracking-wide text-ink mb-3">
            The Book of <span className="gold-text">Sebastian</span>
          </h3>
          <p className="font-serif italic text-ink-soft max-w-lg mx-auto">
            The doorway between the life that ended and the life that came
            after.
          </p>
        </div>

        <div className="hairline mb-8" />

        <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-xs uppercase tracking-[0.14em]">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink-soft hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://sebastiangerhardt.substack.com?utm_source=website&utm_medium=footer&utm_campaign=landing"
            className="font-sans text-ink-faint hover:text-gold transition-colors"
          >
            Substack
          </a>
          <a
            href="mailto:sebastian@bookofsebastian.com"
            className="font-sans text-ink-faint hover:text-gold transition-colors"
          >
            Email
          </a>
        </div>

        <div className="border-t border-line pt-8 text-center font-sans text-xs text-ink-faint">
          <p>
            &copy; {currentYear} The Book of Sebastian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

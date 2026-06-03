import Link from "next/link";
import SubscribeModal from "./SubscribeModal";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/musings", label: "Musings" },
  { href: "/speaking", label: "Speaking" },
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

        <div className="mb-10 flex flex-col items-center gap-3">
          <p className="font-serif text-ink-soft">
            New chapters by email, as the work is finished.
          </p>
          <SubscribeModal label="Get New Chapters" variant="primary" />
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

        <div className="border-t border-line pt-8 text-center font-sans text-xs text-ink-faint">
          <p>
            &copy; {currentYear} The Book of Sebastian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

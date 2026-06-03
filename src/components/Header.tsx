"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/chapters", label: "The Book" },
  { href: "/start", label: "Start" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/connect", label: "Connect" },
];

export default function Header() {
  const pathname = usePathname();
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="glass-nav sticky top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className="font-title text-lg md:text-xl font-semibold tracking-wide text-ink whitespace-nowrap"
        >
          The Book of <span className="gold-text">Sebastian</span>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 font-sans text-[0.82rem] uppercase tracking-[0.12em]">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors duration-200 ${
                active(l.href) ? "text-gold" : "text-ink-soft hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

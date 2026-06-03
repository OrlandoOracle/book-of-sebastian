"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/chapters", label: "The Book" },
  { href: "/writing", label: "Writing" },
  { href: "/start", label: "Start" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/connect", label: "Connect" },
];

export default function Header() {
  const pathname = usePathname();
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Hide on scroll-down, reveal on scroll-up.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 90);
        last = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="glass-nav sticky top-0 z-50 w-full"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
    >
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

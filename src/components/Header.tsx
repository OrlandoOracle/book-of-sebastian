'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="border-b border-silver bg-white">
      <nav className="max-w-4xl mx-auto px-6 py-6">
        <Link href="/" className="block text-center mb-6">
          <h1 className="font-title text-3xl md:text-4xl font-semibold text-black tracking-wide">
            The Book of Sebastian
          </h1>
        </Link>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm uppercase tracking-wide">
          <Link
            href="/"
            className={`font-serif transition-colors duration-300 font-medium px-2 py-1 ${
              isActive('/')
                ? 'text-royal-blue border-b-2 border-royal-blue'
                : 'text-dark-gray hover:text-royal-blue'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-serif transition-colors duration-300 font-medium px-2 py-1 ${
              isActive('/about')
                ? 'text-royal-blue border-b-2 border-royal-blue'
                : 'text-dark-gray hover:text-royal-blue'
            }`}
          >
            About
          </Link>
          <Link
            href="/start"
            className={`font-serif transition-colors duration-300 font-medium px-2 py-1 ${
              isActive('/start')
                ? 'text-royal-blue border-b-2 border-royal-blue'
                : 'text-dark-gray hover:text-royal-blue'
            }`}
          >
            Start Here
          </Link>
          <Link
            href="/subscribe"
            className={`font-serif transition-colors duration-300 font-medium px-2 py-1 ${
              isActive('/subscribe')
                ? 'text-royal-blue border-b-2 border-royal-blue'
                : 'text-dark-gray hover:text-royal-blue'
            }`}
          >
            Subscribe
          </Link>
          <Link
            href="/connect"
            className={`font-serif transition-colors duration-300 font-medium px-2 py-1 ${
              isActive('/connect')
                ? 'text-royal-blue border-b-2 border-royal-blue'
                : 'text-dark-gray hover:text-royal-blue'
            }`}
          >
            Connect
          </Link>
        </div>
      </nav>
    </header>
  );
}

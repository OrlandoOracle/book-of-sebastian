import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gold/30 bg-parchment">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h3 className="font-title text-2xl font-semibold text-charcoal mb-4 tracking-wide">
            The Book of Sebastian
          </h3>
          <p className="font-serif text-charcoal/70 leading-relaxed italic max-w-lg mx-auto">
            A testament of radical accountability, miraculous survival, and building empire from a guest room.
          </p>
        </div>

        <div className="ornamental-divider text-gold mb-10">
          — ◆ —
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm uppercase tracking-biblical">
          <Link href="/" className="font-serif text-charcoal hover:text-burgundy transition-colors">
            Home
          </Link>
          <Link href="/about" className="font-serif text-charcoal hover:text-burgundy transition-colors">
            About
          </Link>
          <Link href="/start" className="font-serif text-charcoal hover:text-burgundy transition-colors">
            Start Here
          </Link>
          <Link href="/subscribe" className="font-serif text-charcoal hover:text-burgundy transition-colors">
            Subscribe
          </Link>
          <Link href="/connect" className="font-serif text-charcoal hover:text-burgundy transition-colors">
            Connect
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <a
            href="https://sebastiangerhardt.substack.com?utm_source=website&utm_medium=footer&utm_campaign=landing"
            className="font-serif text-charcoal/70 hover:text-gold transition-colors"
          >
            Substack
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-charcoal/70 hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-charcoal/70 hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:sebastian@bookofsebastian.com"
            className="font-serif text-charcoal/70 hover:text-gold transition-colors"
          >
            Email
          </a>
        </div>

        <div className="border-t border-gold/30 pt-8 text-center text-sm font-serif text-charcoal/60">
          <p>&copy; {currentYear} The Book of Sebastian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

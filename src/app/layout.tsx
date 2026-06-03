import type { Metadata } from "next";
import { Inter, EB_Garamond, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// Self-hosted + preloaded by next/font (no render-blocking external request).
// Only the weights actually used on the site.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-eb",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "The Book of Sebastian",
  description:
    "The memoir of a magician and brain cancer survivor — the doorway between the life that ended and the life that came after. New chapters as the work is finished.",
  openGraph: {
    title: "The Book of Sebastian",
    description:
      "The doorway between the life that ended and the life that came after.",
    url: "https://bookofsebastian.com",
    siteName: "The Book of Sebastian",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Book of Sebastian",
    description:
      "The doorway between the life that ended and the life that came after.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebGaramond.variable} ${cormorant.variable}`}
    >
      <body>
        <div className="cosmos" aria-hidden="true">
          <span className="cosmos__nebula" />
          <span className="cosmos__smoke" />
          <span className="cosmos__stars" />
        </div>
        <Analytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

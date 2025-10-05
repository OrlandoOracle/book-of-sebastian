import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "The Book of Sebastian",
  description: "A testament of radical accountability, miraculous survival, and building empire from a guest room. Weekly verses chronicling the journey from brain cancer to entrepreneurship.",
  openGraph: {
    title: "The Book of Sebastian",
    description: "A testament of radical accountability, miraculous survival, and building empire from a guest room.",
    url: "https://bookofsebastian.com",
    siteName: "The Book of Sebastian",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Book of Sebastian",
    description: "A testament of radical accountability, miraculous survival, and building empire from a guest room.",
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
    <html lang="en">
      <body>
        <Analytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

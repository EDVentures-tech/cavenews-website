import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAVEnews PROductions",
  description: "State-of-the-art Social Media Productions",
  metadataBase: new URL("https://cave-news.de"),
  openGraph: {
    title: "CAVEnews PROductions",
    description: "State-of-the-art Social Media Productions",
    url: "https://cave-news.de",
    siteName: "CAVEnews PROductions",
    images: [{ url: "/logo.svg", width: 1200, height: 630, alt: "CAVEnews Logo" }],
    locale: "de_DE",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${font.className} bg-black text-zinc-100 antialiased`}>
        <Providers>
          <Nav />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

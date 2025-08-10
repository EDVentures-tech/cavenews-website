import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-black text-zinc-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Nav />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

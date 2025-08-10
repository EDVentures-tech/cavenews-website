"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-zinc-900">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="CAVEnews" className="h-6 w-6" />
          <span className="font-semibold">CAVEnews PROductions</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/projects" className="hover:text-brand">Projekte</Link>
          <Link href="/about" className="hover:text-brand">Über uns</Link>
          <Link href="/contact" className="hover:text-brand">Kontakt</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Aktive Projekte</h2>
        <p className="text-zinc-400 max-w-2xl">
          Wir produzieren Social-First-Formate mit Fokus auf Qualität, Tempo und messbare Wirkung.
          Hier ein Vorgeschmack – Details folgen.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {Array.from({ length: 2 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="text-xl font-medium">Projekt {i + 1}</h3>
              <p className="text-zinc-400 mt-2">
                Kurzbeschreibung eures Projekts. Video-Shorts, Episodenrhythmus, Reichweitenziele, Plattformen.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

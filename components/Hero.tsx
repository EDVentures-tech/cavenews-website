"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Social‑First Produktionen, die auffallen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-zinc-400 max-w-2xl"
        >
          Modernes Storytelling, saubere Technik und Tempo. Wir verbinden Kreativität und Engineering – für Shorts, Serien und wiederkehrende Formate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a href="#projects" className="rounded-xl bg-brand px-5 py-3 text-black font-medium hover:opacity-90">Projekte ansehen</a>
          <a href="/contact" className="rounded-xl border border-zinc-800 px-5 py-3 hover:border-zinc-600">Kontakt aufnehmen</a>
        </motion.div>
      </div>
    </section>
  );
}

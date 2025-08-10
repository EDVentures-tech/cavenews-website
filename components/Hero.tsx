"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/media/hero-poster.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 backdrop-blur-[2px]" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight">
          Wo Ideen in Bild und Ton explodieren
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-lg text-zinc-300 max-w-2xl">
          Wir verwandeln Visionen in lebendige Geschichten – kreativ, packend und technisch perfekt.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex gap-4">
          <a href="#productions" className="rounded-xl bg-brand px-5 py-3 text-black font-medium hover:opacity-90">Produktionen ansehen</a>
          <a href="/contact" className="rounded-xl border border-zinc-800 px-5 py-3 hover:border-zinc-600">Mit uns starten</a>
        </motion.div>
      </div>
    </section>
  );
}

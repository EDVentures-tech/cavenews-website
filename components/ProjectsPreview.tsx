"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Card = { title: string; desc: string; href: string; thumb?: string };

const items: Card[] = [
  { title: "Biergebabbel", desc: "Humorvolles Craft‑Beer‑Format. Verkostungen, Shorts, Podcast.", href: "/productions" },
  { title: "(Produktion 2)", desc: "Zweites aktives Format – Details folgen.", href: "/productions" },
];

export default function ProjectsPreview() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
        >
          <Link
            href={item.href}
            className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition"
          >
            <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
                 style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(0,209,255,0.12), transparent 40%)" }}
            />
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-zinc-400 mt-2">{item.desc}</p>
            <span className="text-brand inline-flex items-center gap-2 mt-4">
              Mehr erfahren <span>→</span>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

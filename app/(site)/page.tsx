import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section id="productions" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Aktive Produktionen</h2>
        <p className="text-zinc-400 max-w-2xl">
          Unser aktuelles Format <strong>Biergebabbel</strong> zeigt, wie wir Menschen zusammenbringen – sei es bei einem kühlen Bier
          oder mit Ideen, die die digitale Welt erobern.
        </p>
        <ProjectsPreview />
      </section>
    </div>
  );
}

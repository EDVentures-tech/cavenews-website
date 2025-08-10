import ProjectCard from "@/components/ProjectCard";

const productions = [
  { title: "Biergebabbel", description: "Humorvolles Craft‑Beer‑Format. Verkostungen, Shorts, Podcast.", href: "#" },
  { title: "(Produktion 2)", description: "Weitere kreative Produktion – Details folgen.", href: "#" }
];

export default function ProductionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Produktionen</h1>
      <p className="text-zinc-400 max-w-2xl">
        Auswahl aktueller Produktionen. In Kürze folgen Detailseiten mit Cases, Metriken und Workflows.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {productions.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </div>
  );
}

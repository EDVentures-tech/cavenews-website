import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "Biergebabbel", description: "Humorvolles Craft-Beer-Format. Verkostungen, Shorts, Podcast.", href: "#" },
  { title: "(Projekt 2)", description: "Zweites aktives Format – Details folgen.", href: "#" }
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Projekte</h1>
      <p className="text-zinc-400 max-w-2xl">
        Auswahl aktueller Produktionen. In Kürze folgen Detailseiten mit Cases, Metriken und Workflows.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </div>
  );
}

import Link from "next/link";

type Props = { title: string; description: string; href: string };

export default function ProjectCard({ title, description, href }: Props) {
  return (
    <Link href={href} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-700 transition">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-zinc-400 mt-2">{description}</p>
      <span className="text-brand mt-4 inline-block">Mehr erfahren →</span>
    </Link>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
      <p className="text-zinc-400 mt-6">
        Schreib uns für Kooperationen, Pitches oder Anfragen. Wir melden uns schnell.
      </p>
      <form className="mt-8 grid gap-4 max-w-xl">
        <input className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" placeholder="Dein Name" />
        <input type="email" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" placeholder="E-Mail" />
        <textarea className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 min-h-[140px]" placeholder="Nachricht" />
        <button className="rounded-xl bg-brand px-5 py-3 text-black font-medium hover:opacity-90">Senden</button>
      </form>
    </div>
  );
}

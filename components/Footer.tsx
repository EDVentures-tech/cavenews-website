export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10 text-sm text-zinc-500">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} CAVEnews PROductions</p>
        <div className="flex gap-4">
          <a href="/impressum" className="hover:text-zinc-300">Impressum</a>
          <a href="/datenschutz" className="hover:text-zinc-300">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}

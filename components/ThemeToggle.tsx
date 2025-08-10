"use client";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-xl border border-zinc-800 px-3 py-1.5 text-xs hover:border-zinc-600"
      aria-label="Theme togglen"
      title="Theme togglen"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}

import { NoteChips } from "@/components/NoteChips";

export function ScentPyramid({
  topNotes,
  heartNotes,
  baseNotes,
  dark = false,
}: {
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  dark?: boolean;
}) {
  const rows = [
    { label: "Top", notes: topNotes },
    { label: "Heart", notes: heartNotes },
    { label: "Base", notes: baseNotes },
  ];

  return (
    <div className="grid gap-3">
      {rows.map((row) => (
        <div
          key={row.label}
          className={`grid gap-4 rounded-lg border p-4 backdrop-blur-sm sm:grid-cols-[96px_1fr] ${
            dark
              ? "border-ivory/12 bg-white/7"
              : "border-champagne/18 bg-white/34 shadow-pearl"
          }`}
        >
          <p
            className={`text-xs uppercase tracking-[0.28em] ${
              dark ? "text-champagne" : "text-charcoal/42"
            }`}
          >
            {row.label}
          </p>
          <NoteChips
            notes={row.notes}
            className={dark ? "[&_span]:border-ivory/14 [&_span]:bg-white/8 [&_span]:text-ivory/70" : ""}
          />
        </div>
      ))}
    </div>
  );
}

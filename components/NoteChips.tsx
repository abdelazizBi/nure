export function NoteChips({
  notes,
  className = "",
}: {
  notes: string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {notes.map((note) => (
        <span
          key={note}
          className="rounded-full border border-champagne/24 bg-ivory/58 px-3 py-1.5 text-xs text-charcoal/62 transition duration-300 group-hover:border-champagne/48 group-hover:bg-white/70"
        >
          {note}
        </span>
      ))}
    </div>
  );
}

import type { Program } from "@/lib/data";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
      <p className="mt-3 text-slate-600">{program.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {program.points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-800" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

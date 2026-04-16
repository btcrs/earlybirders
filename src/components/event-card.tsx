import Link from "next/link";
import type { EventItem } from "@/lib/data";

export function EventCard({ event }: { event: EventItem }) {
  // Helper to parse "April 13, 2026" into parts
  const dateParts = event.date.split(" ");
  const month = dateParts[0].substring(0, 3).toUpperCase();
  const day = dateParts[1].replace(",", "");

  return (
    <article className="group relative bg-white border border-slate-100 rounded-2xl transition-all hover:border-emerald-200 hover:bg-slate-50/30 hover:shadow-sm mt-2">
      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:gap-12 sm:p-10">
        {/* Left: Date Block */}
        <div className="flex w-20 flex-col items-center justify-center text-center sm:border-r sm:border-slate-200 sm:pr-10">
          <span className="text-4xl font-black tracking-tighter text-slate-900">
            {day}
          </span>
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            {month}
          </span>
        </div>

        {/* Center: Info Block */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>{event.time}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{event.location}</span>
          </div>
          
          <h3 className="mt-2 text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
            <Link href={`/events/${event.slug}`}>
              {event.title}
            </Link>
          </h3>

          <p className="mt-3 text-base leading-relaxed text-slate-500 max-w-2xl">
            {event.excerpt}
          </p>
        </div>

        {/* Right: Action Block */}
        <div className="sm:pl-4">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-bold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-200"
          >
            Join
          </Link>
        </div>
      </div>
    </article>
  );
}

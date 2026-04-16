import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events } from "@/lib/data";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.title,
    description: event.excerpt,
  };
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">{event.date}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">{event.title}</h1>
        <p className="mt-3 text-slate-600">
          {event.time} · {event.location}
        </p>
        <p className="mt-6 text-lg text-slate-700">{event.details}</p>
        <div className="mt-8 rounded-xl bg-slate-50 p-5">
          <p className="font-semibold text-slate-900">Who should attend</p>
          <p className="mt-1 text-slate-700">{event.audience}</p>
        </div>
      </article>
    </div>
  );
}

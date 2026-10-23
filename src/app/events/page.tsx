import type { Metadata } from "next";
import Link from "next/link";
import { EventCard } from "@/components/event-card";
import { SectionHeading } from "@/components/section-heading";
import { pastEvents, upcomingEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming bird walks and community events in Wilmington and nearby coastal habitats.",
};

// Re-check which events are upcoming at least once a day, so past events
// stop being advertised as upcoming without needing a redeploy.
export const revalidate = 86400;

export default function EventsPage() {
  const upcoming = upcomingEvents();
  const past = pastEvents();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Events"
        title="Upcoming bird walks and community programs"
        description="Find beginner-friendly events at Wrightsville Beach, Carolina Beach State Park, and public spaces across Wilmington."
      />
      {upcoming.length > 0 ? (
        <div className="mt-12 flex flex-col gap-6 border-t border-slate-100 pt-12">
          {upcoming.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-slate-700 shadow-sm">
          <p className="font-semibold text-slate-900">No walks are scheduled right now.</p>
          <p className="mt-2">
            New dates are added as walks are confirmed.{" "}
            <Link href="/contact" className="font-medium text-emerald-800 underline">
              Get in touch
            </Link>{" "}
            to be notified about the next one, or check the past events below for a
            sense of what our walks are like.
          </p>
        </div>
      )}

      {past.length > 0 ? (
        <section className="mt-16">
          <SectionHeading eyebrow="Past Events" title="Walks and programs we've run" />
          <div className="mt-8 flex flex-col gap-6">
            {past.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

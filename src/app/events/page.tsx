import type { Metadata } from "next";
import { EventCard } from "@/components/event-card";
import { SectionHeading } from "@/components/section-heading";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming bird walks and community events in Wilmington and nearby coastal habitats.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Events"
        title="Upcoming bird walks and community programs"
        description="Find beginner-friendly events at Wrightsville Beach, Carolina Beach State Park, and public spaces across Wilmington."
      />
      <div className="mt-12 flex flex-col gap-6 border-t border-slate-100 pt-12">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { VolunteerForm } from "@/components/volunteer-form";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer, mentor youth birders, or partner with our Wilmington-area nonprofit.",
};

const ways = [
  {
    title: "Volunteer at Events",
    text: "Support youth bird walks, check-in stations, and family-friendly learning activities.",
  },
  {
    title: "Mentor a Young Birder",
    text: "Share field skills and encouragement with students learning bird ID and conservation.",
  },
  {
    title: "Community Partnerships",
    text: "Schools, businesses, and outdoor groups can co-host programs or sponsor equipment.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Get Involved"
        title="Your time and knowledge can shape a young birder's future"
        description="Whether you can help once a month or every week, there is a meaningful way to support youth birding in coastal North Carolina."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {ways.map((way) => (
          <article key={way.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{way.title}</h3>
            <p className="mt-3 text-slate-600">{way.text}</p>
          </article>
        ))}
      </div>
      <VolunteerForm />

    </div>
  );
}

import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

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
      <form className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Volunteer Interest Form</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Name" />
          <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Email" />
          <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Phone" />
          <input
            className="rounded-md border border-slate-300 px-3 py-2"
            placeholder="Organization (optional)"
          />
        </div>
        <textarea
          className="mt-4 w-full rounded-md border border-slate-300 px-3 py-2"
          placeholder="How would you like to get involved?"
          rows={4}
        />
        <button
          type="button"
          className="mt-4 rounded-md bg-emerald-800 px-5 py-3 font-semibold text-white hover:bg-emerald-900"
        >
          Submit Interest
        </button>
      </form>
    </div>
  );
}

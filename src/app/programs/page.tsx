import type { Metadata } from "next";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore youth birding walks, school partnerships, feeder installations, and our optics library.",
};

export default function ProgramsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Programs"
        title="Birding education programs built for youth and families"
        description="From first-time bird walks to school partnerships, we make conservation learning practical, local, and welcoming."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {programs.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </div>
  );
}

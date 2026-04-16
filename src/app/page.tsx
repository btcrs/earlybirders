import Link from "next/link";
import Image from "next/image";
import { EventCard } from "@/components/event-card";
import { MissionGrid } from "@/components/impact-grid";
import { RecentSightingsGrid } from "@/components/recent-sightings";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { events, programs, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* Mobile-only Split Hero */}
      <section className="bg-slate-50 py-12 lg:hidden">
        <div className="mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Youth Birding in Coastal NC
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
              Help a Kid Discover Birding and Confidence Outdoors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Early Birders Birding Club connects Wilmington youth with nature through
              donated optics, public feeder projects, and guided local bird walks.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg"
              >
                Join as a Volunteer
              </Link>
              <Link
                href="/events"
                className="rounded-full border-2 border-slate-200 px-8 py-4 text-sm font-bold text-slate-700"
              >
                Find a Walk
              </Link>
            </div>
          </div>
          <div className="relative mt-12 aspect-square w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
              src="/hero-banner.jpeg"
              alt="An Oystercatcher on the beach"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Desktop-only Background Hero (Visible from LG up) */}
      <section className="relative hidden overflow-hidden lg:block lg:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/hero-banner.jpeg"
            alt="Oystercatcher"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Youth Birding in Coastal North Carolina
            </p>
            <h1 className="mt-3 text-6xl font-black tracking-tight text-slate-900">
              Help a Kid Discover Birding, Conservation, and Confidence Outdoors
            </h1>
            <p className="mt-6 max-w-xl text-xl font-medium text-slate-800">
              Early Birders Birding Club connects Wilmington youth with birds and nature through
              donated optics, public feeder projects, and guided bird walks at Wrightsville Beach
              and Carolina Beach State Park.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="rounded-md bg-slate-800 px-8 py-4 text-base font-bold text-white transition hover:bg-emerald-900 shadow-xl"
              >
                Join as a Volunteer
              </Link>
              <Link
                href="/events"
                className="rounded-md border-2 border-slate-700/60 bg-white/10 px-8 py-4 text-base font-bold text-slate-900 backdrop-blur-sm transition hover:bg-white/20"
              >
                Join Our Next Bird Walk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Our Mission"
          title="Building lifelong conservation leaders, one bird walk at a time"
          description="We remove barriers for youth who want to learn outdoors by sharing gear, mentorship, and local access to coastal habitats."
        />
        <div className="mt-8 sm:mt-10">
          <MissionGrid />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Featured Programs"
          title="Hands-on youth programs rooted in local places"
          description="Every program is designed for beginner-friendly learning and measurable community impact."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Upcoming Events"
          title="Join us in Wilmington, Wrightsville Beach, and Carolina Beach"
        />
        <div className="mt-8 flex flex-col gap-3">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Recent Sightings"
          title="Discover coastal species youth birders love to spot"
        />
        <div className="mt-8">
          <RecentSightingsGrid />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading eyebrow="Community Trust" title="What local families and partners say" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <NewsletterSignup />
      </section>
    </div>
  );
}

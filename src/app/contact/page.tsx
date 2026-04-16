import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Early Birders Birding Club in Wilmington, NC.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-3 text-slate-700">
          We are locally rooted in Wilmington and serve families across nearby coastal communities.
          Reach out about programs, partnerships, or gear donations.
        </p>
        <div className="mt-6 space-y-2 text-slate-700">
          <p>{site.address}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </div>
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Send a Message</h2>
        <form className="mt-4 space-y-3">
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Name" />
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="How can we help?"
            rows={5}
          />
          <button
            type="button"
            className="rounded-md bg-emerald-800 px-5 py-3 font-semibold text-white hover:bg-emerald-900"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

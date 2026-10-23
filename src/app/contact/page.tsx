import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
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
          <p>
            <a href={`mailto:${site.email}`} className="text-emerald-800 underline">
              {site.email}
            </a>
          </p>
        </div>
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Send a Message</h2>
        <ContactForm />
      </section>
    </div>
  );
}

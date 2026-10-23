"use client";

import { useState } from "react";
import { site } from "@/lib/data";

/**
 * There is no newsletter backend yet, so submitting composes a signup
 * email to the club in the visitor's own email app instead of silently
 * dropping the address. Swap this for a real provider when one is set up.
 */
export function NewsletterSignup() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "");
    const subject = encodeURIComponent("Newsletter signup");
    const body = encodeURIComponent(
      `Please subscribe ${email} to Early Birders updates.`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="rounded-2xl bg-emerald-800 p-6 text-white sm:p-10">
      <h3 className="text-2xl font-bold">Get Coastal Birding Updates</h3>
      <p className="mt-2 max-w-2xl text-emerald-50">
        Receive local event alerts, youth program openings, and simple ways to support conservation
        in Wilmington and nearby coastal communities.
      </p>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className="w-full rounded-md border border-emerald-600 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-emerald-700 sm:max-w-md"
        />
        <button
          type="submit"
          className="rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          Join Newsletter
        </button>
      </form>
      {sent ? (
        <p className="mt-3 text-sm text-emerald-50">
          Your email app should open with a signup message addressed to {site.email}.
          If it didn&apos;t, email us there directly.
        </p>
      ) : null}
    </section>
  );
}

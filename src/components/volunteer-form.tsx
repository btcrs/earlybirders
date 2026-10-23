"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const inputClass =
  "w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900";
const labelClass = "block text-sm font-medium text-slate-700";

/**
 * There is no form backend yet, so submitting composes an email to the
 * club in the visitor's own email app instead of silently dropping the
 * submission. Swap this for a real provider when one is set up.
 */
export function VolunteerForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "");
    const name = get("name");

    const subject = encodeURIComponent(`Volunteer interest from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${get("email")}`,
        `Phone: ${get("phone")}`,
        `Organization: ${get("organization")}`,
        "",
        get("message"),
      ].join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-slate-900">Volunteer Interest Form</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="volunteer-name" className={labelClass}>
            Name
          </label>
          <input id="volunteer-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="volunteer-email" className={labelClass}>
            Email
          </label>
          <input
            id="volunteer-email"
            name="email"
            required
            autoComplete="email"
            type="email"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="volunteer-phone" className={labelClass}>
            Phone (optional)
          </label>
          <input id="volunteer-phone" name="phone" autoComplete="tel" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="volunteer-organization" className={labelClass}>
            Organization (optional)
          </label>
          <input id="volunteer-organization" name="organization" className={inputClass} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="volunteer-message" className={labelClass}>
          How would you like to get involved?
        </label>
        <textarea
          id="volunteer-message"
          name="message"
          required
          className={inputClass}
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="mt-4 rounded-md bg-emerald-800 px-5 py-3 font-semibold text-white hover:bg-emerald-900"
      >
        Submit Interest
      </button>
      <p className="mt-3 text-sm text-slate-500">
        {sent
          ? `Your email app should open with your message addressed to ${site.email}. If it didn't, email us directly at ${site.email}.`
          : `This opens your email app with your message addressed to ${site.email}.`}
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const inputClass =
  "w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900";
const labelClass = "block text-sm font-medium text-slate-700";

/**
 * There is no form backend yet, so submitting composes an email to the
 * club in the visitor's own email app instead of silently dropping the
 * message. Swap this for a real provider (form service / server action)
 * when one is set up.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Website contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
          type="email"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          className={inputClass}
          rows={5}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-emerald-800 px-5 py-3 font-semibold text-white hover:bg-emerald-900"
      >
        Send Message
      </button>
      <p className="text-sm text-slate-500">
        {sent
          ? `Your email app should open with your message addressed to ${site.email}. If it didn't, email us directly at ${site.email}.`
          : `This opens your email app with your message addressed to ${site.email}.`}
      </p>
    </form>
  );
}

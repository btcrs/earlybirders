export function NewsletterSignup() {
  return (
    <section className="rounded-2xl bg-emerald-800 p-6 text-white sm:p-10">
      <h3 className="text-2xl font-bold">Get Coastal Birding Updates</h3>
      <p className="mt-2 max-w-2xl text-emerald-50">
        Receive local event alerts, youth program openings, and simple ways to support conservation
        in Wilmington and nearby coastal communities.
      </p>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
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
    </section>
  );
}

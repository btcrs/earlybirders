# Early Birders Birding Club Website

Next.js website for a Wilmington, NC youth birding nonprofit.

Built with:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel-ready project structure

## Install Dependencies

```bash
npm install
```

This project uses npm (`package-lock.json` is the lockfile).

## Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel (Step-by-Step)

1. Push this project to a Git provider (GitHub, GitLab, or Bitbucket).
2. Log in to [Vercel](https://vercel.com/).
3. Click **Add New Project**.
4. Import your repository.
5. Keep default framework settings (Vercel detects Next.js automatically).
6. Add the `EBIRD_API_TOKEN` environment variable (see below) if you want
   live recent sightings.
7. Click **Deploy**.
8. After deployment completes, open your production URL.

## Environment Variables

- `EBIRD_API_TOKEN` (optional, but needed for live data): an
  [eBird API token](https://documenter.getpostman.com/view/664302/S1ENwy59)
  used by the Recent Sightings section on the home page and by
  `/api/birds/recent`. Without it the site still builds and runs; the
  sightings section shows an "unavailable" message and the API route
  returns a 500 explaining the missing token.

For local development, put it in `.env.local`:

```bash
EBIRD_API_TOKEN=your-token-here
```

## Forms

There is no form backend yet. The contact, volunteer, and newsletter
forms compose an email to `hello@earlybirders.org` in the visitor's own
email app rather than collecting submissions on the server. To collect
submissions directly, connect a form provider or a server action and
replace the handlers in `src/components/contact-form.tsx`,
`src/components/volunteer-form.tsx`, and
`src/components/newsletter-signup.tsx`.

## Content

Site content (programs, events, books, testimonials) lives in
`src/lib/data.ts`. Events carry both a display `date` and a
machine-readable `dateISO`; keep them in sync. Past events are
automatically moved out of the "Upcoming" lists into "Past Events".

## Key Routes

- `/` Home
- `/programs`
- `/get-involved`
- `/events`
- `/events/[slug]`
- `/library`
- `/contact`
- `/api/birds/recent` Recent eBird sightings for New Hanover County (JSON)

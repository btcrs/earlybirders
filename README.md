# Early Birders Birding Club Website

Production-ready Next.js website for a Wilmington, NC youth birding nonprofit.

Built with:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel-ready project structure

## Install Dependencies

```bash
npm install
```

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
6. Add any environment variables if needed (none required by default).
7. Click **Deploy**.
8. After deployment completes, open your production URL.

## Environment Variables

No environment variables are required for the current implementation.

If you later connect forms or payments, create `.env.local` and add your provider keys.

## Key Routes

- `/` Home
- `/programs`
- `/get-involved`
- `/events`
- `/events/[slug]`
- `/contact`

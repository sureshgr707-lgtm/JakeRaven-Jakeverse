# Jakeverse

Jake Raven's personal portfolio site, built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Content

All site copy — name, tagline, bio, projects, skills, timeline, and links — lives in
one place: `src/lib/data.ts`. Edit that file to update the site; no other files need
to change for a content update.

## Structure

- `src/app/` — pages (`/`, `/about`, `/work`, `/contact`) using the Next.js App Router
- `src/components/` — shared `Nav`, `Footer`, and `Glow` (decorative background)
- `src/lib/data.ts` — site content

## Build

```bash
npm run build
```

## Access control

The site is gated behind HTTP Basic Auth (`src/proxy.ts`) so only you can view it
until you're ready to make it public.

- Username: `suresh`
- Password: set via the `SITE_PASSWORD` environment variable

Locally, this is already set in `.env.local` (gitignored, not committed). For the
deployed site, add `SITE_PASSWORD` in your hosting provider's environment variable
settings (e.g. Vercel: Project Settings → Environment Variables) and redeploy.

If `SITE_PASSWORD` is unset, the gate is disabled and the site is fully public —
that's the state to remove the gate entirely once you're ready to launch.

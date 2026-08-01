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

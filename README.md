# CCNA Journey

A clean, modern, mobile-friendly personal learning tracker for CCNA preparation.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- LocalStorage persistence (`ccna-day-{day}`, `ccna-labs`)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
npm run start
```

## Deploy (Vercel - Recommended)

### Option 1: Dashboard
1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`
5. Output: default (auto)
6. Deploy.

### Option 2: CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Deploy (Docker)

Build image:

```bash
docker build -t ccna-journey .
```

Run container:

```bash
docker run -p 3000:3000 ccna-journey
```

Health endpoint:

- `GET /api/health`

## Notes

- Data is stored in browser LocalStorage, so each browser/device maintains its own progress.
- No auth and no external database are required.

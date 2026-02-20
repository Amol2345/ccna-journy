# CCNA Journey

A Next.js application for learning and tracking your CCNA (Cisco Certified Network Associate) certification journey.

## Features

- Built with Next.js 14 (App Router)
- TypeScript for type safety
- Vercel Speed Insights integration for performance monitoring

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Amol2345/ccna-journy.git
cd ccna-journy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel Speed Insights

This project includes Vercel Speed Insights for real-time performance monitoring. The `SpeedInsights` component is integrated in the root layout (`app/layout.tsx`).

### How it works

- The `@vercel/speed-insights` package is already installed
- The `<SpeedInsights />` component is added to the root layout
- Once deployed to Vercel, it will automatically track performance metrics
- View your metrics in the Vercel dashboard under the "Speed Insights" tab

### Enabling Speed Insights on Vercel

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to the "Speed Insights" tab
4. Click "Enable"

After deployment, the Speed Insights script will be available at `/_vercel/speed-insights/script.js`.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

```bash
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments on every push.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- [CCNA Certification](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html)

## License

MIT

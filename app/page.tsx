import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center py-16 text-center">
      <p className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
        Personal Learning Tracker
      </p>
      <h1 className="text-balance text-4xl font-bold text-slate-900 sm:text-5xl">CCNA Journey</h1>
      <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
        A focused, distraction-free workspace to document daily CCNA progress, build consistency, and retain what you learn.
      </p>

      <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
        <Link
          href="/dashboard/1"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Start Today
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          View Progress
        </Link>
      </div>

      <p className="mt-10 text-sm text-slate-500">Small daily wins compound into deep networking mastery.</p>
    </div>
  );
}

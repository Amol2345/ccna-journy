"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { DayEntry } from "@/lib/types";
import { getAllDayEntries, TOTAL_DAYS } from "@/lib/storage";

export default function DashboardPage() {
  const [entries, setEntries] = useState<DayEntry[]>([]);

  useEffect(() => {
    setEntries(getAllDayEntries());
  }, []);

  const stats = useMemo(() => {
    const daysCompleted = entries.length;
    const progress = (daysCompleted / TOTAL_DAYS) * 100;
    const avgUnderstanding =
      daysCompleted > 0
        ? entries.reduce((sum, entry) => sum + (entry.understanding || 0), 0) / daysCompleted
        : 0;
    const topics = entries.map((entry) => entry.topic).filter(Boolean);
    const continueDay = Math.min(TOTAL_DAYS, Math.max(1, daysCompleted + 1));

    return {
      daysCompleted,
      progress,
      avgUnderstanding,
      topics,
      continueDay,
    };
  }, [entries]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Learning Dashboard</h1>
        <p className="mt-1 text-sm text-slate-600">Track progress, stay consistent, and keep momentum every day.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Days Completed">
          <p className="text-3xl font-bold text-blue-700">{stats.daysCompleted}</p>
        </Card>
        <Card title="Progress">
          <p className="mb-2 text-3xl font-bold text-blue-700">{stats.progress.toFixed(0)}%</p>
          <ProgressBar value={stats.progress} />
        </Card>
        <Card title="Avg Understanding">
          <p className="text-3xl font-bold text-blue-700">{stats.avgUnderstanding.toFixed(1)}/5</p>
        </Card>
        <Card title="Topics Studied">
          <p className="text-3xl font-bold text-blue-700">{stats.topics.length}</p>
        </Card>
      </div>

      <Card title="Continue Learning" className="space-y-4">
        <p className="text-sm text-slate-600">Your consistency creates confidence. Keep building one focused day at a time.</p>
        <Link
          href={`/dashboard/${stats.continueDay}`}
          className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Continue from Day {stats.continueDay}
        </Link>
      </Card>

      <Card title="Recent Topics">
        {stats.topics.length === 0 ? (
          <p className="text-sm text-slate-500">No topics logged yet. Start your first day to populate this list.</p>
        ) : (
          <ul className="space-y-2 text-sm text-slate-700">
            {stats.topics.slice(-5).reverse().map((topic, index) => (
              <li key={`${topic}-${index}`} className="rounded-lg bg-slate-50 px-3 py-2">
                {topic}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

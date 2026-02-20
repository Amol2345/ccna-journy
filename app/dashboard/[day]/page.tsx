"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { getDayEntry, saveDayEntry, TOTAL_DAYS } from "@/lib/storage";
import { DayEntry } from "@/lib/types";

const createEmptyEntry = (day: number): DayEntry => ({
  day,
  topic: "",
  learning: "",
  commands: "",
  insight: "",
  understanding: 3,
  updatedAt: new Date().toISOString(),
});

export default function DailyEntryPage({ params }: { params: { day: string } }) {
  const day = Number(params.day);
  const validDay = Number.isFinite(day) && day > 0 ? Math.floor(day) : 1;
  const [entry, setEntry] = useState<DayEntry>(() => createEmptyEntry(validDay));
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existing = getDayEntry(validDay);
    setEntry(existing ?? createEmptyEntry(validDay));
    setLoaded(true);
  }, [validDay]);

  useEffect(() => {
    if (!loaded) return;
    const timeout = setTimeout(() => {
      saveDayEntry({ ...entry, day: validDay, updatedAt: new Date().toISOString() });
    }, 350);

    return () => clearTimeout(timeout);
  }, [entry, loaded, validDay]);

  const summary = useMemo(
    () =>
      `CCNA Journey - Day ${validDay}\nTopic: ${entry.topic || "-"}\nLearned: ${entry.learning || "-"}\nCommands: ${
        entry.commands || "-"
      }\nInsight: ${entry.insight || "-"}\nUnderstanding: ${entry.understanding}/5`,
    [entry, validDay]
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const updateField = (field: keyof DayEntry, value: string | number) => {
    setEntry((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Day {validDay} Entry</h1>
        <p className="text-xs text-slate-500">Auto-saving enabled</p>
      </div>

      <Card className="space-y-4">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">Topic studied</span>
          <input
            value={entry.topic}
            onChange={(event) => updateField("topic", event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-200 transition focus:ring"
            placeholder="e.g., OSPF basics and neighbor states"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">What did you learn today?</span>
          <textarea
            value={entry.learning}
            onChange={(event) => updateField("learning", event.target.value)}
            rows={4}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-200 transition focus:ring"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">Commands practiced</span>
          <textarea
            value={entry.commands}
            onChange={(event) => updateField("commands", event.target.value)}
            rows={3}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono text-sm outline-none ring-blue-200 transition focus:ring"
            placeholder="show ip route\nshow cdp neighbors"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">Key insight (explain simply)</span>
          <textarea
            value={entry.insight}
            onChange={(event) => updateField("insight", event.target.value)}
            rows={3}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-200 transition focus:ring"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">Understanding level: {entry.understanding}/5</span>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={entry.understanding}
            onChange={(event) => updateField("understanding", Number(event.target.value))}
            className="w-full"
          />
        </label>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            onClick={handleCopy}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {copied ? "Copied summary" : "Copy share summary"}
          </button>
          <Link
            href={`/dashboard/${Math.max(1, validDay - 1)}`}
            className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
          >
            Previous Day
          </Link>
          <Link
            href={`/dashboard/${Math.min(TOTAL_DAYS, validDay + 1)}`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Next Day
          </Link>
        </div>
      </Card>
    </div>
  );
}

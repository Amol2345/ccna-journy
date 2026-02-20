"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { DayEntry } from "@/lib/types";
import { getAllDayEntries } from "@/lib/storage";

export default function WeeklyPage() {
  const [entries, setEntries] = useState<DayEntry[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEntries(getAllDayEntries());
  }, []);

  const weeklyEntries = useMemo(() => {
    const sorted = [...entries].sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
    return sorted.slice(0, 7).reverse();
  }, [entries]);

  const summary = useMemo(() => {
    if (weeklyEntries.length === 0) {
      return "This week I started my CCNA Journey. Ready to build consistency and grow every day. #CCNA #Learning";
    }

    const average = (
      weeklyEntries.reduce((sum, entry) => sum + entry.understanding, 0) / weeklyEntries.length
    ).toFixed(1);

    return `Weekly CCNA Journey Update\n\n✅ Days studied: ${weeklyEntries.length}\n📘 Topics: ${weeklyEntries
      .map((entry) => entry.topic || `Day ${entry.day}`)
      .join(", ")}\n📈 Avg understanding: ${average}/5\n🧪 Practical focus: Consistent labs + command practice\n\n#CCNA #Networking #LearningInPublic`;
  }, [weeklyEntries]);

  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Weekly Summary</h1>
        <p className="mt-1 text-sm text-slate-600">Generate a concise update for LinkedIn or Twitter in one click.</p>
      </div>

      <Card title="Last 7 Days">
        {weeklyEntries.length === 0 ? (
          <p className="text-sm text-slate-500">No days logged in yet.</p>
        ) : (
          <ul className="space-y-2">
            {weeklyEntries.map((entry) => (
              <li key={entry.day} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                Day {entry.day}: {entry.topic || "Untitled topic"} ({entry.understanding}/5)
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card title="Shareable Post" className="space-y-3">
        <pre className="whitespace-pre-wrap rounded-xl bg-slate-900 p-4 text-xs text-slate-100">{summary}</pre>
        <button
          onClick={copySummary}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {copied ? "Copied" : "Copy weekly summary"}
        </button>
      </Card>
    </div>
  );
}

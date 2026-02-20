"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { DayEntry } from "@/lib/types";
import { getAllDayEntries } from "@/lib/storage";

export default function RevisionPage() {
  const [entries, setEntries] = useState<DayEntry[]>([]);

  useEffect(() => {
    setEntries(getAllDayEntries().filter((entry) => entry.topic.trim()));
  }, []);

  const recent = useMemo(
    () => [...entries].sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)).slice(0, 10),
    [entries]
  );

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Revision Queue</h1>
        <p className="mt-1 text-sm text-slate-600">Revisit recent topics regularly to improve retention and exam recall.</p>
      </div>

      <Card title="Last Studied Topics">
        {recent.length === 0 ? (
          <p className="text-sm text-slate-500">No entries available yet. Add a daily entry to create your revision queue.</p>
        ) : (
          <ul className="space-y-2">
            {recent.map((entry) => (
              <li key={entry.day} className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Day {entry.day}: {entry.topic}
                  </p>
                  <p className="text-xs text-slate-500">Understanding: {entry.understanding}/5</p>
                </div>
                <Link href={`/dashboard/${entry.day}`} className="text-xs font-semibold text-blue-700 hover:text-blue-800">
                  Revisit
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

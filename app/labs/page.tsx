"use client";

import { FormEvent, useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Card } from "@/components/Card";
import { getLabs, saveLabs } from "@/lib/storage";
import { LabEntry } from "@/lib/types";

export default function LabsPage() {
  const [labs, setLabs] = useState<LabEntry[]>([]);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setLabs(getLabs());
  }, []);

  useEffect(() => {
    saveLabs(labs);
  }, [labs]);

  const addLab = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;

    const newLab: LabEntry = {
      id: crypto.randomUUID(),
      title: title.trim(),
      notes: notes.trim(),
      completedAt: new Date().toISOString(),
    };

    setLabs((prev) => [newLab, ...prev]);
    setTitle("");
    setNotes("");
  };

  const removeLab = (id: string) => {
    setLabs((prev) => prev.filter((lab) => lab.id !== id));
  };

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Labs Tracker</h1>
        <p className="mt-1 text-sm text-slate-600">Document practical exercises to keep hands-on momentum.</p>
      </div>

      <Card title="Log Completed Lab">
        <form onSubmit={addLab} className="space-y-3">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g., VLAN trunking and inter-VLAN routing"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-200 transition focus:ring"
          />
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
            placeholder="What you practiced"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-200 transition focus:ring"
          />
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Add Lab
          </button>
        </form>
      </Card>

      <Card title="Completed Practical Exercises">
        {labs.length === 0 ? (
          <p className="text-sm text-slate-500">No labs logged yet.</p>
        ) : (
          <ul className="space-y-2">
            {labs.map((lab) => (
              <li key={lab.id} className="flex items-start justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{lab.title}</p>
                  {lab.notes && <p className="text-xs text-slate-600">{lab.notes}</p>}
                </div>
                <button onClick={() => removeLab(lab.id)} className="text-slate-500 transition hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

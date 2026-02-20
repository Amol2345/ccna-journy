import { DayEntry, LabEntry } from "@/lib/types";

export const TOTAL_DAYS = 60;
const LABS_KEY = "ccna-labs";

const isBrowser = () => typeof window !== "undefined";

export const dayKey = (day: number) => `ccna-day-${day}`;

export function getDayEntry(day: number): DayEntry | null {
  if (!isBrowser()) return null;
  const raw = localStorage.getItem(dayKey(day));
  return raw ? (JSON.parse(raw) as DayEntry) : null;
}

export function saveDayEntry(entry: DayEntry) {
  if (!isBrowser()) return;
  localStorage.setItem(dayKey(entry.day), JSON.stringify(entry));
}

export function getAllDayEntries(): DayEntry[] {
  if (!isBrowser()) return [];
  const entries: DayEntry[] = [];
  for (let day = 1; day <= TOTAL_DAYS; day += 1) {
    const item = localStorage.getItem(dayKey(day));
    if (item) entries.push(JSON.parse(item) as DayEntry);
  }
  return entries.sort((a, b) => a.day - b.day);
}

export function getLabs(): LabEntry[] {
  if (!isBrowser()) return [];
  const raw = localStorage.getItem(LABS_KEY);
  return raw ? (JSON.parse(raw) as LabEntry[]) : [];
}

export function saveLabs(labs: LabEntry[]) {
  if (!isBrowser()) return;
  localStorage.setItem(LABS_KEY, JSON.stringify(labs));
}

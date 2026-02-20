export type DayEntry = {
  day: number;
  topic: string;
  learning: string;
  commands: string;
  insight: string;
  understanding: number;
  updatedAt: string;
};

export type LabEntry = {
  id: string;
  title: string;
  notes?: string;
  completedAt: string;
};

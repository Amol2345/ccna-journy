import { Card } from "@/components/Card";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <h1 className="text-2xl font-bold text-slate-900">About CCNA Journey</h1>

      <Card>
        <p className="text-sm leading-6 text-slate-700">
          CCNA Journey is a personal tracking tool designed to help you study networking with intention. It keeps your
          learning focused on what matters: daily action, practical labs, command repetition, and simple reflection.
        </p>
      </Card>

      <Card title="Why daily tracking works">
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Builds consistency through small daily commitments.</li>
          <li>Improves retention by revisiting recent topics.</li>
          <li>Strengthens clarity by writing concepts in simple words.</li>
          <li>Creates professional documentation of your growth.</li>
        </ul>
      </Card>

      <Card>
        <p className="text-sm font-medium text-slate-700">
          Mastery is rarely sudden. It comes from steady practice, reflection, and repetition. Stay consistent.
        </p>
      </Card>
    </div>
  );
}

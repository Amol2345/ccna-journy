import { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section className={`rounded-2xl border border-slate-100 bg-white p-5 shadow-soft ${className}`}>
      {title && <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>}
      {children}
    </section>
  );
}

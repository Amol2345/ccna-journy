"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, FlaskConical, Home, LayoutDashboard, RotateCcw, ScrollText, Info } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/revision", label: "Revision", icon: RotateCcw },
  { href: "/labs", label: "Labs", icon: FlaskConical },
  { href: "/weekly", label: "Weekly", icon: ScrollText },
  { href: "/about", label: "About", icon: Info },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:text-base">
          <BookOpen className="h-4 w-4 text-blue-600" />
          CCNA Journey
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-2">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || (href === "/dashboard" && pathname.startsWith("/dashboard"));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition hover:bg-slate-100 sm:text-sm ${
                    active ? "bg-blue-50 text-blue-700" : "text-slate-600"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

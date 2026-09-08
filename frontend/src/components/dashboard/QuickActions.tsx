import React from "react";
import Link from "next/link";
import { PlusCircle, ScanLine, Sparkles, PieChart, ArrowRight } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      title: "Add Expense",
      description: "Quick log with natural-language text parsing",
      href: "/add-expense",
      icon: PlusCircle,
      gradient: "from-blue-600/20 to-indigo-600/10 border-blue-500/30 text-blue-400",
      accent: "hover:border-blue-500/50",
    },
    {
      title: "Scan Receipt",
      description: "Auto-extract items, tax, and merchant via OCR",
      href: "/scan-receipt",
      icon: ScanLine,
      gradient: "from-emerald-600/20 to-teal-600/10 border-emerald-500/30 text-emerald-400",
      accent: "hover:border-emerald-500/50",
    },
    {
      title: "Ask AI Advisor",
      description: "Affordability, EMI math & personalized financial strategy",
      href: "/ai-advisor",
      icon: Sparkles,
      gradient: "from-purple-600/20 to-pink-600/10 border-purple-500/30 text-purple-400",
      accent: "hover:border-purple-500/50",
    },
    {
      title: "Adjust Budgets",
      description: "Inspect category thresholds & overspending alerts",
      href: "/budgets",
      icon: PieChart,
      gradient: "from-amber-600/20 to-orange-600/10 border-amber-500/30 text-amber-400",
      accent: "hover:border-amber-500/50",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {actions.map((act) => {
        const Icon = act.icon;
        return (
          <Link
            key={act.title}
            href={act.href}
            className={`group relative flex flex-col justify-between rounded-2xl border bg-slate-900/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${act.gradient} ${act.accent}`}
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-inherit bg-slate-950/60">
                  <Icon className="h-4 w-4" />
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-slate-200" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">{act.title}</h4>
              <p className="mt-1 text-xs text-slate-400 line-clamp-2">{act.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

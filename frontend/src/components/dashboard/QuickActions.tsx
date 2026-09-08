import React from "react";
import Link from "next/link";
import { PlusCircle, ScanLine, Sparkles, PieChart, ArrowUpRight } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      title: "Add Expense",
      description: "Quick log via natural text or structured input",
      href: "/add-expense",
      icon: PlusCircle,
    },
    {
      title: "Scan Receipt",
      description: "Auto-extract line items via multimodal OCR",
      href: "/scan-receipt",
      icon: ScanLine,
    },
    {
      title: "FinTrack+ Advisor",
      description: "Affordability, EMI math & wealth strategy",
      href: "/ai-advisor",
      icon: Sparkles,
    },
    {
      title: "Adjust Budgets",
      description: "Inspect category caps & overspending alerts",
      href: "/budgets",
      icon: PieChart,
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
            className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/40 p-4.5 backdrop-blur-xl transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900 dark:group-hover:text-white" />
              </div>
              <h4 className="mt-3 text-xs font-semibold text-neutral-900 dark:text-white">
                {act.title}
              </h4>
              <p className="mt-1 text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {act.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

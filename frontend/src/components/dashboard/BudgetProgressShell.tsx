import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/utils";
import { ExternalLink, AlertTriangle } from "lucide-react";
import { BudgetShell } from "@/types";

const demoBudgets: BudgetShell[] = [
  {
    id: "b-1",
    category: "Housing & Utilities",
    spent: 1850,
    limit: 2000,
    percentage: 92.5,
    color: "bg-neutral-800 dark:bg-neutral-300",
  },
  {
    id: "b-2",
    category: "Groceries & Food",
    spent: 540,
    limit: 750,
    percentage: 72.0,
    color: "bg-emerald-600 dark:bg-emerald-500",
  },
  {
    id: "b-3",
    category: "Tech, SaaS & Cloud",
    spent: 420,
    limit: 400,
    percentage: 105.0,
    color: "bg-rose-500",
  },
  {
    id: "b-4",
    category: "Dining & Social",
    spent: 280,
    limit: 500,
    percentage: 56.0,
    color: "bg-neutral-500 dark:bg-neutral-400",
  },
];

export function BudgetProgressShell() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle>Budget Health</CardTitle>
          <CardDescription>Monthly spend thresholds and limits</CardDescription>
        </div>
        <Link
          href="/budgets"
          className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          Manage <ExternalLink className="h-3 w-3" />
        </Link>
      </CardHeader>

      <CardContent className="space-y-4">
        {demoBudgets.map((b) => {
          const isOver = b.percentage > 100;
          return (
            <div key={b.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-medium text-neutral-800 dark:text-neutral-200">
                  {b.category}
                  {isOver && (
                    <span
                      title="Budget threshold exceeded"
                      className="inline-flex items-center text-rose-500"
                    >
                      <AlertTriangle className="h-3 w-3" />
                    </span>
                  )}
                </span>
                <span className="font-mono text-neutral-500 dark:text-neutral-400 text-[11px]">
                  <strong className={isOver ? "text-rose-500 font-bold" : "text-neutral-900 dark:text-white font-medium"}>
                    {formatCurrency(b.spent)}
                  </strong>{" "}
                  / {formatCurrency(b.limit)}
                </span>
              </div>

              {/* Progress bar track */}
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isOver ? "bg-rose-500" : b.color
                  }`}
                  style={{ width: `${Math.min(b.percentage, 100)}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] text-neutral-400 dark:text-neutral-500">
                <span>{b.percentage.toFixed(0)}% used</span>
                <span>
                  {isOver
                    ? `${formatCurrency(b.spent - b.limit)} over`
                    : `${formatCurrency(b.limit - b.spent)} left`}
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

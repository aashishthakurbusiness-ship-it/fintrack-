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
    color: "bg-blue-500",
  },
  {
    id: "b-2",
    category: "Groceries & Food",
    spent: 540,
    limit: 750,
    percentage: 72.0,
    color: "bg-emerald-500",
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
    color: "bg-indigo-500",
  },
];

export function BudgetProgressShell() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle>Budget Health</CardTitle>
          <CardDescription>Monthly spend thresholds and overspending limits</CardDescription>
        </div>
        <Link
          href="/budgets"
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
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
                <span className="flex items-center gap-1.5 font-medium text-slate-200">
                  {b.category}
                  {isOver && (
                    <span
                      title="Budget exceeded threshold"
                      className="inline-flex items-center text-rose-400"
                    >
                      <AlertTriangle className="h-3 w-3" />
                    </span>
                  )}
                </span>
                <span className="font-mono text-slate-400">
                  <strong className={isOver ? "text-rose-400 font-bold" : "text-white"}>
                    {formatCurrency(b.spent)}
                  </strong>{" "}
                  / {formatCurrency(b.limit)}
                </span>
              </div>

              {/* Progress bar track */}
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isOver ? "bg-rose-500" : b.color
                  }`}
                  style={{ width: `${Math.min(b.percentage, 100)}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] text-slate-400">
                <span>{b.percentage.toFixed(0)}% utilized</span>
                <span>
                  {isOver
                    ? `${formatCurrency(b.spent - b.limit)} over budget`
                    : `${formatCurrency(b.limit - b.spent)} remaining`}
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

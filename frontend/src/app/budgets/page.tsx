import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PieChart, Plus, AlertTriangle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function BudgetsPage() {
  const budgetList = [
    {
      category: "Housing & Utilities",
      spent: 1850,
      limit: 2000,
      percent: 92.5,
      status: "warning",
      alertAt: "85%",
    },
    {
      category: "Food & Groceries",
      spent: 540,
      limit: 750,
      percent: 72.0,
      status: "good",
      alertAt: "80%",
    },
    {
      category: "Tech, SaaS & Cloud",
      spent: 420,
      limit: 400,
      percent: 105.0,
      status: "breached",
      alertAt: "90%",
    },
    {
      category: "Dining & Social",
      spent: 280,
      limit: 500,
      percent: 56.0,
      status: "good",
      alertAt: "80%",
    },
    {
      category: "Transportation",
      spent: 190.4,
      limit: 300,
      percent: 63.5,
      status: "good",
      alertAt: "80%",
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight flex items-center gap-2">
            <PieChart className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            Budget Thresholds & Limits
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Designate spending caps. FinTrack+ alerts you before limits are breached.
          </p>
        </div>

        <Button size="sm" variant="primary" className="gap-2">
          <Plus className="h-3.5 w-3.5" />
          Create Budget
        </Button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4.5">
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase font-medium">Total Monthly Budget</span>
          <div className="mt-2 text-2xl font-bold font-mono text-neutral-900 dark:text-white">$3,950.00</div>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">Spend cap across 5 categories</p>
        </Card>

        <Card className="p-4.5">
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase font-medium">Current Month Spend</span>
          <div className="mt-2 text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">$3,280.40</div>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">83% utilized (22 days left)</p>
        </Card>

        <Card className="p-4.5 border-rose-500/20 bg-rose-500/5">
          <span className="text-[11px] text-rose-700 dark:text-rose-400 uppercase font-medium">Overspending Alert</span>
          <div className="mt-2 text-2xl font-bold font-mono text-rose-700 dark:text-rose-400">1 Category Breached</div>
          <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">Tech & SaaS exceeded by $20.00</p>
        </Card>
      </div>

      {/* Budget List Shell */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Active Category Budgets</CardTitle>
          <CardDescription>Real-time progress towards designated ceilings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {budgetList.map((item) => {
            const isBreached = item.status === "breached";
            const isWarning = item.status === "warning";

            return (
              <div
                key={item.category}
                className="space-y-2 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 p-3.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-neutral-900 dark:text-white text-xs">{item.category}</span>
                    {isBreached && (
                      <Badge variant="destructive" className="gap-1">
                        <AlertTriangle className="h-3 w-3" /> Over
                      </Badge>
                    )}
                    {isWarning && (
                      <Badge variant="warning" className="gap-1">
                        Near Cap
                      </Badge>
                    )}
                    {!isBreached && !isWarning && (
                      <Badge variant="success" className="gap-1">
                        Healthy
                      </Badge>
                    )}
                  </div>

                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    <span
                      className={
                        isBreached
                          ? "text-rose-600 dark:text-rose-400 font-bold"
                          : "text-neutral-900 dark:text-white font-medium"
                      }
                    >
                      {formatCurrency(item.spent)}
                    </span>{" "}
                    of {formatCurrency(item.limit)} ({item.percent.toFixed(1)}%)
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-1.5 w-full rounded-full bg-neutral-200/80 dark:bg-neutral-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isBreached
                        ? "bg-rose-500"
                        : isWarning
                        ? "bg-amber-500"
                        : "bg-emerald-600 dark:bg-emerald-500"
                    }`}
                    style={{ width: `${Math.min(item.percent, 100)}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] text-neutral-400 dark:text-neutral-500 pt-0.5">
                  <span>Alert set at {item.alertAt} of limit</span>
                  <span>
                    {isBreached
                      ? `${formatCurrency(item.spent - item.limit)} over limit`
                      : `${formatCurrency(item.limit - item.spent)} available`}
                  </span>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

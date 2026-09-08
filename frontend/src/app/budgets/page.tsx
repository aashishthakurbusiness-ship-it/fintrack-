import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { PieChart, Plus, AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";
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
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <PieChart className="h-6 w-6 text-amber-400" />
            Budget Thresholds & Overspending Guard
          </h2>
          <p className="text-sm text-slate-400">
            Set strict or adaptive spending limits. AI Agent alerts you before categories are breached.
          </p>
        </div>

        <Button size="sm" variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          Create New Budget
        </Button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <span className="text-xs text-slate-400 uppercase font-medium">Total Monthly Budget</span>
          <div className="mt-2 text-2xl font-bold font-mono text-white">$3,950.00</div>
          <p className="text-[11px] text-slate-400 mt-1">Total spend cap across 5 active categories</p>
        </Card>

        <Card className="p-4">
          <span className="text-xs text-slate-400 uppercase font-medium">Current Month Spend</span>
          <div className="mt-2 text-2xl font-bold font-mono text-emerald-400">$3,280.40</div>
          <p className="text-[11px] text-slate-400 mt-1">83% of total budget consumed (22 days left)</p>
        </Card>

        <Card className="p-4 border-amber-500/20 bg-amber-950/10">
          <span className="text-xs text-amber-400 uppercase font-medium">Overspending Alert</span>
          <div className="mt-2 text-2xl font-bold font-mono text-rose-400">1 Category Breached</div>
          <p className="text-[11px] text-slate-400 mt-1">Tech & SaaS exceeded by $20.00</p>
        </Card>
      </div>

      {/* Budget List Shell */}
      <Card>
        <CardHeader>
          <CardTitle>Active Category Budgets</CardTitle>
          <CardDescription>Real-time progress towards designated spending ceilings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {budgetList.map((item) => {
            const isBreached = item.status === "breached";
            const isWarning = item.status === "warning";

            return (
              <div key={item.category} className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-sm">{item.category}</span>
                    {isBreached && (
                      <Badge variant="destructive" className="gap-1">
                        <AlertTriangle className="h-3 w-3" /> Over Budget
                      </Badge>
                    )}
                    {isWarning && (
                      <Badge variant="warning" className="gap-1">
                        Near Limit
                      </Badge>
                    )}
                    {!isBreached && !isWarning && (
                      <Badge variant="success" className="gap-1">
                        Healthy
                      </Badge>
                    )}
                  </div>

                  <div className="text-xs text-slate-400 font-mono">
                    <span className={isBreached ? "text-rose-400 font-bold" : "text-white font-semibold"}>
                      {formatCurrency(item.spent)}
                    </span>{" "}
                    of {formatCurrency(item.limit)} ({item.percent.toFixed(1)}%)
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isBreached ? "bg-rose-500" : isWarning ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${Math.min(item.percent, 100)}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Alert configured at {item.alertAt} of limit</span>
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

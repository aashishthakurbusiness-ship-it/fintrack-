import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BarChart3, TrendingUp, Calendar, Layers } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function AnalyticsPage() {
  const categories = [
    { name: "Housing & Mortgage", amount: 1850, percent: 56.4, color: "bg-neutral-800 dark:bg-neutral-200" },
    { name: "Groceries & Food", amount: 540, percent: 16.5, color: "bg-emerald-600 dark:bg-emerald-500" },
    { name: "Tech, SaaS & Telecom", amount: 420, percent: 12.8, color: "bg-neutral-500 dark:bg-neutral-400" },
    { name: "Dining & Social", amount: 280, percent: 8.5, color: "bg-amber-500" },
    { name: "Transportation & Fuel", amount: 190.4, percent: 5.8, color: "bg-neutral-400 dark:bg-neutral-600" },
  ];

  const monthlyHistory = [
    { month: "Apr", income: 7800, expense: 3100 },
    { month: "May", income: 8100, expense: 3450 },
    { month: "Jun", income: 8000, expense: 2950 },
    { month: "Jul", income: 8300, expense: 3200 },
    { month: "Aug", income: 8200, expense: 3500 },
    { month: "Sep (Proj)", income: 8420, expense: 3280 },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            Financial Analytics & Insights
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Cash flow trajectory, burn velocity, and categorical allocation.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <Calendar className="h-3.5 w-3.5" />
            Year 2026 (YTD)
          </Button>
        </div>
      </div>

      {/* High-level KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4.5">
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-medium">
            Net Savings YTD
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
              $31,480.00
            </span>
            <Badge variant="emerald" className="gap-1">
              <TrendingUp className="h-3 w-3" /> +14.2%
            </Badge>
          </div>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">Average monthly savings: $5,246</p>
        </Card>

        <Card className="p-4.5">
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-medium">
            Monthly Burn Rate
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-neutral-900 dark:text-white">
              $3,246.60
            </span>
            <Badge variant="success" className="gap-1">-4.1% burn</Badge>
          </div>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">Comfortably within 40% income cap</p>
        </Card>

        <Card className="p-4.5">
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-medium">
            Runway Capacity
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-neutral-900 dark:text-white">
              13.2 Months
            </span>
            <Badge variant="secondary">Optimal</Badge>
          </div>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">Based on $42,850 liquid assets</p>
        </Card>
      </div>

      {/* Visual Chart Shell: Monthly Income vs Expenses */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Cash Flow Velocity</CardTitle>
              <CardDescription>Income vs expense progression over 6 months</CardDescription>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300 text-xs">
                <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" /> Income
              </span>
              <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300 text-xs">
                <span className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600" /> Expenses
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-3 sm:gap-6 pt-6 pb-2 items-end h-52 border-b border-neutral-100 dark:border-neutral-800">
            {monthlyHistory.map((item) => (
              <div key={item.month} className="flex flex-col items-center gap-2 h-full justify-end">
                <div className="flex items-end gap-1 sm:gap-2 w-full justify-center h-full">
                  {/* Income bar */}
                  <div
                    style={{ height: `${(item.income / 9000) * 100}%` }}
                    className="w-3.5 sm:w-6 rounded-t-sm bg-neutral-900 dark:bg-white hover:opacity-80 transition-opacity"
                    title={`${item.month} Income: $${item.income}`}
                  />
                  {/* Expense bar */}
                  <div
                    style={{ height: `${(item.expense / 9000) * 100}%` }}
                    className="w-3.5 sm:w-6 rounded-t-sm bg-neutral-300 dark:bg-neutral-700 hover:opacity-80 transition-opacity"
                    title={`${item.month} Expense: $${item.expense}`}
                  />
                </div>
                <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">{item.month}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown Shell */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <CardTitle className="text-sm">Categorical Distribution</CardTitle>
          </div>
          <CardDescription>Breakdown of current monthly expenditure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">{cat.name}</span>
                <span className="font-mono text-neutral-500 dark:text-neutral-400 text-[11px]">
                  {formatCurrency(cat.amount)} ({cat.percent}%)
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                <div
                  className={`h-full rounded-full ${cat.color}`}
                  style={{ width: `${cat.percent}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Sparkles, ArrowRight, ShieldAlert, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AdvisorInsightShell() {
  const suggestedPrompts = [
    "Can I afford a $1,200 gadget purchase with my current cash flow?",
    "Calculate my optimal EMI vs upfront payment for a vehicle loan.",
    "Which recurring subscriptions are underutilized this quarter?",
  ];

  return (
    <Card className="relative overflow-hidden border-neutral-200/80 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/50">
      <CardHeader className="flex flex-row items-start justify-between pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-sm">FinTrack+ Intelligence Brief</CardTitle>
              <span className="rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800/90 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:text-neutral-300">
                COPILOT ACTIVE
              </span>
            </div>
            <CardDescription>
              Continuous autonomous monitoring of burn rate, liabilities, and surplus
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3.5">
        {/* Insight item 1: Overspending warning */}
        <div className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 p-3.5">
          <ShieldAlert className="h-4 w-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-rose-700 dark:text-rose-300">
              Overspending detected in Tech & Cloud Subscriptions (+5% above threshold)
            </p>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
              Annual renewal for 2 cloud services occurred on Sep 02. Consolidating could save ~$45/mo.
            </p>
          </div>
        </div>

        {/* Insight item 2: Savings Opportunity with muted green accent */}
        <div className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5">
          <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              Savings Surplus Alert: $850 unallocated surplus
            </p>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
              Your emergency fund target (6 months) is 94% funded. You are on track to achieve full buffer
              ahead of schedule.
            </p>
          </div>
        </div>

        {/* Quick prompt launcher buttons */}
        <div className="pt-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            Ask FinTrack+
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <Link key={prompt} href="/ai-advisor" className="block">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 px-2.5 py-1.5 text-[11px] text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                  <span>&ldquo;{prompt}&rdquo;</span>
                  <ArrowRight className="h-3 w-3 text-neutral-400" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Link href="/ai-advisor">
            <Button size="sm" variant="outline" className="gap-2 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400" />
              Open Full Advisor
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

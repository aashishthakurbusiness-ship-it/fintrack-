import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Sparkles, ArrowRight, ShieldAlert, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AdvisorInsightShell() {
  const suggestedPrompts = [
    "Can I afford a $1,200 gadget purchase with my current cash flow?",
    "Calculate my optimal EMI vs upfront payment for a car loan.",
    "Which recurring subscriptions are underutilized this quarter?",
  ];

  return (
    <Card className="relative overflow-hidden border-purple-500/20 bg-gradient-to-br from-purple-950/20 via-slate-900/80 to-slate-950">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

      <CardHeader className="flex flex-row items-start justify-between pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-base">AI Advisor Intelligence Brief</CardTitle>
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-400">
                PROACTIVE COPILOT
              </span>
            </div>
            <CardDescription>
              Continuous autonomous monitoring of cash flow, subscriptions, and liabilities
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Insight item 1: Overspending warning */}
        <div className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-950/10 p-3.5">
          <ShieldAlert className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-rose-300">
              Overspending detected in Tech & Cloud Subscriptions (+5% above threshold)
            </p>
            <p className="text-[11px] text-slate-400">
              Annual renewal for 2 unflagged cloud services occurred on Sep 02. Consolidating could
              save ~$45/mo.
            </p>
          </div>
        </div>

        {/* Insight item 2: Savings Opportunity */}
        <div className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-3.5">
          <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-emerald-300">
              Savings Surplus Alert: $850 unallocated surplus
            </p>
            <p className="text-[11px] text-slate-400">
              Your emergency fund target (6 months) is 94% funded. You are on track to achieve full
              safety buffer ahead of schedule.
            </p>
          </div>
        </div>

        {/* Quick prompt launcher buttons */}
        <div className="pt-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Ask Advisor
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <Link key={prompt} href="/ai-advisor" className="block">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 hover:border-purple-500/40 hover:text-purple-300 hover:bg-slate-800 transition-all cursor-pointer">
                  <span>&ldquo;{prompt}&rdquo;</span>
                  <ArrowRight className="h-3 w-3 text-slate-500" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Link href="/ai-advisor">
            <Button size="sm" variant="outline" className="gap-2 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              Open Full AI Financial Advisor
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Send, Bot, Calculator, TrendingUp, AlertCircle } from "lucide-react";

export default function AiAdvisorPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            FinTrack+ Advisor
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Autonomous wealth copilot: Affordability calculations, EMI simulations, and proactive guidance.
          </p>
        </div>
        <Badge variant="secondary" className="self-start sm:self-auto">
          Autonomous Copilot
        </Badge>
      </div>

      {/* Main Advisor Workspace: Chat & Calculator Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Interactive Chat Stream Shell */}
        <Card className="lg:col-span-2 flex flex-col h-[560px]">
          <CardHeader className="border-b border-neutral-100 dark:border-neutral-800/80 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60">
                <Bot className="h-3.5 w-3.5" />
              </div>
              <div>
                <CardTitle className="text-xs font-semibold">Intelligence Stream</CardTitle>
                <CardDescription>Grounded on your income, liabilities, and safety buffer</CardDescription>
              </div>
            </div>
          </CardHeader>

          {/* Conversation history shell */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Advisor message */}
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold shrink-0">
                F+
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-neutral-50 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 p-4 text-xs text-neutral-800 dark:text-neutral-200 max-w-lg space-y-2">
                <p className="font-semibold text-neutral-900 dark:text-white">
                  Hello John, I&apos;ve analyzed your current cash flow.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  You have a projected surplus of <strong>$5,139.60</strong> this month after scheduled
                  obligations. An 8% increase in subscription renewals was flagged, but your 61% savings rate
                  remains well above your 50% target.
                </p>
                <p className="text-neutral-500 dark:text-neutral-400">
                  How can I help you today? You can evaluate big purchases, simulate an EMI, or optimize
                  investments.
                </p>
              </div>
            </div>

            {/* User message */}
            <div className="flex items-start gap-3 justify-end">
              <div className="rounded-2xl rounded-tr-sm bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 p-3.5 text-xs max-w-md shadow-sm">
                Can I afford to buy a $1,400 OLED monitor this weekend without hurting my savings goal?
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold text-xs shrink-0">
                JD
              </div>
            </div>

            {/* Advisor reply with calculation breakdown */}
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold shrink-0">
                F+
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-neutral-50 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 p-4 text-xs text-neutral-800 dark:text-neutral-200 max-w-lg space-y-3">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>Affordability Verdict: SAFE TO PURCHASE</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  A $1,400 one-off purchase adjusts your September surplus from $5,139 to $3,739. Your
                  savings rate will be <strong>44.4%</strong> for this single month, while your 6-month
                  emergency reserve ($24,000) remains untouched.
                </p>
                <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-3 space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                    <span>Monthly Inflow:</span> <span className="text-neutral-900 dark:text-white font-medium">$8,420.00</span>
                  </div>
                  <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                    <span>Purchase Cost:</span> <span className="text-rose-600 dark:text-rose-400 font-medium">-$1,400.00</span>
                  </div>
                  <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                    <span>Remaining Discretionary:</span> <span className="text-emerald-600 dark:text-emerald-400 font-semibold">$3,739.60</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Input prompt shell */}
          <div className="p-3.5 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Ask FinTrack+ about affordability, EMI options, tax strategies, or spending cuts..."
                className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 px-3.5 py-2.5 pr-20 text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/20"
              />
              <div className="absolute right-1.5">
                <Button size="sm" variant="primary" className="h-7 text-xs px-3">
                  <Send className="h-3 w-3" />
                  <span>Ask</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Right 1 Col: Quick EMI & Affordability Simulator Shell */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                <CardTitle className="text-xs font-semibold">EMI & Loan Simulator</CardTitle>
              </div>
              <CardDescription>Monthly payment & interest modeling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input label="Principal Amount ($)" placeholder="25,000" defaultValue="25000" />
              <div className="grid grid-cols-2 gap-2">
                <Input label="Interest (%)" placeholder="6.5" defaultValue="6.5" />
                <Input label="Tenure (Mo)" placeholder="36" defaultValue="36" />
              </div>

              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/60 p-3 space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-700 dark:text-neutral-300">
                  <span>Monthly EMI:</span>
                  <strong className="font-mono text-neutral-900 dark:text-white text-xs">$766.19</strong>
                </div>
                <div className="flex justify-between text-neutral-500 dark:text-neutral-400 text-[11px]">
                  <span>Total Interest:</span>
                  <span className="font-mono text-neutral-700 dark:text-neutral-300">$2,582.78</span>
                </div>
                <div className="flex justify-between text-neutral-500 dark:text-neutral-400 text-[11px]">
                  <span>Affordability Index:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Healthy (9.1% inflow)</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full text-xs">
                Run Cash Flow Check
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-500/20 bg-amber-500/5">
            <CardContent className="p-4 flex items-start gap-3">
              <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-semibold text-amber-800 dark:text-amber-300">Overspending Guard Active</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px] leading-relaxed">
                  FinTrack+ alerts you if single purchases exceed 15% of your discretionary monthly surplus.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

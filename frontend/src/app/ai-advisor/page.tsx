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
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-400" />
            AI Financial Advisor
          </h2>
          <p className="text-sm text-slate-400">
            Autonomous financial intelligence: Affordability modeling, EMI calculators, and custom spending advice.
          </p>
        </div>
        <Badge variant="purple" className="self-start sm:self-auto">
          Autonomous Copilot
        </Badge>
      </div>

      {/* Main Advisor Workspace: Chat & Calculator Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Interactive Conversational Shell */}
        <Card className="lg:col-span-2 flex flex-col h-[580px] border-slate-800">
          <CardHeader className="border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-sm">Advisor Intelligence Stream</CardTitle>
                <CardDescription>Grounded on your income, obligations, and cash reserves</CardDescription>
              </div>
            </div>
          </CardHeader>

          {/* Conversation history shell */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Advisor message */}
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-slate-900 border border-slate-800 p-4 text-xs text-slate-200 max-w-lg space-y-2">
                <p className="font-semibold text-white">Hello John, I&apos;ve analyzed your September cash flow.</p>
                <p>
                  You have a projected surplus of <strong>$5,139.60</strong> this month after scheduled
                  bills. I noticed an 8% increase in subscription renewals, but your 61% savings rate remains
                  well above your 50% target.
                </p>
                <p className="text-slate-400">
                  How can I help you today? You can ask about big purchases, calculate an EMI, or optimize
                  investments.
                </p>
              </div>
            </div>

            {/* User message */}
            <div className="flex items-start gap-3 justify-end">
              <div className="rounded-2xl rounded-tr-sm bg-blue-600 text-white p-3.5 text-xs max-w-md">
                Can I afford to buy a $1,400 OLED monitor this weekend without hurting my savings goal?
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-xs shrink-0">
                JD
              </div>
            </div>

            {/* Advisor reply with calculation breakdown */}
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-slate-900 border border-slate-800 p-4 text-xs text-slate-200 max-w-lg space-y-3">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <TrendingUp className="h-4 w-4" />
                  <span>Affordability Verdict: SAFE TO PURCHASE</span>
                </div>
                <p>
                  A $1,400 one-off purchase will reduce your September savings buffer from $5,139 to $3,739.
                  Your savings rate will adjust to <strong>44.4%</strong> for this single month, while your
                  6-month emergency reserve ($24,000) remains 100% untouched.
                </p>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-2.5 space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-400">
                    <span>Current Inflow:</span> <span className="text-white">$8,420.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Purchase Cost:</span> <span className="text-rose-400">-$1,400.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Remaining Discretionary:</span> <span className="text-emerald-400">$3,739.60</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Input prompt shell */}
          <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Ask about affordability, EMI options, tax strategies, or spending cuts..."
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 pr-24 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              />
              <div className="absolute right-2">
                <Button size="sm" variant="primary" className="h-8 gap-1.5 text-xs bg-purple-600 hover:bg-purple-500">
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
                <Calculator className="h-4 w-4 text-blue-400" />
                <CardTitle className="text-sm">EMI & Loan Simulator</CardTitle>
              </div>
              <CardDescription>Instant monthly payment & interest analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input label="Principal Loan Amount ($)" placeholder="25,000" defaultValue="25000" />
              <div className="grid grid-cols-2 gap-2">
                <Input label="Interest Rate (%)" placeholder="6.5" defaultValue="6.5" />
                <Input label="Tenure (Months)" placeholder="36" defaultValue="36" />
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-3.5 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Monthly EMI:</span>
                  <strong className="font-mono text-white text-sm">$766.19</strong>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Total Interest Payable:</span>
                  <span className="font-mono text-slate-300">$2,582.78</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Affordability Index:</span>
                  <span className="text-emerald-400 font-semibold">Comfortable (9.1% of inflow)</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full text-xs">
                Evaluate with Current Cash Flow
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-500/20 bg-amber-950/10">
            <CardContent className="p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-semibold text-amber-300">Overspending Guard Active</p>
                <p className="text-slate-400 text-[11px]">
                  The advisor alerts you when single transactions exceed 15% of discretionary monthly surplus.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

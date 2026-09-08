import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, Sparkles, ExternalLink } from "lucide-react";
import { RecentTransactionShell } from "@/types";

const demoTransactions: RecentTransactionShell[] = [
  {
    id: "tx-1",
    title: "AWS Cloud Infrastructure",
    category: "Software & Cloud",
    amount: 142.5,
    type: "expense",
    date: "Today, 10:24 AM",
    method: "Corporate Visa •• 4242",
    aiCategorized: true,
  },
  {
    id: "tx-2",
    title: "Client Retainer (Acme Corp)",
    category: "Income",
    amount: 3500.0,
    type: "income",
    date: "Yesterday",
    method: "Direct Deposit ACH",
    aiCategorized: false,
  },
  {
    id: "tx-3",
    title: "Whole Foods Market",
    category: "Groceries",
    amount: 86.4,
    type: "expense",
    date: "Sep 06, 2026",
    method: "Apple Pay",
    aiCategorized: true,
  },
  {
    id: "tx-4",
    title: "Uber Tech & Transit",
    category: "Transportation",
    amount: 28.75,
    type: "expense",
    date: "Sep 05, 2026",
    method: "Debit Card •• 9012",
    aiCategorized: true,
  },
  {
    id: "tx-5",
    title: "Blue Bottle Coffee",
    category: "Dining & Coffee",
    amount: 7.2,
    type: "expense",
    date: "Sep 05, 2026",
    method: "Apple Pay",
    aiCategorized: true,
  },
];

export function RecentTransactionsShell() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest parsed financial transactions & statement line items</CardDescription>
        </div>
        <Link
          href="/transactions"
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          View All <ExternalLink className="h-3 w-3" />
        </Link>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-400">
                <th className="pb-3 font-semibold">Transaction</th>
                <th className="pb-3 font-semibold">Category</th>
                <th className="pb-3 font-semibold hidden md:table-cell">Payment Method</th>
                <th className="pb-3 font-semibold hidden sm:table-cell">Date</th>
                <th className="pb-3 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {demoTransactions.map((tx) => {
                const isIncome = tx.type === "income";
                return (
                  <tr key={tx.id} className="group hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs ${
                            isIncome
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                              : "border-slate-700 bg-slate-800 text-slate-300"
                          }`}
                        >
                          {isIncome ? (
                            <ArrowUpRight className="h-4 w-4" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-white text-xs sm:text-sm">{tx.title}</p>
                          <p className="text-[11px] text-slate-400 sm:hidden">{tx.date}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-1.5">
                        <Badge variant="secondary" className="text-[11px] font-normal">
                          {tx.category}
                        </Badge>
                        {tx.aiCategorized && (
                          <span
                            title="Auto-categorized by AI"
                            className="inline-flex items-center rounded-full bg-purple-500/10 p-1 text-purple-400 border border-purple-500/20"
                          >
                            <Sparkles className="h-2.5 w-2.5" />
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3.5 pr-4 text-xs text-slate-400 hidden md:table-cell font-mono">
                      {tx.method}
                    </td>

                    <td className="py-3.5 pr-4 text-xs text-slate-400 hidden sm:table-cell">
                      {tx.date}
                    </td>

                    <td className="py-3.5 text-right font-mono font-semibold text-xs sm:text-sm">
                      <span className={isIncome ? "text-emerald-400" : "text-slate-100"}>
                        {isIncome ? "+" : "-"}
                        {formatCurrency(tx.amount)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

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
          <CardDescription>Latest parsed transactions & statement line items</CardDescription>
        </div>
        <Link
          href="/transactions"
          className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          View All <ExternalLink className="h-3 w-3" />
        </Link>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-200/80 dark:border-neutral-800 text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                <th className="pb-3 font-medium">Transaction</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium hidden md:table-cell">Payment Method</th>
                <th className="pb-3 font-medium hidden sm:table-cell">Date</th>
                <th className="pb-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
              {demoTransactions.map((tx) => {
                const isIncome = tx.type === "income";
                return (
                  <tr key={tx.id} className="group hover:bg-neutral-50/70 dark:hover:bg-neutral-800/20 transition-colors">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-lg border text-xs ${
                            isIncome
                              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                          }`}
                        >
                          {isIncome ? (
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          ) : (
                            <ArrowDownRight className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900 dark:text-white text-xs">{tx.title}</p>
                          <p className="text-[10px] text-neutral-400 sm:hidden">{tx.date}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-1.5">
                        <Badge variant="secondary" className="text-[10px] font-normal">
                          {tx.category}
                        </Badge>
                        {tx.aiCategorized && (
                          <span
                            title="Auto-categorized by FinTrack+"
                            className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-0.5 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700/60"
                          >
                            <Sparkles className="h-2.5 w-2.5" />
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 pr-4 text-[11px] text-neutral-500 dark:text-neutral-400 hidden md:table-cell font-mono">
                      {tx.method}
                    </td>

                    <td className="py-3 pr-4 text-[11px] text-neutral-500 dark:text-neutral-400 hidden sm:table-cell">
                      {tx.date}
                    </td>

                    <td className="py-3 text-right font-mono font-medium text-xs">
                      <span
                        className={
                          isIncome
                            ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                            : "text-neutral-900 dark:text-neutral-200"
                        }
                      >
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

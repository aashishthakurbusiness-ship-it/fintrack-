import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { RecentTransactionsShell } from "@/components/dashboard/RecentTransactionsShell";
import { Filter, Download, Plus, ArrowLeftRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight flex items-center gap-2">
            <ArrowLeftRight className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            Transaction Ledger
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Historical transaction records, categorizations & account reconciliations
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-3.5 w-3.5" />
            Export CSV
          </Button>
          <Link href="/add-expense">
            <Button size="sm" variant="primary" className="gap-2">
              <Plus className="h-3.5 w-3.5" />
              New Entry
            </Button>
          </Link>
        </div>
      </div>

      {/* Filter Toolbar Shell */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <Input placeholder="Filter by merchant or note..." />
            <div className="flex items-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 px-3 py-2 text-xs text-neutral-600 dark:text-neutral-400 justify-between">
              <span>All Categories</span>
              <Filter className="h-3.5 w-3.5 text-neutral-400" />
            </div>
            <div className="flex items-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 px-3 py-2 text-xs text-neutral-600 dark:text-neutral-400 justify-between">
              <span>Date: Last 30 Days</span>
            </div>
            <div className="flex items-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 px-3 py-2 text-xs text-neutral-600 dark:text-neutral-400 justify-between">
              <span>Type: All Flows</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Data Shell */}
      <RecentTransactionsShell />

      {/* FinTrack+ Categorization notice */}
      <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
          <div>
            <p className="text-xs font-semibold text-neutral-900 dark:text-white">
              FinTrack+ Auto-Categorization
            </p>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              Transactions are classified autonomously into 24+ accounting categories upon Supabase sync.
            </p>
          </div>
        </div>
        <Badge variant="secondary">Phase 2</Badge>
      </div>
    </div>
  );
}

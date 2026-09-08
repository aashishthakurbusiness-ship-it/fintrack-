import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
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
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <ArrowLeftRight className="h-6 w-6 text-blue-400" />
            Transaction Ledger
          </h2>
          <p className="text-sm text-slate-400">
            Historical transaction entries, auto-categorized records & account reconciliations
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Link href="/add-expense">
            <Button size="sm" variant="primary" className="gap-2">
              <Plus className="h-4 w-4" />
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
            <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-400 justify-between">
              <span>All Categories</span>
              <Filter className="h-4 w-4 text-slate-500" />
            </div>
            <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-400 justify-between">
              <span>Date: Last 30 Days</span>
            </div>
            <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-400 justify-between">
              <span>Type: All Flows</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Data Shell */}
      <RecentTransactionsShell />

      {/* Future feature indicator */}
      <div className="rounded-xl border border-purple-500/20 bg-purple-950/10 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-purple-400" />
          <div>
            <p className="text-xs font-semibold text-white">AI Auto-Categorization Engine</p>
            <p className="text-[11px] text-slate-400">
              Transactions will be classified autonomously into 24+ standard accounting categories upon Supabase sync.
            </p>
          </div>
        </div>
        <Badge variant="purple">Phase 2</Badge>
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { PlusCircle, Sparkles, Send, Receipt, Calendar } from "lucide-react";
import Link from "next/link";

export default function AddExpensePage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <PlusCircle className="h-6 w-6 text-blue-400" />
          Add Expense & Cash Flow Entry
        </h2>
        <p className="text-sm text-slate-400">
          Record transactions manually or type naturally to let AI parse amounts, dates, and categories.
        </p>
      </div>

      {/* Natural Language Smart Entry Shell */}
      <Card className="border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 via-slate-900 to-slate-950">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-400" />
              <CardTitle className="text-base">Natural Language Smart Entry</CardTitle>
            </div>
            <Badge variant="default">AI Parser Ready</Badge>
          </div>
          <CardDescription>
            Type in plain English (e.g. &ldquo;Spent $34.50 at Starbucks this morning for coffee with clients&rdquo;)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative">
            <textarea
              rows={3}
              placeholder="e.g. Paid $120 for electricity bill today via checking account..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            <div className="absolute right-3 bottom-3 flex items-center gap-2">
              <Button size="sm" variant="primary" className="gap-1.5 text-xs">
                <Send className="h-3.5 w-3.5" />
                <span>Parse & Save</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-300">Try examples:</span>
            <span className="cursor-pointer text-indigo-400 hover:underline">
              &ldquo;Bought $85 grocery at Whole Foods&rdquo;
            </span>
            <span>•</span>
            <span className="cursor-pointer text-indigo-400 hover:underline">
              &ldquo;Uber ride to airport $42 yesterday&rdquo;
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Structured Manual Form Shell */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Structured Transaction Details</CardTitle>
          <CardDescription>Standard transaction fields for manual recording</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Amount ($)" type="number" placeholder="0.00" step="0.01" />
            <Input label="Merchant / Payee" placeholder="e.g. Apple Store, Landlord" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">Category</label>
              <select className="flex h-10 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <option>Select Category...</option>
                <option>Housing & Rent</option>
                <option>Groceries</option>
                <option>Software & SaaS</option>
                <option>Dining & Social</option>
                <option>Transportation</option>
                <option>Utilities</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">Payment Account</label>
              <select className="flex h-10 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <option>Primary Checking (•• 4242)</option>
                <option>High Yield Savings (•• 8910)</option>
                <option>Corporate Credit Card (•• 1012)</option>
                <option>Cash</option>
              </select>
            </div>

            <Input label="Date" type="date" defaultValue="2026-09-08" />
          </div>

          <Input label="Notes (Optional)" placeholder="Add context, project name, or client tag..." />

          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <Link href="/scan-receipt" className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:underline">
              <Receipt className="h-4 w-4" />
              Have a paper receipt? Scan with Vision OCR instead
            </Link>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button variant="primary" size="sm">Save Transaction</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

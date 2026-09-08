import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { PlusCircle, Sparkles, Send, Receipt } from "lucide-react";
import Link from "next/link";

export default function AddExpensePage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight flex items-center gap-2">
          <PlusCircle className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          Add Expense & Cash Flow Entry
        </h2>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Record transactions manually or type naturally to let FinTrack+ parse amounts, dates, and categories.
        </p>
      </div>

      {/* Natural Language Smart Entry Shell */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
              <CardTitle className="text-sm">Natural Language Smart Entry</CardTitle>
            </div>
            <Badge variant="secondary">Parser Ready</Badge>
          </div>
          <CardDescription>
            Type in plain text (e.g. &ldquo;Spent $34.50 at Starbucks this morning for coffee with clients&rdquo;)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative">
            <textarea
              rows={3}
              placeholder="e.g. Paid $120 for electricity bill today via checking account..."
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/80 p-3.5 text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400/10"
            />
            <div className="absolute right-3 bottom-3 flex items-center gap-2">
              <Button size="sm" variant="primary" className="gap-1.5 text-xs">
                <Send className="h-3 w-3" />
                <span>Parse & Save</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Try examples:</span>
            <span className="cursor-pointer text-neutral-600 dark:text-neutral-400 hover:underline">
              &ldquo;Bought $85 grocery at Whole Foods&rdquo;
            </span>
            <span>•</span>
            <span className="cursor-pointer text-neutral-600 dark:text-neutral-400 hover:underline">
              &ldquo;Uber ride to airport $42 yesterday&rdquo;
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Structured Manual Form Shell */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Structured Transaction Details</CardTitle>
          <CardDescription>Standard transaction fields for manual logging</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Amount ($)" type="number" placeholder="0.00" step="0.01" />
            <Input label="Merchant / Payee" placeholder="e.g. Apple Store, Landlord" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">Category</label>
              <select className="flex h-9 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 px-3 py-1.5 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400/20">
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
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">Payment Account</label>
              <select className="flex h-9 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 px-3 py-1.5 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400/20">
                <option>Primary Checking (•• 4242)</option>
                <option>High Yield Savings (•• 8910)</option>
                <option>Corporate Credit Card (•• 1012)</option>
                <option>Cash</option>
              </select>
            </div>

            <Input label="Date" type="date" defaultValue="2026-09-08" />
          </div>

          <Input label="Notes (Optional)" placeholder="Add context, project name, or client tag..." />

          <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
            <Link
              href="/scan-receipt"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
            >
              <Receipt className="h-3.5 w-3.5" />
              Have a receipt? Scan with OCR instead
            </Link>

            <div className="flex items-center gap-2.5">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button variant="primary" size="sm">Save Entry</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

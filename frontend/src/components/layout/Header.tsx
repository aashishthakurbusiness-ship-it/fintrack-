"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Plus, Bell, Search } from "lucide-react";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { Button } from "@/components/ui/Button";

const routeTitles: Record<string, { title: string; subtitle: string }> = {
  "/": { title: "Dashboard", subtitle: "Financial overview & AI agent telemetry" },
  "/transactions": { title: "Transactions", subtitle: "History, statements & auto-categorization" },
  "/add-expense": { title: "Add Expense", subtitle: "Manual & natural language expense entry" },
  "/scan-receipt": { title: "Scan Receipt", subtitle: "Receipt & screenshot multimodal OCR processing" },
  "/ai-advisor": { title: "AI Advisor", subtitle: "Autonomous personal wealth & spending copilot" },
  "/analytics": { title: "Financial Analytics", subtitle: "Cash flow trends, category breakdowns & drivers" },
  "/budgets": { title: "Budgets & Limits", subtitle: "Target tracking & overspending protection" },
  "/settings": { title: "System Settings", subtitle: "Configuration, API credentials & preferences" },
};

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const pathname = usePathname();
  const currentRoute = routeTitles[pathname] || {
    title: "AI Finance Agent",
    subtitle: "Smart Personal Finance Platform",
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 sm:px-6 backdrop-blur-xl">
      {/* Left section: Hamburger (mobile) + Page Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {currentRoute.title}
          </h1>
          <p className="hidden sm:block text-xs text-slate-400">
            {currentRoute.subtitle}
          </p>
        </div>
      </div>

      {/* Right section: Search Shell, Status Pill, Add Expense Shortcut, Notifications */}
      <div className="flex items-center gap-3">
        {/* Search Shell (desktop) */}
        <div className="relative hidden md:block w-48 lg:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            readOnly
            placeholder="Search records... (Ctrl+K)"
            className="h-9 w-full rounded-xl border border-slate-800 bg-slate-900/60 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 focus:outline-none cursor-pointer"
          />
        </div>

        {/* Live Backend Communication Indicator */}
        <StatusIndicator />

        {/* Quick Action */}
        <Link href="/add-expense" className="hidden sm:block">
          <Button size="sm" variant="primary" className="gap-1.5 shadow-sm">
            <Plus className="h-3.5 w-3.5" />
            <span>Add Expense</span>
          </Button>
        </Link>

        {/* Notifications Shell */}
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white transition-colors"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
        </button>
      </div>
    </header>
  );
}

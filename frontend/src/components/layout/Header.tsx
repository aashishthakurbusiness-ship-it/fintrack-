"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Plus, Bell, Search } from "lucide-react";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

const routeTitles: Record<string, { title: string; subtitle: string }> = {
  "/": { title: "Dashboard", subtitle: "Financial pulse & autonomous insights" },
  "/transactions": { title: "Transactions", subtitle: "Statement history & categorizations" },
  "/add-expense": { title: "Add Expense", subtitle: "Natural-language & manual entry" },
  "/scan-receipt": { title: "Scan Receipt", subtitle: "Multimodal receipt & invoice OCR" },
  "/ai-advisor": { title: "FinTrack+ Advisor", subtitle: "Affordability, EMI math & wealth copilot" },
  "/analytics": { title: "Analytics", subtitle: "Cash flow velocity & categorical burn" },
  "/budgets": { title: "Budgets & Limits", subtitle: "Spending caps & overspending detection" },
  "/settings": { title: "Settings", subtitle: "System gateway & configuration" },
};

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const pathname = usePathname();
  const currentRoute = routeTitles[pathname] || {
    title: "FinTrack+",
    subtitle: "Minimal Financial Intelligence",
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950/70 px-4 sm:px-6 lg:px-8 backdrop-blur-xl transition-colors duration-200">
      {/* Left: Mobile hamburger & breadcrumb title */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white lg:hidden transition-colors"
        >
          <Menu className="h-4 w-4" />
        </button>

        <div>
          <h1 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white tracking-tight">
            {currentRoute.title}
          </h1>
          <p className="hidden sm:block text-xs text-neutral-500 dark:text-neutral-400">
            {currentRoute.subtitle}
          </p>
        </div>
      </div>

      {/* Right: Search, Theme Toggle, Status, Quick Action */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Minimal Search bar (desktop) */}
        <div className="relative hidden md:block w-44 lg:w-56">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
          <input
            type="text"
            readOnly
            placeholder="Search... (Ctrl+K)"
            className="h-8.5 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 pl-8 pr-3 text-xs text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none cursor-pointer hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
          />
        </div>

        {/* Live Backend Indicator */}
        <StatusIndicator />

        {/* Dark / Light Mode Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </button>

        {/* Quick Add Action */}
        <Link href="/add-expense" className="hidden sm:block">
          <Button size="sm" variant="primary" className="gap-1.5">
            <Plus className="h-3.5 w-3.5" />
            <span>Add Entry</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ArrowLeftRight,
  PlusCircle,
  ScanLine,
  Sparkles,
  BarChart3,
  PieChart,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItemConfig {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeVariant?: "emerald" | "neutral";
}

export const navItems: NavItemConfig[] = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { name: "Add Expense", href: "/add-expense", icon: PlusCircle },
  { name: "Scan Receipt", href: "/scan-receipt", icon: ScanLine, badge: "OCR", badgeVariant: "emerald" },
  { name: "AI Advisor", href: "/ai-advisor", icon: Sparkles, badge: "AI", badgeVariant: "neutral" },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Budgets", href: "/budgets", icon: PieChart },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-950/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r border-neutral-200/80 dark:border-neutral-800/80 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl transition-transform duration-200 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand header */}
        <div className="flex h-16 items-center justify-between border-b border-neutral-200/80 dark:border-neutral-800/80 px-6">
          <Link href="/" className="flex items-center gap-3 group" onClick={onClose}>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm transition-transform group-hover:scale-105">
              <span className="text-xs font-black tracking-tighter font-mono">F+</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-neutral-900 dark:text-white">
                FinTrack+
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Financial Platform
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Navigation
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all duration-150",
                  isActive
                    ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800/80 dark:text-white shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-200"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"
                    )}
                  />
                  <span>{item.name}</span>
                </div>

                {item.badge && (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide border",
                      item.badgeVariant === "emerald"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                        : "border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User profile shell */}
        <div className="border-t border-neutral-200/80 dark:border-neutral-800/80 p-3.5">
          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 p-2.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-bold shadow-sm">
                JD
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs font-semibold text-neutral-900 dark:text-white truncate">
                  John Doe
                </span>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate font-mono">
                  john.doe@example.com
                </span>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-neutral-200/60 dark:border-neutral-800/60 pt-2 text-[10px] text-neutral-400">
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="h-3 w-3" /> Secure Node
              </span>
              <span className="font-mono text-[10px]">v0.1.0</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

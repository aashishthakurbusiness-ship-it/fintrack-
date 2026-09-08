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
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItemConfig {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeVariant?: "blue" | "emerald" | "purple";
  highlight?: boolean;
}

export const navItems: NavItemConfig[] = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { name: "Add Expense", href: "/add-expense", icon: PlusCircle, highlight: true },
  { name: "Scan Receipt", href: "/scan-receipt", icon: ScanLine, badge: "OCR", badgeVariant: "emerald" },
  { name: "AI Advisor", href: "/ai-advisor", icon: Sparkles, badge: "AI", badgeVariant: "purple" },
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
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-slate-950/95 backdrop-blur-2xl transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-800/80 px-6">
          <Link href="/" className="flex items-center gap-3 group" onClick={onClose}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-2 shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                AI Finance Agent
              </span>
              <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-slate-400">
                FinTrack+ Platform
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 space-y-1.5 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-800">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Main Menu
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
                  "group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/10 text-white border border-blue-500/30 shadow-sm"
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-100 hover:border hover:border-slate-800",
                  item.highlight && !isActive && "text-blue-400 hover:text-blue-300"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive
                        ? "text-blue-400"
                        : item.highlight
                        ? "text-blue-400 group-hover:text-blue-300"
                        : "text-slate-500 group-hover:text-slate-300"
                    )}
                  />
                  <span>{item.name}</span>
                </div>

                {item.badge && (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide border",
                      item.badgeVariant === "emerald" && "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
                      item.badgeVariant === "purple" && "border-purple-500/30 bg-purple-500/10 text-purple-400",
                      item.badgeVariant === "blue" && "border-blue-500/30 bg-blue-500/10 text-blue-400"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User profile & security pill shell */}
        <div className="border-t border-slate-800/80 p-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white shadow-md">
                JD
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs font-semibold text-white truncate">John Doe</span>
                <span className="text-[11px] text-slate-400 truncate">john.doe@example.com</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-slate-800/60 pt-2 text-[10px] text-slate-400">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-emerald-400" /> Demo Profile
              </span>
              <span className="font-mono text-slate-400">v0.1.0</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

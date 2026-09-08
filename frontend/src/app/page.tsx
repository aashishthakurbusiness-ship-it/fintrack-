import React from "react";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentTransactionsShell } from "@/components/dashboard/RecentTransactionsShell";
import { BudgetProgressShell } from "@/components/dashboard/BudgetProgressShell";
import { AdvisorInsightShell } from "@/components/dashboard/AdvisorInsightShell";
import { Shield, Cpu, Database, Eye, Sparkles } from "lucide-react";

export default function DashboardPage() {
  const currentDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <div className="space-y-6">
      {/* Welcome & FinTrack+ Telemetry Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/40 p-6 sm:p-7 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{currentDate}</span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span>FinTrack+ Copilot Active</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Welcome back, John
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
              FinTrack+ is continuously monitoring your personal cash flow. No anomalies detected and 2
              optimization opportunities are ready for review.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/60 px-3.5 py-2 text-xs text-neutral-700 dark:text-neutral-300">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="font-medium text-[11px]">Autonomous Guard Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary KPI Metrics */}
      <MetricsGrid />

      {/* Quick Action Buttons */}
      <QuickActions />

      {/* FinTrack+ Advisor Intelligence Banner */}
      <AdvisorInsightShell />

      {/* Main Grid: Recent Activity & Budget Progress */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentTransactionsShell />
        </div>
        <div>
          <BudgetProgressShell />
        </div>
      </div>

      {/* Subsystem Architecture Matrix */}
      <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/30 p-5 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400" />
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Platform Architecture & Service Status
            </h3>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">Foundation Ready</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-neutral-900 dark:text-white flex items-center gap-1.5 text-xs">
                <Cpu className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> FastAPI Core
              </span>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 uppercase">
                Active
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              FastAPI ASGI gateway, typed contracts & CORS online.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-neutral-900 dark:text-white flex items-center gap-1.5 text-xs">
                <Database className="h-3.5 w-3.5 text-neutral-400" /> Supabase DB
              </span>
              <span className="text-[10px] font-medium text-neutral-400 uppercase">Standby</span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              PostgreSQL schema & client drivers prepared.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-neutral-900 dark:text-white flex items-center gap-1.5 text-xs">
                <Sparkles className="h-3.5 w-3.5 text-neutral-400" /> FinTrack+ AI
              </span>
              <span className="text-[10px] font-medium text-neutral-400 uppercase">Standby</span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Reasoning prompts & financial agents ready.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-neutral-900 dark:text-white flex items-center gap-1.5 text-xs">
                <Eye className="h-3.5 w-3.5 text-neutral-400" /> Vision OCR
              </span>
              <span className="text-[10px] font-medium text-neutral-400 uppercase">Standby</span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Multimodal receipt extraction pipeline prepared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

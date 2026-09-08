import React from "react";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentTransactionsShell } from "@/components/dashboard/RecentTransactionsShell";
import { BudgetProgressShell } from "@/components/dashboard/BudgetProgressShell";
import { AdvisorInsightShell } from "@/components/dashboard/AdvisorInsightShell";
import { Sparkles, Shield, Cpu, Database, Eye } from "lucide-react";

export default function DashboardPage() {
  const currentDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <div className="space-y-6">
      {/* Welcome & Agent Telemetry Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/40 p-6 sm:p-8 backdrop-blur-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span>{currentDate}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Financial Copilot Active</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Welcome back, John
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Here is your financial pulse. AI Finance Agent has detected no fraudulent anomalies and
              identified 2 optimization opportunities.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-2 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2.5 text-xs text-indigo-300">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <div className="flex flex-col">
                <span className="font-semibold">Autonomous Guard</span>
                <span className="text-[10px] text-indigo-400/80">Continuous background scan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary KPI Metrics */}
      <MetricsGrid />

      {/* Quick Action Buttons */}
      <QuickActions />

      {/* AI Advisor Proactive Insights Banner */}
      <AdvisorInsightShell />

      {/* Main Grid: Recent Transactions & Budget Breakdown */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentTransactionsShell />
        </div>
        <div>
          <BudgetProgressShell />
        </div>
      </div>

      {/* System Architecture Readiness Matrix (Foundation Step Transparency) */}
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Platform Architecture & Service Status
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Phase 1: Foundation Layer</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-emerald-400" /> FastAPI Core
              </span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Operational</span>
            </div>
            <p className="text-[11px] text-slate-400">ASGI API Gateway, typed endpoints & CORS active.</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Database className="h-3.5 w-3.5 text-slate-400" /> Supabase DB
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Standby</span>
            </div>
            <p className="text-[11px] text-slate-400">PostgreSQL schema & client drivers ready for Phase 2.</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-purple-400" /> AI Agent / LLM
              </span>
              <span className="text-[10px] font-bold text-purple-400 uppercase">Standby</span>
            </div>
            <p className="text-[11px] text-slate-400">Prompt orchestration & financial reasoning pipeline ready.</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5 text-cyan-400" /> Vision OCR
              </span>
              <span className="text-[10px] font-bold text-cyan-400 uppercase">Standby</span>
            </div>
            <p className="text-[11px] text-slate-400">Multimodal receipt scanning & extraction pipeline ready.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

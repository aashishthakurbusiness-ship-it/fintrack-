import React from "react";
import { cn, formatCurrency, formatPercent } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export interface StatCardProps {
  title: string;
  amount: number;
  currency?: string;
  changePercent?: number;
  period?: string;
  icon: React.ReactNode;
  variant?: "blue" | "emerald" | "purple" | "amber";
  className?: string;
}

export function StatCard({
  title,
  amount,
  currency = "USD",
  changePercent,
  period = "vs last month",
  icon,
  variant = "blue",
  className,
}: StatCardProps) {
  const isPositive = changePercent !== undefined && changePercent > 0;
  const isNegative = changePercent !== undefined && changePercent < 0;

  const glowColors = {
    blue: "from-blue-500/10 via-indigo-500/5 to-transparent border-blue-500/20",
    emerald: "from-emerald-500/10 via-teal-500/5 to-transparent border-emerald-500/20",
    purple: "from-purple-500/10 via-pink-500/5 to-transparent border-purple-500/20",
    amber: "from-amber-500/10 via-orange-500/5 to-transparent border-amber-500/20",
  };

  const iconColors = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl bg-slate-900/70",
        glowColors[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{title}</p>
          <h4 className="mt-2 text-2xl font-bold tracking-tight text-white font-mono">
            {formatCurrency(amount, currency)}
          </h4>
        </div>
        <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl border", iconColors[variant])}>
          {icon}
        </div>
      </div>

      {changePercent !== undefined && (
        <div className="mt-4 flex items-center gap-2 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-1 font-semibold",
              isPositive ? "text-emerald-400" : isNegative ? "text-rose-400" : "text-slate-400"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3.5 w-3.5" />
            ) : isNegative ? (
              <TrendingDown className="h-3.5 w-3.5" />
            ) : (
              <Minus className="h-3.5 w-3.5" />
            )}
            {formatPercent(changePercent)}
          </span>
          <span className="text-slate-400">{period}</span>
        </div>
      )}
    </div>
  );
}

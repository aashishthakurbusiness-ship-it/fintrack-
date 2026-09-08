import React from "react";
import { cn, formatCurrency, formatPercent } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export interface StatCardProps {
  title: string;
  amount: number;
  currency?: string;
  changePercent?: number;
  period?: string;
  icon?: React.ReactNode;
  accent?: "neutral" | "emerald" | "amber";
  className?: string;
}

export function StatCard({
  title,
  amount,
  currency = "USD",
  changePercent,
  period = "vs last month",
  icon,
  accent = "neutral",
  className,
}: StatCardProps) {
  const isPositive = changePercent !== undefined && changePercent > 0;
  const isNegative = changePercent !== undefined && changePercent < 0;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/50 p-5 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.03)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.2)] transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
            {title}
          </p>
          <h4 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white font-mono">
            {formatCurrency(amount, currency)}
          </h4>
        </div>
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
            {icon}
          </div>
        )}
      </div>

      {changePercent !== undefined && (
        <div className="mt-4 flex items-center gap-2 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-1 font-medium",
              isPositive
                ? "text-emerald-600 dark:text-emerald-400"
                : isNegative
                ? "text-rose-600 dark:text-rose-400"
                : "text-neutral-500 dark:text-neutral-400"
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
          <span className="text-neutral-500 dark:text-neutral-400 text-[11px]">{period}</span>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "secondary" | "outline" | "emerald";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default:
      "border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200",
    secondary:
      "border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/70 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400",
    emerald:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    success:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    warning:
      "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
    destructive:
      "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-400",
    outline:
      "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

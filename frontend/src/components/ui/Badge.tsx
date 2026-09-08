import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "secondary" | "outline" | "emerald" | "purple";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    warning: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    destructive: "border-rose-500/30 bg-rose-500/10 text-rose-400",
    secondary: "border-slate-700 bg-slate-800 text-slate-300",
    outline: "border-slate-700 text-slate-300",
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

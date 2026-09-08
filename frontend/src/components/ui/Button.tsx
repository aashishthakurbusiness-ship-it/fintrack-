import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "emerald";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 shadow-sm active:scale-[0.99]",
      secondary:
        "bg-neutral-100 hover:bg-neutral-200/80 text-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700/80 dark:text-neutral-100 border border-neutral-200/80 dark:border-neutral-700/60 active:scale-[0.99]",
      outline:
        "border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white",
      ghost:
        "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white",
      danger:
        "bg-rose-600 hover:bg-rose-500 text-white shadow-sm active:scale-[0.99]",
      emerald:
        "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-[0.99]",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-9 px-4 text-xs gap-2",
      lg: "h-11 px-6 text-sm gap-2.5",
      icon: "h-9 w-9 p-0",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="h-3.5 w-3.5 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

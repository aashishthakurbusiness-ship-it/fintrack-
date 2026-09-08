import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            "flex h-9 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 px-3 py-1.5 text-xs text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/20 focus:border-neutral-400 dark:focus:border-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150",
            error && "border-rose-500/60 focus:ring-rose-500/20 focus:border-rose-500/60",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-[11px] text-rose-500 dark:text-rose-400">{error}</p>}
        {helperText && !error && <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{helperText}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

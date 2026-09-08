"use client";

import React, { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";
import { ApiHealthResponse } from "@/types";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatusIndicator() {
  const [health, setHealth] = useState<ApiHealthResponse | null>(null);
  const [status, setStatus] = useState<"connecting" | "online" | "offline">("connecting");
  const [isChecking, setIsChecking] = useState<boolean>(false);

  const checkBackendHealth = useCallback(async () => {
    setIsChecking(true);
    try {
      const data = await api.getHealth();
      setHealth(data);
      setStatus("online");
    } catch {
      setStatus("offline");
      setHealth(null);
    } finally {
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    checkBackendHealth();
    const interval = setInterval(checkBackendHealth, 30000);
    return () => clearInterval(interval);
  }, [checkBackendHealth]);

  return (
    <div className="flex items-center gap-1.5">
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium transition-all backdrop-blur-md select-none",
          status === "online" &&
            "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
          status === "connecting" &&
            "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
          status === "offline" &&
            "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-400"
        )}
      >
        <span className="relative flex h-1.5 w-1.5">
          {status === "online" && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={cn(
              "relative inline-flex h-1.5 w-1.5 rounded-full",
              status === "online" && "bg-emerald-500",
              status === "connecting" && "bg-amber-500 animate-pulse",
              status === "offline" && "bg-rose-500"
            )}
          />
        </span>

        <span className="hidden sm:inline font-mono text-[11px]">
          {status === "online"
            ? `API: v${health?.version || "0.1.0"}`
            : status === "connecting"
            ? "Connecting..."
            : "Offline"}
        </span>
        <span className="sm:hidden font-mono text-[11px]">
          {status === "online" ? "Live" : status === "connecting" ? "..." : "Offline"}
        </span>

        <button
          onClick={checkBackendHealth}
          disabled={isChecking}
          title="Refresh connection status"
          className="ml-0.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 disabled:opacity-50 transition-colors cursor-pointer"
        >
          <RefreshCw className={cn("h-3 w-3", isChecking && "animate-spin")} />
        </button>
      </div>
    </div>
  );
}

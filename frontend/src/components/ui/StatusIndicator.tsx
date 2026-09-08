"use client";

import React, { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";
import { ApiHealthResponse } from "@/types";
import { Activity, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatusIndicator() {
  const [health, setHealth] = useState<ApiHealthResponse | null>(null);
  const [status, setStatus] = useState<"connecting" | "online" | "offline">("connecting");
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkBackendHealth = useCallback(async () => {
    setIsChecking(true);
    try {
      const data = await api.getHealth();
      setHealth(data);
      setStatus("online");
      setLastChecked(new Date());
    } catch {
      setStatus("offline");
      setHealth(null);
      setLastChecked(new Date());
    } finally {
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    checkBackendHealth();
    // Poll every 30 seconds for live health status
    const interval = setInterval(checkBackendHealth, 30000);
    return () => clearInterval(interval);
  }, [checkBackendHealth]);

  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-all backdrop-blur-md",
          status === "online" && "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
          status === "connecting" && "border-amber-500/30 bg-amber-500/10 text-amber-400",
          status === "offline" && "border-rose-500/30 bg-rose-500/10 text-rose-400"
        )}
      >
        <span className="relative flex h-2 w-2">
          {status === "online" && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              status === "online" && "bg-emerald-500",
              status === "connecting" && "bg-amber-400 animate-pulse",
              status === "offline" && "bg-rose-500"
            )}
          />
        </span>

        <span className="hidden sm:inline">
          {status === "online"
            ? `FastAPI: Online (v${health?.version || "0.1.0"})`
            : status === "connecting"
            ? "Connecting to API..."
            : "API Offline"}
        </span>
        <span className="sm:hidden">
          {status === "online" ? "API Live" : status === "connecting" ? "Connecting" : "Offline"}
        </span>

        <button
          onClick={checkBackendHealth}
          disabled={isChecking}
          title="Refresh backend status"
          className="ml-0.5 text-slate-400 hover:text-slate-200 disabled:opacity-50 transition-colors cursor-pointer"
        >
          <RefreshCw className={cn("h-3 w-3", isChecking && "animate-spin")} />
        </button>
      </div>
    </div>
  );
}

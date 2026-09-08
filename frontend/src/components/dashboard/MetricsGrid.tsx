import React from "react";
import { StatCard } from "@/components/ui/StatCard";
import { Wallet, ArrowDownRight, ArrowUpRight, PiggyBank } from "lucide-react";

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Net Portfolio"
        amount={42850.5}
        changePercent={4.8}
        period="vs last month"
        icon={<Wallet className="h-4 w-4" />}
      />

      <StatCard
        title="Monthly Inflow"
        amount={8420.0}
        changePercent={2.1}
        period="vs last month"
        icon={<ArrowUpRight className="h-4 w-4" />}
      />

      <StatCard
        title="Monthly Burn"
        amount={3280.4}
        changePercent={-6.4}
        period="vs last month"
        icon={<ArrowDownRight className="h-4 w-4" />}
      />

      <StatCard
        title="Savings Target"
        amount={5139.6}
        changePercent={8.5}
        period="61% savings rate"
        icon={<PiggyBank className="h-4 w-4" />}
      />
    </div>
  );
}

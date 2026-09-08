import React from "react";
import { StatCard } from "@/components/ui/StatCard";
import { Wallet, ArrowDownRight, ArrowUpRight, PiggyBank } from "lucide-react";

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Net Worth"
        amount={42850.5}
        changePercent={4.8}
        period="vs last month"
        variant="blue"
        icon={<Wallet className="h-5 w-5" />}
      />

      <StatCard
        title="Monthly Inflow"
        amount={8420.0}
        changePercent={2.1}
        period="vs last month"
        variant="emerald"
        icon={<ArrowUpRight className="h-5 w-5" />}
      />

      <StatCard
        title="Monthly Expenses"
        amount={3280.4}
        changePercent={-6.4}
        period="vs last month"
        variant="amber"
        icon={<ArrowDownRight className="h-5 w-5" />}
      />

      <StatCard
        title="Savings Target"
        amount={5139.6}
        changePercent={8.5}
        period="61% savings rate"
        variant="purple"
        icon={<PiggyBank className="h-5 w-5" />}
      />
    </div>
  );
}

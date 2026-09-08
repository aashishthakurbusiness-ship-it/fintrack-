export interface NavItem {
  title: string;
  href: string;
  icon: string;
  badge?: string;
  isAction?: boolean;
}

export interface ApiHealthResponse {
  status: string;
  service: string;
  version: string;
  timestamp: string;
}

export interface ServiceStatus {
  name: string;
  status: "online" | "standby" | "offline";
  description: string;
}

export interface SystemStatusResponse {
  project_name: string;
  version: string;
  environment: string;
  services: ServiceStatus[];
  features_ready: Record<string, boolean>;
  timestamp: string;
}

export interface FinancialMetric {
  id: string;
  label: string;
  amount: number;
  changePercent: number;
  trend: "up" | "down" | "neutral";
  period: string;
  icon: string;
}

export interface RecentTransactionShell {
  id: string;
  title: string;
  category: string;
  amount: number;
  type: "expense" | "income";
  date: string;
  method: string;
  aiCategorized: boolean;
}

export interface BudgetShell {
  id: string;
  category: string;
  spent: number;
  limit: number;
  percentage: number;
  color: string;
}

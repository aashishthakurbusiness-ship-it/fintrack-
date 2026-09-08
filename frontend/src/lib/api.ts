import { ApiHealthResponse, SystemStatusResponse } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options?.headers,
      },
      // Cache bust for health/status polling
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new ApiError(response.status, `API request failed: ${response.statusText}`, errorBody);
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error(
      `Network error connecting to backend at ${url}: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export const api = {
  getHealth: (): Promise<ApiHealthResponse> => {
    return request<ApiHealthResponse>("/api/v1/health");
  },

  getSystemStatus: (): Promise<SystemStatusResponse> => {
    return request<SystemStatusResponse>("/api/v1/system/status");
  },

  getBaseUrl: () => API_BASE_URL,
};

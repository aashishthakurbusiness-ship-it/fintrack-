"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { Settings, Server, Database, Sparkles, Bell, Save, Check } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Settings className="h-6 w-6 text-slate-300" />
            System & Application Settings
          </h2>
          <p className="text-sm text-slate-400">
            Configure backend connection endpoints, database credentials, and AI inference providers.
          </p>
        </div>

        {saved && (
          <Badge variant="success" className="gap-1 animate-fade-in">
            <Check className="h-3.5 w-3.5" /> Settings Saved
          </Badge>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Backend API Connection Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-blue-400" />
                <CardTitle className="text-base">FastAPI Backend Gateway</CardTitle>
              </div>
              <StatusIndicator />
            </div>
            <CardDescription>
              Direct HTTP communication between Next.js and the Python FastAPI ASGI server
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Backend API Base URL"
              defaultValue={process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}
              helperText="Configured via NEXT_PUBLIC_API_URL environment variable"
            />
            <div className="flex justify-between items-center text-xs text-slate-400 rounded-xl bg-slate-950/60 p-3 border border-slate-800">
              <span>Endpoints: <code>/api/v1/health</code>, <code>/api/v1/system/status</code></span>
              <span className="text-emerald-400 font-mono">CORS: Enabled</span>
            </div>
          </CardContent>
        </Card>

        {/* Database & Supabase Configuration Shell */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-emerald-400" />
                <CardTitle className="text-base">Database & Storage (Supabase)</CardTitle>
              </div>
              <Badge variant="secondary">Phase 2 Reserved</Badge>
            </div>
            <CardDescription>
              PostgreSQL schema tables, row-level security, and receipt storage bucket
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Supabase Project URL"
                placeholder="https://xyzcompany.supabase.co"
                disabled
              />
              <Input
                label="Supabase Anon Key"
                type="password"
                placeholder="eyJhbGciOiJIUzI1NiIsInR5..."
                disabled
              />
            </div>
            <p className="text-[11px] text-slate-400">
              Note: Database tables and authentication will be initialized in the upcoming schema migration step.
            </p>
          </CardContent>
        </Card>

        {/* AI & Vision Provider Configuration Shell */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <CardTitle className="text-base">AI Model & Vision Provider</CardTitle>
              </div>
              <Badge variant="secondary">Phase 3 Reserved</Badge>
            </div>
            <CardDescription>
              Select the LLM reasoning engine for expense parsing, OCR, and financial guidance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-300">Preferred LLM Provider</label>
                <select
                  disabled
                  className="flex h-10 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-400 cursor-not-allowed"
                >
                  <option>OpenAI (GPT-4o / GPT-4o-mini)</option>
                  <option>Google Gemini (Gemini 1.5 Pro / Flash)</option>
                  <option>Anthropic (Claude 3.5 Sonnet)</option>
                  <option>Groq (Llama 3.3 70B Fast Inference)</option>
                </select>
              </div>

              <Input
                label="LLM API Key"
                type="password"
                placeholder="sk-••••••••••••••••••••"
                disabled
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Bar */}
        <div className="flex justify-end gap-3 pt-2">
          <Button type="button" variant="outline" size="md">
            Reset Defaults
          </Button>
          <Button type="submit" variant="primary" size="md" className="gap-2">
            <Save className="h-4 w-4" />
            Save Preferences
          </Button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScanLine, UploadCloud, Camera, CheckCircle2, FileText, Sparkles } from "lucide-react";

export default function ScanReceiptPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <ScanLine className="h-6 w-6 text-emerald-400" />
            Receipt & Screenshot Scanner
          </h2>
          <p className="text-sm text-slate-400">
            Upload receipts, invoices, or banking screenshots. Multimodal Vision extracts line items automatically.
          </p>
        </div>
        <Badge variant="emerald" className="self-start sm:self-auto">
          Vision OCR Engine
        </Badge>
      </div>

      {/* Upload Dropzone Shell */}
      <Card className="border-dashed border-2 border-slate-700/80 bg-slate-900/40 hover:border-emerald-500/50 transition-colors">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-4">
            <UploadCloud className="h-8 w-8" />
          </div>
          <h3 className="text-base font-semibold text-white">Drag and drop your receipt here</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Supports PNG, JPG, WEBP, or PDF up to 15MB. Screenshots of Apple Pay or banking apps are also accepted.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <Button variant="emerald" size="sm" className="gap-2">
              <UploadCloud className="h-4 w-4" />
              Browse Files
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Camera className="h-4 w-4" />
              Capture with Camera
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Extracted Preview Shell */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              <CardTitle className="text-base">Sample OCR Extraction Pipeline</CardTitle>
            </div>
            <span className="text-xs text-slate-400 font-mono">Confidence: 98.4%</span>
          </div>
          <CardDescription>
            Preview of parsed fields when receipt processing runs on the Supabase Storage + Vision pipeline
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Merchant</span>
              <span className="font-semibold text-white text-sm">Target Superstore #1284</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Date & Time</span>
              <span className="font-semibold text-white text-sm">Sep 07, 2026 • 2:15 PM</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Detected Category</span>
              <Badge variant="secondary" className="mt-0.5">Household & Groceries</Badge>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 text-[10px] uppercase tracking-wider">
                <tr>
                  <th className="p-3">Detected Line Item</th>
                  <th className="p-3 text-right">Qty</th>
                  <th className="p-3 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="p-3 text-slate-200">Organic Almond Milk 64oz</td>
                  <td className="p-3 text-right text-slate-400">2</td>
                  <td className="p-3 text-right font-mono text-white">$7.98</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-200">Wireless USB-C Charging Cable</td>
                  <td className="p-3 text-right text-slate-400">1</td>
                  <td className="p-3 text-right font-mono text-white">$19.99</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-200">Sales Tax (8.25%)</td>
                  <td className="p-3 text-right text-slate-400">-</td>
                  <td className="p-3 text-right font-mono text-slate-400">$2.31</td>
                </tr>
                <tr className="bg-slate-900/40 font-semibold">
                  <td className="p-3 text-white">Extracted Total</td>
                  <td className="p-3 text-right text-slate-400">3 items</td>
                  <td className="p-3 text-right font-mono text-emerald-400 text-sm">$30.28</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline" size="sm">Discard</Button>
            <Button variant="primary" size="sm" className="gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              Confirm & Post to Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

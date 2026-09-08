import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScanLine, UploadCloud, Camera, CheckCircle2, FileText } from "lucide-react";

export default function ScanReceiptPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight flex items-center gap-2">
            <ScanLine className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            Receipt & Screenshot Scanner
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Upload receipts, invoices, or banking screenshots. Multimodal OCR extracts line items automatically.
          </p>
        </div>
        <Badge variant="emerald" className="self-start sm:self-auto">
          Vision OCR Engine
        </Badge>
      </div>

      {/* Upload Dropzone Shell */}
      <Card className="border-dashed border-2 border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/20 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 mb-4 shadow-sm">
            <UploadCloud className="h-6 w-6" />
          </div>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Drag and drop your receipt here</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-sm leading-relaxed">
            Supports PNG, JPG, WEBP, or PDF up to 15MB. Screenshots from mobile banking are also supported.
          </p>

          <div className="flex items-center gap-2.5 mt-5">
            <Button variant="primary" size="sm" className="gap-2">
              <UploadCloud className="h-3.5 w-3.5" />
              Browse Files
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Camera className="h-3.5 w-3.5" />
              Camera
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Extracted Preview Shell */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
              <CardTitle className="text-sm">Sample OCR Pipeline Preview</CardTitle>
            </div>
            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono">Confidence: 98.4%</span>
          </div>
          <CardDescription>
            Preview of parsed fields when receipt processing runs on the Supabase Storage pipeline
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/60 p-4 text-xs">
            <div>
              <span className="text-neutral-400 dark:text-neutral-500 block text-[10px] uppercase font-medium">Merchant</span>
              <span className="font-medium text-neutral-900 dark:text-white text-xs">Target Superstore #1284</span>
            </div>
            <div>
              <span className="text-neutral-400 dark:text-neutral-500 block text-[10px] uppercase font-medium">Date & Time</span>
              <span className="font-medium text-neutral-900 dark:text-white text-xs">Sep 07, 2026 • 2:15 PM</span>
            </div>
            <div>
              <span className="text-neutral-400 dark:text-neutral-500 block text-[10px] uppercase font-medium">Detected Category</span>
              <Badge variant="secondary" className="mt-1">Household & Groceries</Badge>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200/80 dark:border-neutral-800 text-neutral-400 dark:text-neutral-500 text-[10px] uppercase tracking-wider">
                <tr>
                  <th className="p-3 font-medium">Detected Line Item</th>
                  <th className="p-3 text-right font-medium">Qty</th>
                  <th className="p-3 text-right font-medium">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                <tr>
                  <td className="p-3 text-neutral-800 dark:text-neutral-200">Organic Almond Milk 64oz</td>
                  <td className="p-3 text-right text-neutral-400">2</td>
                  <td className="p-3 text-right font-mono text-neutral-900 dark:text-white">$7.98</td>
                </tr>
                <tr>
                  <td className="p-3 text-neutral-800 dark:text-neutral-200">Wireless USB-C Charging Cable</td>
                  <td className="p-3 text-right text-neutral-400">1</td>
                  <td className="p-3 text-right font-mono text-neutral-900 dark:text-white">$19.99</td>
                </tr>
                <tr>
                  <td className="p-3 text-neutral-800 dark:text-neutral-200">Sales Tax (8.25%)</td>
                  <td className="p-3 text-right text-neutral-400">-</td>
                  <td className="p-3 text-right font-mono text-neutral-500">$2.31</td>
                </tr>
                <tr className="bg-neutral-50/50 dark:bg-neutral-900/40 font-semibold">
                  <td className="p-3 text-neutral-900 dark:text-white">Extracted Total</td>
                  <td className="p-3 text-right text-neutral-400">3 items</td>
                  <td className="p-3 text-right font-mono text-emerald-600 dark:text-emerald-400 text-xs">$30.28</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end gap-2.5 pt-2">
            <Button variant="outline" size="sm">Discard</Button>
            <Button variant="primary" size="sm" className="gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Confirm & Post to Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

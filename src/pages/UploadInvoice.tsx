import { useState, useCallback } from "react";
import { Upload, FileText, X, Check, Loader2 } from "lucide-react";

interface ExtractedItem {
  name: string;
  qty: number;
  unitPrice: number;
  total: number;
}

const mockExtracted = {
  vendor: "TechSupply Co",
  date: "2024-03-18",
  invoiceNo: "INV-9821",
  items: [
    { name: "Wireless Keyboard", qty: 10, unitPrice: 45, total: 450 },
    { name: "USB-C Hub", qty: 5, unitPrice: 32, total: 160 },
    { name: "Monitor Stand", qty: 3, unitPrice: 78, total: 234 },
  ] as ExtractedItem[],
};

const UploadInvoice = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [extracted, setExtracted] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setProcessing(true);
    setExtracted(false);
    setTimeout(() => {
      setProcessing(false);
      setExtracted(true);
    }, 2500);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, [handleFile]);

  return (
    <div className="page-container max-w-4xl mx-auto">
      <div className="animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">Upload Invoice</h1>
        <p className="text-muted-foreground mt-1">Upload an invoice to extract data automatically</p>
      </div>

      {/* Drop zone */}
      {!file && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`glass-card border-2 border-dashed p-12 text-center cursor-pointer transition-all duration-300 animate-fade-up ${
            dragOver ? "border-primary bg-primary/5" : "border-border/50 hover:border-primary/40"
          }`}
          style={{ opacity: 0, animationDelay: "0.1s" }}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            id="file-input"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg font-medium mb-1">Drop your invoice here</p>
          <p className="text-sm text-muted-foreground">or click to browse • PDF, PNG, JPG</p>
        </div>
      )}

      {/* Processing */}
      {file && processing && (
        <div className="glass-card p-12 text-center animate-fade-up">
          <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
          <p className="text-lg font-medium mb-1">Processing Invoice...</p>
          <p className="text-sm text-muted-foreground">Extracting data from {file.name}</p>
        </div>
      )}

      {/* Extracted data */}
      {extracted && (
        <div className="space-y-4 animate-fade-up">
          <div className="flex items-center gap-2 text-emerald-400">
            <Check className="w-5 h-5" />
            <span className="font-medium">Data extracted successfully</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{file?.name}</span>
            </div>
            <button onClick={() => { setFile(null); setExtracted(false); }} className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-card p-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Vendor</span>
              <p className="font-semibold mt-1">{mockExtracted.vendor}</p>
            </div>
            <div className="glass-card p-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Date</span>
              <p className="font-semibold mt-1">{mockExtracted.date}</p>
            </div>
            <div className="glass-card p-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Invoice #</span>
              <p className="font-semibold mt-1">{mockExtracted.invoiceNo}</p>
            </div>
          </div>

          <div className="table-container">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground text-xs uppercase tracking-wider">
                    <th className="px-5 py-3">Item</th>
                    <th className="px-5 py-3">Qty</th>
                    <th className="px-5 py-3">Unit Price</th>
                    <th className="px-5 py-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {mockExtracted.items.map((item, i) => (
                    <tr key={i} className="border-t border-border/30">
                      <td className="px-5 py-3.5 font-medium">{item.name}</td>
                      <td className="px-5 py-3.5 text-muted-foreground">{item.qty}</td>
                      <td className="px-5 py-3.5 text-muted-foreground">${item.unitPrice}</td>
                      <td className="px-5 py-3.5 font-medium">${item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <button onClick={() => { setFile(null); setExtracted(false); }} className="glass-card-hover px-5 py-2.5 rounded-xl text-sm font-medium text-muted-foreground">
              Discard
            </button>
            <button className="gradient-btn text-sm">Save to Inventory</button>
            <button className="px-5 py-2.5 rounded-xl text-sm font-medium bg-teal/20 text-teal hover:bg-teal/30 transition-colors">
              Save as Expense
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadInvoice;

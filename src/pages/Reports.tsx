import { FileText, Download, FileSpreadsheet } from "lucide-react";

const reports = [
  { title: "Monthly Expense Report", description: "Detailed breakdown of all expenses for the current month", type: "Expense", date: "Mar 2024" },
  { title: "Vendor Summary Report", description: "Spending analysis across all vendors with trend data", type: "Vendor", date: "Q1 2024" },
  { title: "Inventory Valuation Report", description: "Current stock levels and total inventory value", type: "Inventory", date: "Mar 2024" },
  { title: "Tax Summary Report", description: "Tax-deductible expenses categorized for filing", type: "Tax", date: "FY 2023-24" },
  { title: "Cash Flow Analysis", description: "Income vs expenses with monthly projections", type: "Financial", date: "Mar 2024" },
];

const Reports = () => (
  <div className="page-container">
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
      <p className="text-muted-foreground mt-1">Generate and export financial reports</p>
    </div>

    <div className="grid gap-4">
      {reports.map((r, i) => (
        <div key={r.title} className={`glass-card-hover p-5 flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-up stagger-${Math.min(i + 1, 5)}`} style={{ opacity: 0 }}>
          <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{r.description}</p>
            <div className="flex gap-3 mt-1.5 text-xs text-muted-foreground">
              <span>{r.type}</span>
              <span>•</span>
              <span>{r.date}</span>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="glass-card-hover px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 text-muted-foreground">
              <Download className="w-4 h-4" /> PDF
            </button>
            <button className="glass-card-hover px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 text-muted-foreground">
              <FileSpreadsheet className="w-4 h-4" /> CSV
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Reports;

import { Search, Filter, Eye, Pencil, Trash2 } from "lucide-react";

const invoices = [
  { id: "INV-2847", vendor: "TechSupply Co", date: "2024-03-15", category: "Technology", amount: "$2,340", status: "Paid" },
  { id: "INV-2846", vendor: "CloudServ Inc", date: "2024-03-14", category: "Services", amount: "$890", status: "Pending" },
  { id: "INV-2845", vendor: "Office Depot", date: "2024-03-13", category: "Supplies", amount: "$1,245", status: "Paid" },
  { id: "INV-2844", vendor: "PrintWorks", date: "2024-03-12", category: "Marketing", amount: "$567", status: "Overdue" },
  { id: "INV-2843", vendor: "TechSupply Co", date: "2024-03-11", category: "Technology", amount: "$3,120", status: "Paid" },
  { id: "INV-2842", vendor: "GreenEnergy Ltd", date: "2024-03-10", category: "Utilities", amount: "$432", status: "Paid" },
  { id: "INV-2841", vendor: "FastShip Corp", date: "2024-03-09", category: "Logistics", amount: "$1,890", status: "Pending" },
];

const statusColor: Record<string, string> = {
  Paid: "text-emerald-400 bg-emerald-400/10",
  Pending: "text-amber-400 bg-amber-400/10",
  Overdue: "text-red-400 bg-red-400/10",
};

const Invoices = () => (
  <div className="page-container">
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Invoices</h1>
      <p className="text-muted-foreground mt-1">Manage all your invoice records</p>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search invoices..." className="input-glass pl-9 py-2" />
      </div>
      <button className="glass-card-hover px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 text-muted-foreground">
        <Filter className="w-4 h-4" /> Filter
      </button>
    </div>

    <div className="table-container animate-fade-up" style={{ opacity: 0, animationDelay: "0.2s" }}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground text-xs uppercase tracking-wider">
              <th className="px-5 py-3">Invoice</th>
              <th className="px-5 py-3">Vendor</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Category</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t border-border/30 hover:bg-accent/30 transition-colors">
                <td className="px-5 py-3.5 font-medium">{inv.id}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{inv.vendor}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{inv.date}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{inv.category}</td>
                <td className="px-5 py-3.5 font-medium">{inv.amount}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[inv.status]}`}>{inv.status}</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex gap-1">
                    <button className="p-1.5 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"><Eye className="w-4 h-4" /></button>
                    <button className="p-1.5 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"><Pencil className="w-4 h-4" /></button>
                    <button className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Invoices;

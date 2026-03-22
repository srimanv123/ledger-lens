import { Search, Plus, AlertTriangle } from "lucide-react";

const items = [
  { name: "Wireless Keyboard", qty: 45, category: "Peripherals", supplier: "TechSupply Co", cost: "$45", status: "In Stock" },
  { name: "USB-C Hub", qty: 3, category: "Peripherals", supplier: "TechSupply Co", cost: "$32", status: "Low Stock" },
  { name: "Monitor Stand", qty: 28, category: "Furniture", supplier: "Office Depot", cost: "$78", status: "In Stock" },
  { name: "A4 Paper (Ream)", qty: 2, category: "Supplies", supplier: "PrintWorks", cost: "$12", status: "Low Stock" },
  { name: "Desk Lamp LED", qty: 15, category: "Furniture", supplier: "Office Depot", cost: "$34", status: "In Stock" },
  { name: "Ethernet Cable 2m", qty: 120, category: "Networking", supplier: "TechSupply Co", cost: "$8", status: "In Stock" },
  { name: "Ink Cartridge B/W", qty: 1, category: "Supplies", supplier: "PrintWorks", cost: "$28", status: "Low Stock" },
];

const Inventory = () => (
  <div className="page-container">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 animate-fade-up">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Inventory</h1>
        <p className="text-muted-foreground mt-1">Track your stock levels</p>
      </div>
      <button className="gradient-btn text-sm flex items-center gap-2 w-fit">
        <Plus className="w-4 h-4" /> Add Item
      </button>
    </div>

    <div className="relative animate-fade-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input type="text" placeholder="Search inventory..." className="input-glass pl-9 py-2 max-w-sm" />
    </div>

    <div className="table-container animate-fade-up" style={{ opacity: 0, animationDelay: "0.2s" }}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground text-xs uppercase tracking-wider">
              <th className="px-5 py-3">Item</th><th className="px-5 py-3">Qty</th><th className="px-5 py-3">Category</th>
              <th className="px-5 py-3">Supplier</th><th className="px-5 py-3">Cost</th><th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name} className="border-t border-border/30 hover:bg-accent/30 transition-colors">
                <td className="px-5 py-3.5 font-medium">{item.name}</td>
                <td className="px-5 py-3.5 tabular-nums">{item.qty}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{item.category}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{item.supplier}</td>
                <td className="px-5 py-3.5 font-medium">{item.cost}</td>
                <td className="px-5 py-3.5">
                  {item.status === "Low Stock" ? (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full text-amber-400 bg-amber-400/10 inline-flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Low Stock
                    </span>
                  ) : (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full text-emerald-400 bg-emerald-400/10">In Stock</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Inventory;

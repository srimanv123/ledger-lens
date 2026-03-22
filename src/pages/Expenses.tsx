import { DollarSign, TrendingDown, CreditCard } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const monthlyExpenses = [
  { month: "Jan", amount: 4200 }, { month: "Feb", amount: 3800 },
  { month: "Mar", amount: 5100 }, { month: "Apr", amount: 4600 },
  { month: "May", amount: 5800 }, { month: "Jun", amount: 7200 },
];

const categories = [
  { name: "Technology", value: 18400, color: "#4F46E5" },
  { name: "Services", value: 12200, color: "#14B8A6" },
  { name: "Supplies", value: 8600, color: "#EC4899" },
  { name: "Utilities", value: 4800, color: "#F59E0B" },
  { name: "Marketing", value: 3200, color: "#8B5CF6" },
];

const expenses = [
  { vendor: "TechSupply Co", category: "Technology", date: "2024-03-15", amount: "$2,340", method: "Bank Transfer" },
  { vendor: "CloudServ Inc", category: "Services", date: "2024-03-14", amount: "$890", method: "Credit Card" },
  { vendor: "Office Depot", category: "Supplies", date: "2024-03-13", amount: "$1,245", method: "Credit Card" },
  { vendor: "GreenEnergy Ltd", category: "Utilities", date: "2024-03-10", amount: "$432", method: "Direct Debit" },
  { vendor: "PrintWorks", category: "Marketing", date: "2024-03-12", amount: "$567", method: "Bank Transfer" },
];

const tooltipStyle = {
  background: "hsl(222 30% 8%)", border: "1px solid hsl(222 20% 16%)", borderRadius: "12px", color: "hsl(210 40% 96%)",
};

const Expenses = () => (
  <div className="page-container">
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Expenses</h1>
      <p className="text-muted-foreground mt-1">Track and manage your business expenses</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { label: "Total Expenses", value: "$48,352", icon: DollarSign, color: "text-primary" },
        { label: "This Month", value: "$7,200", icon: TrendingDown, color: "text-teal" },
        { label: "Avg per Invoice", value: "$284", icon: CreditCard, color: "text-pink-400" },
      ].map((s, i) => (
        <div key={s.label} className={`stat-card animate-fade-up stagger-${i + 1}`} style={{ opacity: 0 }}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{s.label}</span>
            <s.icon className={`w-4 h-4 ${s.color}`} />
          </div>
          <p className="text-2xl font-bold">{s.value}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="glass-card p-6 animate-fade-up" style={{ opacity: 0, animationDelay: "0.3s" }}>
        <h3 className="text-sm font-semibold mb-4">Monthly Expenses</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyExpenses}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 20% 16%)" />
            <XAxis dataKey="month" stroke="hsl(215 20% 55%)" fontSize={12} />
            <YAxis stroke="hsl(215 20% 55%)" fontSize={12} />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey="amount" fill="#4F46E5" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-card p-6 animate-fade-up" style={{ opacity: 0, animationDelay: "0.4s" }}>
        <h3 className="text-sm font-semibold mb-4">Category Breakdown</h3>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie data={categories} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" paddingAngle={3}>
              {categories.map((c) => <Cell key={c.name} fill={c.color} />)}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          {categories.map((c) => (
            <div key={c.name} className="flex items-center gap-2 text-xs">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.color }} />
              <span className="text-muted-foreground">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="table-container animate-fade-up" style={{ opacity: 0, animationDelay: "0.5s" }}>
      <div className="p-5 border-b border-border/50"><h3 className="text-sm font-semibold">Recent Expenses</h3></div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground text-xs uppercase tracking-wider">
              <th className="px-5 py-3">Vendor</th><th className="px-5 py-3">Category</th><th className="px-5 py-3">Date</th><th className="px-5 py-3">Amount</th><th className="px-5 py-3">Method</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e, i) => (
              <tr key={i} className="border-t border-border/30 hover:bg-accent/30 transition-colors">
                <td className="px-5 py-3.5 font-medium">{e.vendor}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{e.category}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{e.date}</td>
                <td className="px-5 py-3.5 font-medium">{e.amount}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{e.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Expenses;

import { DollarSign, FileText, Package, TrendingUp, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const stats = [
  { label: "Total Expenses", value: "$48,352", change: "+12.5%", icon: DollarSign, color: "text-primary" },
  { label: "Monthly Spend", value: "$8,241", change: "-3.2%", icon: TrendingUp, color: "text-teal" },
  { label: "Invoices Processed", value: "284", change: "+18", icon: FileText, color: "text-pink-400" },
  { label: "Inventory Value", value: "$124,800", change: "+5.1%", icon: Package, color: "text-amber-400" },
  { label: "Pending Payments", value: "$3,420", change: "4 items", icon: Clock, color: "text-orange-400" },
];

const monthlyData = [
  { month: "Jan", expense: 4200 }, { month: "Feb", expense: 3800 },
  { month: "Mar", expense: 5100 }, { month: "Apr", expense: 4600 },
  { month: "May", expense: 5800 }, { month: "Jun", expense: 7200 },
  { month: "Jul", expense: 6400 }, { month: "Aug", expense: 8241 },
];

const vendorData = [
  { name: "TechSupply Co", value: 12400, color: "#4F46E5" },
  { name: "Office Depot", value: 8600, color: "#14B8A6" },
  { name: "CloudServ Inc", value: 6200, color: "#EC4899" },
  { name: "PrintWorks", value: 3800, color: "#F59E0B" },
  { name: "Others", value: 5200, color: "#6366F1" },
];

const recentInvoices = [
  { id: "INV-2847", vendor: "TechSupply Co", date: "2024-03-15", amount: "$2,340", status: "Paid" },
  { id: "INV-2846", vendor: "CloudServ Inc", date: "2024-03-14", amount: "$890", status: "Pending" },
  { id: "INV-2845", vendor: "Office Depot", date: "2024-03-13", amount: "$1,245", status: "Paid" },
  { id: "INV-2844", vendor: "PrintWorks", date: "2024-03-12", amount: "$567", status: "Overdue" },
  { id: "INV-2843", vendor: "TechSupply Co", date: "2024-03-11", amount: "$3,120", status: "Paid" },
];

const statusColor: Record<string, string> = {
  Paid: "text-emerald-400 bg-emerald-400/10",
  Pending: "text-amber-400 bg-amber-400/10",
  Overdue: "text-red-400 bg-red-400/10",
};

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Your financial overview at a glance</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`stat-card animate-fade-up stagger-${i + 1}`} style={{ opacity: 0 }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <span className="text-xs text-muted-foreground">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-card p-6 animate-fade-up" style={{ opacity: 0, animationDelay: "0.3s" }}>
          <h3 className="text-sm font-semibold mb-4">Monthly Expense Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 20% 16%)" />
              <XAxis dataKey="month" stroke="hsl(215 20% 55%)" fontSize={12} />
              <YAxis stroke="hsl(215 20% 55%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: "hsl(222 30% 8%)",
                  border: "1px solid hsl(222 20% 16%)",
                  borderRadius: "12px",
                  color: "hsl(210 40% 96%)",
                }}
              />
              <Line type="monotone" dataKey="expense" stroke="#4F46E5" strokeWidth={2.5} dot={{ fill: "#4F46E5", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-6 animate-fade-up" style={{ opacity: 0, animationDelay: "0.4s" }}>
          <h3 className="text-sm font-semibold mb-4">Vendor Spending</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={vendorData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={4}>
                {vendorData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "hsl(222 30% 8%)",
                  border: "1px solid hsl(222 20% 16%)",
                  borderRadius: "12px",
                  color: "hsl(210 40% 96%)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {vendorData.map((v) => (
              <div key={v.name} className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: v.color }} />
                <span className="text-muted-foreground flex-1">{v.name}</span>
                <span className="font-medium">${(v.value / 1000).toFixed(1)}k</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="table-container animate-fade-up" style={{ opacity: 0, animationDelay: "0.5s" }}>
        <div className="p-5 border-b border-border/50">
          <h3 className="text-sm font-semibold">Recent Invoices</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground text-xs uppercase tracking-wider">
                <th className="px-5 py-3">Invoice</th>
                <th className="px-5 py-3">Vendor</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentInvoices.map((inv) => (
                <tr key={inv.id} className="border-t border-border/30 hover:bg-accent/30 transition-colors">
                  <td className="px-5 py-3.5 font-medium">{inv.id}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{inv.vendor}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{inv.date}</td>
                  <td className="px-5 py-3.5 font-medium">{inv.amount}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[inv.status]}`}>
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

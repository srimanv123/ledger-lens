import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const spendingTrend = [
  { month: "Sep", amount: 5200 }, { month: "Oct", amount: 6100 },
  { month: "Nov", amount: 4800 }, { month: "Dec", amount: 7400 },
  { month: "Jan", amount: 6800 }, { month: "Feb", amount: 5500 },
  { month: "Mar", amount: 8241 },
];

const topVendors = [
  { name: "TechSupply", amount: 18420 },
  { name: "CloudServ", amount: 12340 },
  { name: "Office Depot", amount: 8650 },
  { name: "PrintWorks", amount: 5230 },
  { name: "GreenEnergy", amount: 4800 },
];

const categoryData = [
  { name: "Technology", value: 38, color: "#4F46E5" },
  { name: "Services", value: 25, color: "#14B8A6" },
  { name: "Supplies", value: 18, color: "#EC4899" },
  { name: "Utilities", value: 10, color: "#F59E0B" },
  { name: "Marketing", value: 9, color: "#8B5CF6" },
];

const tooltipStyle = {
  background: "hsl(222 30% 8%)", border: "1px solid hsl(222 20% 16%)", borderRadius: "12px", color: "hsl(210 40% 96%)",
};

const Analytics = () => (
  <div className="page-container">
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
      <p className="text-muted-foreground mt-1">Deep dive into your financial data</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="glass-card p-6 animate-fade-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <h3 className="text-sm font-semibold mb-4">Spending Trend</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={spendingTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 20% 16%)" />
            <XAxis dataKey="month" stroke="hsl(215 20% 55%)" fontSize={12} />
            <YAxis stroke="hsl(215 20% 55%)" fontSize={12} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line type="monotone" dataKey="amount" stroke="#4F46E5" strokeWidth={2.5} dot={{ fill: "#4F46E5", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-card p-6 animate-fade-up" style={{ opacity: 0, animationDelay: "0.2s" }}>
        <h3 className="text-sm font-semibold mb-4">Top Vendors by Spend</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={topVendors} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 20% 16%)" />
            <XAxis type="number" stroke="hsl(215 20% 55%)" fontSize={12} />
            <YAxis dataKey="name" type="category" stroke="hsl(215 20% 55%)" fontSize={12} width={85} />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey="amount" fill="#14B8A6" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-card p-6 lg:col-span-2 animate-fade-up" style={{ opacity: 0, animationDelay: "0.3s" }}>
        <h3 className="text-sm font-semibold mb-4">Expense Categories</h3>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={3}>
                {categoryData.map((c) => <Cell key={c.name} fill={c.color} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-3 flex-1">
            {categoryData.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: c.color }} />
                <span className="text-sm flex-1">{c.name}</span>
                <span className="text-sm font-semibold">{c.value}%</span>
                <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${c.value}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Analytics;

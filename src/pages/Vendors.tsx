import { Building2, DollarSign, FileText, CalendarDays } from "lucide-react";

const vendors = [
  { name: "TechSupply Co", spend: "$18,420", invoices: 42, lastTx: "2024-03-15", initials: "TS", color: "bg-primary/20 text-primary" },
  { name: "CloudServ Inc", spend: "$12,340", invoices: 28, lastTx: "2024-03-14", initials: "CS", color: "bg-teal/20 text-teal" },
  { name: "Office Depot", spend: "$8,650", invoices: 35, lastTx: "2024-03-13", initials: "OD", color: "bg-pink-400/20 text-pink-400" },
  { name: "PrintWorks", spend: "$5,230", invoices: 18, lastTx: "2024-03-12", initials: "PW", color: "bg-amber-400/20 text-amber-400" },
  { name: "GreenEnergy Ltd", spend: "$4,800", invoices: 12, lastTx: "2024-03-10", initials: "GE", color: "bg-emerald-400/20 text-emerald-400" },
  { name: "FastShip Corp", spend: "$3,920", invoices: 22, lastTx: "2024-03-09", initials: "FS", color: "bg-purple-400/20 text-purple-400" },
];

const Vendors = () => (
  <div className="page-container">
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Vendors</h1>
      <p className="text-muted-foreground mt-1">Manage your vendor relationships</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {vendors.map((v, i) => (
        <div key={v.name} className={`glass-card-hover p-5 cursor-pointer animate-fade-up stagger-${Math.min(i + 1, 5)}`} style={{ opacity: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold ${v.color}`}>
              {v.initials}
            </div>
            <div>
              <h3 className="font-semibold">{v.name}</h3>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <DollarSign className="w-3.5 h-3.5 mx-auto text-muted-foreground mb-1" />
              <p className="text-sm font-semibold">{v.spend}</p>
              <p className="text-[10px] text-muted-foreground">Total Spend</p>
            </div>
            <div>
              <FileText className="w-3.5 h-3.5 mx-auto text-muted-foreground mb-1" />
              <p className="text-sm font-semibold">{v.invoices}</p>
              <p className="text-[10px] text-muted-foreground">Invoices</p>
            </div>
            <div>
              <CalendarDays className="w-3.5 h-3.5 mx-auto text-muted-foreground mb-1" />
              <p className="text-sm font-semibold">{v.lastTx.slice(5)}</p>
              <p className="text-[10px] text-muted-foreground">Last Tx</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Vendors;
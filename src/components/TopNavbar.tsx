import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const TopNavbar = () => {
  return (
    <header className="h-14 flex items-center justify-between px-4 lg:px-6 border-b border-border/50 backdrop-blur-md bg-background/60 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground lg:hidden">
          <Menu className="w-5 h-5" />
        </SidebarTrigger>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search invoices, vendors..."
            className="input-glass pl-9 py-2 w-64 lg:w-80 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-xl hover:bg-accent transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>

        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-accent transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
            JD
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;

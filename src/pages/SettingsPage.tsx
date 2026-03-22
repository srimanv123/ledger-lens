import { Building2, User, Lock } from "lucide-react";

const SettingsPage = () => (
  <div className="page-container max-w-3xl">
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      <p className="text-muted-foreground mt-1">Manage your account and business preferences</p>
    </div>

    {/* Business Settings */}
    <div className="glass-card p-6 space-y-5 animate-fade-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
      <div className="flex items-center gap-3 mb-2">
        <Building2 className="w-5 h-5 text-primary" />
        <h2 className="font-semibold">Business Settings</h2>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Business Name</label>
          <input defaultValue="Acme Corporation" className="input-glass" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Currency</label>
            <select className="input-glass">
              <option>USD ($)</option><option>EUR (€)</option><option>GBP (£)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Tax Rate (%)</label>
            <input type="number" defaultValue="18" className="input-glass" />
          </div>
        </div>
      </div>
    </div>

    {/* User Settings */}
    <div className="glass-card p-6 space-y-5 animate-fade-up" style={{ opacity: 0, animationDelay: "0.2s" }}>
      <div className="flex items-center gap-3 mb-2">
        <User className="w-5 h-5 text-teal" />
        <h2 className="font-semibold">User Settings</h2>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Full Name</label>
            <input defaultValue="Jane Doe" className="input-glass" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <input defaultValue="jane@acme.co" className="input-glass" />
          </div>
        </div>
      </div>
    </div>

    {/* Password */}
    <div className="glass-card p-6 space-y-5 animate-fade-up" style={{ opacity: 0, animationDelay: "0.3s" }}>
      <div className="flex items-center gap-3 mb-2">
        <Lock className="w-5 h-5 text-pink-400" />
        <h2 className="font-semibold">Change Password</h2>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Current Password</label>
          <input type="password" placeholder="••••••••" className="input-glass" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">New Password</label>
            <input type="password" placeholder="••••••••" className="input-glass" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Confirm Password</label>
            <input type="password" placeholder="••••••••" className="input-glass" />
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-end">
      <button className="gradient-btn text-sm">Save Changes</button>
    </div>
  </div>
);

export default SettingsPage;

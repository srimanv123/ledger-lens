import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Building2 } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "var(--gradient-bg)" }}>
      <div className="glow-blob w-96 h-96 bg-primary -top-20 -right-20 animate-pulse-glow" />
      <div className="glow-blob w-80 h-80 bg-teal bottom-10 left-10 animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <div className="glow-blob w-64 h-64 bg-pink-500 top-1/3 right-1/3 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="glass-card p-8 sm:p-10 w-full max-w-md mx-4 animate-fade-up relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Create Account 🚀</h1>
          <p className="text-muted-foreground">Start managing your finances smarter</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="John Doe" className="input-glass pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Business Name</label>
            <div className="relative">
              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Acme Corp" className="input-glass pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="email" placeholder="you@company.com" className="input-glass pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input-glass pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="password" placeholder="••••••••" className="input-glass pl-10" />
            </div>
          </div>

          <button type="submit" className="gradient-btn w-full mt-2">
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline font-medium">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

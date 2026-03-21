import { useState } from "react";
import { Link } from "react-router-dom";
import { Sprout, Eye, EyeOff } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const { toast } = useToast();
  const [role, setRole] = useState<"farmer" | "retailer">("farmer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Signup coming soon", description: "Enable Lovable Cloud to activate authentication." });
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <ScrollReveal>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold text-lg">
              <Sprout className="h-6 w-6" /> AgroDirect
            </Link>
            <h1 className="mt-4 text-2xl font-bold tracking-tight">Create your account</h1>
            <p className="mt-1 text-sm text-muted-foreground">Join as a farmer or retailer</p>
          </div>

          {/* Role toggle */}
          <div className="mb-6 flex rounded-lg border bg-muted p-1">
            {(["farmer", "retailer"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition-all duration-150 ${
                  role === r
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r === "farmer" ? "🌾 Farmer" : "🏪 Retailer"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium" htmlFor="signup-name">
                {role === "farmer" ? "Farm / Your Name" : "Store / Your Name"}
              </label>
              <input
                id="signup-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 flex w-full rounded-lg border bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                placeholder={role === "farmer" ? "e.g. Ravi Kumar" : "e.g. Fresh Mart"}
                required
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 flex w-full rounded-lg border bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                placeholder="you@example.com"
                required
                maxLength={255}
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="signup-pw">Password</label>
              <div className="relative mt-1.5">
                <input
                  id="signup-pw"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex w-full rounded-lg border bg-background px-4 py-2.5 pr-10 text-sm shadow-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Min 8 characters"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-[transform,box-shadow] duration-150 hover:shadow-md active:scale-95"
            >
              Create Account
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">Log in</Link>
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Signup;

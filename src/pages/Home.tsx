import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  Layers,
  Mic,
  ShoppingCart,
  Truck,
  ShieldCheck,
  BarChart3,
  Leaf,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { icon: TrendingUp, value: "+40%", label: "More Income for Farmers" },
  { icon: DollarSign, value: "-30%", label: "Less Cost for Retailers" },
  { icon: Layers, value: "5–7", label: "Middlemen Layers Removed" },
  { icon: Users, value: "$400B+", label: "Indian Agri Market" },
];

const steps = [
  {
    num: "01",
    title: "Farmer Lists Produce",
    desc: "Farmers or Lead Farmers upload available crops via voice or app — no literacy required.",
  },
  {
    num: "02",
    title: "Retailers Browse & Order",
    desc: "Retailers see real-time inventory with transparent pricing and place orders directly.",
  },
  {
    num: "03",
    title: "Logistics & Delivery",
    desc: "Cluster collection hubs and partner transport deliver produce within 1–2 days.",
  },
  {
    num: "04",
    title: "Instant Payment",
    desc: "Farmers receive payment directly to their account — no delays, no commissions to middlemen.",
  },
];

const features = [
  { icon: Mic, title: "Voice-Based Input", desc: "Farmers can list produce using voice commands in their local language." },
  { icon: ShoppingCart, title: "Product Listing", desc: "Browse fresh vegetables, fruits, and grains with real-time availability." },
  { icon: BarChart3, title: "Retailer Dashboard", desc: "Track orders, manage inventory, and analyse spending — all in one place." },
  { icon: Truck, title: "1–2 Day Delivery", desc: "Cluster collection hubs ensure produce reaches retailers fast and fresh." },
  { icon: ShieldCheck, title: "Quality Guarantee", desc: "Every product passes quality checks before dispatch." },
  { icon: Leaf, title: "Lead Farmer Hubs", desc: "Local lead farmers onboard 40–50 farmers each, bridging the digital divide." },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/6 to-transparent" />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24 lg:pt-32">
          <ScrollReveal>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              Farmer to Retailer — Direct
            </span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1
              className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-wrap-balance"
              style={{ lineHeight: 1.08 }}
            >
              Fresh produce,{" "}
              <span className="text-primary">fair prices</span>,{" "}
              zero middlemen
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg text-wrap-pretty leading-relaxed">
              AgroDirect connects farmers directly with retailers, cutting 5–7 layers
              of middlemen so farmers earn more and retailers pay less.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-[transform,box-shadow] duration-150 hover:shadow-lg active:scale-95"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-lg border bg-card px-6 py-3 text-sm font-semibold shadow-sm transition-[transform,box-shadow] duration-150 hover:shadow-md active:scale-95"
              >
                See How It Works
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y sm:divide-y-0 lg:grid-cols-4 px-4 sm:px-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="flex flex-col items-center gap-2 py-10 px-4 text-center">
                <s.icon className="h-6 w-6 text-primary" />
                <span className="text-2xl font-bold tracking-tight sm:text-3xl">{s.value}</span>
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── PROBLEM STATEMENT ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ lineHeight: 1.15 }}>
                Middlemen earn more than farmers & retailers combined
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In the current supply chain, middlemen add 20–40% extra charges and control the market.
                A farmer who grows ₹20 worth of produce sees the consumer pay ₹37 — with ₹12 going to middlemen.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="mx-auto max-w-lg rounded-2xl border bg-card p-6 shadow-sm">
              <div className="space-y-3 text-sm">
                {[
                  { label: "Farmer earns", value: "₹20", pct: "54%", color: "bg-primary" },
                  { label: "Middlemen take", value: "₹12", pct: "32%", color: "bg-accent" },
                  { label: "Retailer earns", value: "₹5", pct: "14%", color: "bg-muted-foreground/40" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span>{row.label}</span>
                      <span>{row.value} ({row.pct})</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-muted">
                      <div className={`h-full rounded-full ${row.color}`} style={{ width: row.pct }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs font-semibold text-destructive">
                Middlemen earn more than farmer + retailer combined!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ lineHeight: 1.15 }}>
                How AgroDirect works
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Four simple steps from farm to store — no middlemen, no delays.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 100}>
                <div className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md h-full">
                  <span className="text-3xl font-bold text-primary/20">{s.num}</span>
                  <h3 className="mt-3 font-semibold text-base">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ lineHeight: 1.15 }}>
                Built for the ground reality
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every feature is designed to work for real farmers and retailers across India.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="group rounded-2xl border bg-card p-6 shadow-sm transition-[box-shadow,transform] duration-200 hover:shadow-md active:scale-[0.99] h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ lineHeight: 1.15 }}>
                Ready to sell directly?
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Join thousands of farmers and retailers already using AgroDirect to trade
                fairly and grow faster.
              </p>
              <Link
                to="/signup"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-[transform,box-shadow] duration-150 hover:shadow-lg active:scale-95"
              >
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;

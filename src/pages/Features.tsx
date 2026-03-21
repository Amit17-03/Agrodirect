import {
  Mic, ShoppingCart, BarChart3, Truck, ShieldCheck, Leaf,
  CreditCard, Globe, Bell, Smartphone,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const features = [
  { icon: Mic, title: "Voice-Based Input", desc: "Farmers list produce using voice commands in Hindi, Tamil, Telugu, or any regional language. No typing required." },
  { icon: ShoppingCart, title: "Product Marketplace", desc: "Browse vegetables, fruits, grains, and more with real-time availability, pricing, and quality grades." },
  { icon: BarChart3, title: "Retailer Dashboard", desc: "Full dashboard for retailers to track orders, manage favourites, view spending analytics, and reorder with one tap." },
  { icon: Leaf, title: "Lead Farmer Hubs", desc: "Each lead farmer onboards 40–50 local farmers, receives daily demand, and coordinates produce collection." },
  { icon: Truck, title: "1–2 Day Delivery", desc: "Cluster collection hubs aggregate produce and dispatch via partner logistics for fast, fresh delivery." },
  { icon: CreditCard, title: "Instant Payments", desc: "Farmers receive payment directly to their bank account within hours of dispatch — no commissions." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every batch is graded and checked at the hub before dispatch. Retailers know exactly what they're getting." },
  { icon: Globe, title: "Multi-Language Support", desc: "Platform available in 10+ Indian languages so every farmer and retailer can use it comfortably." },
  { icon: Bell, title: "Smart Notifications", desc: "Demand alerts for farmers, order updates for retailers — via SMS, WhatsApp, or push notifications." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Works on basic smartphones and slow networks. Designed for rural connectivity realities." },
];

const Features = () => (
  <div className="flex flex-col">
    <section className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ lineHeight: 1.1 }}>
              Platform Features
            </h1>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Every feature is built for ground-level reality — low-literacy farmers, busy retailers, and rural connectivity.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
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

    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ lineHeight: 1.15 }}>
              Start trading directly today
            </h2>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed">
              Whether you're a farmer looking for fair prices or a retailer seeking fresh produce — AgroDirect has you covered.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-[transform,box-shadow] duration-150 hover:shadow-lg active:scale-95"
            >
              Create Free Account
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Features;

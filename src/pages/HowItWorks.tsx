import { UserPlus, Search, Truck, Banknote, ArrowDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: UserPlus,
    title: "Register on the Platform",
    farmer: "Farmers register via a Lead Farmer or by voice input in their local language.",
    retailer: "Retailers sign up with their store details and delivery location.",
  },
  {
    icon: Search,
    title: "Browse & List Produce",
    farmer: "Farmers list available crops — quantity, quality, and expected price.",
    retailer: "Retailers browse real-time listings and compare prices from multiple farmers.",
  },
  {
    icon: Truck,
    title: "Order & Deliver",
    farmer: "Produce is collected at the nearest cluster hub for transport.",
    retailer: "Orders are dispatched and delivered within 1–2 days.",
  },
  {
    icon: Banknote,
    title: "Get Paid Directly",
    farmer: "Instant payment to the farmer's bank account — no commission to middlemen.",
    retailer: "Transparent billing with no hidden charges.",
  },
];

const HowItWorks = () => (
  <div className="flex flex-col">
    <section className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ lineHeight: 1.1 }}>
              How It Works
            </h1>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              From farm to store in four simple steps — no middlemen, no delays, no hidden fees.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="relative space-y-0">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 120}>
              <div className="relative pb-12 last:pb-0">
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
                )}
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="font-semibold text-base">{s.title}</h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border bg-card p-4 shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Farmer</span>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.farmer}</p>
                      </div>
                      <div className="rounded-xl border bg-card p-4 shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Retailer</span>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.retailer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-16 text-center">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-[transform,box-shadow] duration-150 hover:shadow-lg active:scale-95"
            >
              Get Started Now
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default HowItWorks;

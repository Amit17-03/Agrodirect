import { Target, Heart, Eye } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { icon: Target, title: "Our Mission", desc: "To eliminate exploitative middlemen from India's agricultural supply chain and put fair pricing power back in the hands of farmers and retailers." },
  { icon: Heart, title: "Our Vision", desc: "A future where every farmer earns what they deserve and every retailer accesses quality produce at honest prices." },
  { icon: Eye, title: "Our Approach", desc: "The Lead Farmer Hub model bridges the digital divide — local lead farmers onboard communities using voice and WhatsApp, not complex apps." },
];

const About = () => (
  <div className="flex flex-col">
    <section className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ lineHeight: 1.1 }}>
              About AgroDirect
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
              We're building the bridge between India's 150 million farmers and millions
              of retailers — removing the 5–7 layers of middlemen that drain value from both sides.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="rounded-2xl border bg-card p-8 shadow-sm h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ lineHeight: 1.15 }}>
              The problem we're solving
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In India's ₹400B+ agriculture market, middlemen control the supply chain. They add 20–40% 
              in extra charges, delay payments by weeks, and leave farmers with just 54% of the consumer price.
              AgroDirect changes that — giving farmers direct access to retailers with instant payments, 
              transparent pricing, and 1–2 day delivery through cluster hubs.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default About;

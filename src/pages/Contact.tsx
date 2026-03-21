import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      <section className="bg-muted/40 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ lineHeight: 1.1 }}>
                Contact Us
              </h1>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                Have questions? We'd love to hear from you. Reach out and we'll respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <h2 className="text-xl font-semibold">Get in touch</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Whether you're a farmer, retailer, or potential partner — we're here to help.
                </p>
              </ScrollReveal>
              {[
                { icon: Mail, label: "Email", value: "hello@agrodirect.in" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Office", value: "Bangalore, Karnataka, India" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 100}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Form */}
            <ScrollReveal delay={100} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8 space-y-5">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">Name</label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="mt-1.5 flex w-full rounded-lg border bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Your name"
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="mt-1.5 flex w-full rounded-lg border bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="you@example.com"
                    required
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    rows={5}
                    className="mt-1.5 flex w-full rounded-lg border bg-background px-4 py-2.5 text-sm shadow-sm resize-none placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="How can we help?"
                    required
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-[transform,box-shadow] duration-150 hover:shadow-md active:scale-95"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

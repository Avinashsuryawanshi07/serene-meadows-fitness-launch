import { Check, Sparkles } from "lucide-react";
import { waLink } from "@/lib/contact";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/ month",
    desc: "Perfect to kickstart your journey.",
    features: ["1-on-1 onboarding", "Basic workout plan", "Diet guidelines", "WhatsApp support"],
    featured: false,
  },
  {
    name: "Transform",
    price: "₹4,999",
    period: "/ month",
    desc: "Most popular. Real coaching, real results.",
    features: ["Personal training sessions", "Custom workout plan", "Personalized nutrition", "Weekly check-ins", "Progress tracking"],
    featured: true,
  },
  {
    name: "Elite",
    price: "₹7,999",
    period: "/ month",
    desc: "Maximum attention. Maximum results.",
    features: ["Unlimited PT sessions", "Daily diet adjustments", "Lifestyle coaching", "Priority WhatsApp", "Supplement guidance"],
    featured: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 md:py-28 bg-card">
    <div className="container-px max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Simple Pricing</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-4">
          Pick Your <span className="text-gradient">Plan</span>
        </h2>
        <p className="text-muted-foreground">Honest pricing. Premium coaching. No hidden fees.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative p-6 md:p-8 rounded-3xl border transition-all ${
              p.featured
                ? "bg-gradient-to-b from-primary/15 to-background border-primary shadow-glow scale-100 md:scale-105"
                : "bg-background border-border hover:border-primary/60"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}
            <h3 className="font-display text-2xl tracking-wide mb-1">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="font-display text-5xl text-primary">{p.price}</span>
              <span className="text-muted-foreground">{p.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <a
              href={waLink(`Hi, I'm interested in the ${p.name} plan at GO FIT`)}
              target="_blank"
              rel="noopener"
              className={`block text-center h-12 leading-[3rem] rounded-full font-bold transition-all ${
                p.featured
                  ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105"
                  : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;

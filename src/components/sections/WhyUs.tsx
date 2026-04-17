import { Award, Target, Trophy, Wallet, Clock } from "lucide-react";

const items = [
  { icon: Award, title: "Certified Trainer", desc: "Internationally certified coaching standards." },
  { icon: Target, title: "Personalized Plans", desc: "Built around your body, goals & lifestyle." },
  { icon: Trophy, title: "Proven Results", desc: "Hundreds of real client transformations." },
  { icon: Wallet, title: "Affordable Packages", desc: "Premium coaching at honest pricing." },
  { icon: Clock, title: "Flexible Timings", desc: "Train when it works for you, every day." },
];

const WhyUs = () => (
  <section className="py-20 md:py-28 bg-card relative overflow-hidden">
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

    <div className="relative container-px max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Why GO FIT</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-4">
          The <span className="text-gradient">Difference</span> You'll Feel
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {items.map((it) => (
          <div key={it.title} className="text-center p-5 md:p-6 rounded-2xl bg-background border border-border hover:border-primary/60 hover:shadow-glow transition-all">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <it.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg md:text-xl tracking-wide mb-2">{it.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;

import { Dumbbell, Flame, Beef, Apple, Laptop, Heart, TrendingDown, TrendingUp } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Personal Training", desc: "1-on-1 coaching tailored to your goals & body type." },
  { icon: TrendingDown, title: "Weight Loss", desc: "Sustainable fat loss programs that actually stick." },
  { icon: TrendingUp, title: "Weight Gain", desc: "Lean mass gain plans for hardgainers." },
  { icon: Beef, title: "Muscle Building", desc: "Hypertrophy-focused training & recovery." },
  { icon: Flame, title: "Fat Loss & Toning", desc: "Sculpt and tone for that defined athletic look." },
  { icon: Apple, title: "Nutrition Guidance", desc: "Custom diet plans built around Indian foods." },
  { icon: Laptop, title: "Online Coaching", desc: "Anywhere, anytime — full remote programs." },
  { icon: Heart, title: "Lifestyle Coaching", desc: "Sleep, stress & habits that compound results." },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container-px max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">What We Do</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-4">
          Programs Built to <span className="text-gradient">Deliver Results</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Whether you want to lose fat, gain muscle, or just feel unstoppable — we've got the plan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 shadow-card"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-xl tracking-wide mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

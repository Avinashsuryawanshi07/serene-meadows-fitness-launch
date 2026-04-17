import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";
import trainerImg from "@/assets/Aj.png";

const TrainerSection = () => (
  <section id="trainer" className="py-20 md:py-28 bg-background">
    <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
        <div className="relative rounded-3xl overflow-hidden border border-border shadow-card aspect-[4/5] max-w-md mx-auto">
          <img
            src={trainerImg}
            alt="Ajinkya Sangale — Certified Personal Trainer in Nashik"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background to-transparent">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              <BadgeCheck className="w-4 h-4" /> Certified Coach
            </div>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">
          Meet Your Coach
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-4 leading-tight">
          Ajinkya <span className="text-gradient">Sangale</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Certified Personal Trainer & Nutritionist with a passion for
          transforming everyday people into the strongest version of themselves.
        </p>

        <ul className="space-y-3 mb-8">
          {[
            "8+ years of hands-on coaching",
            "500+ successful client transformations",
            "Specialist in Indian-diet nutrition",
            "Builds custom plans, no copy-paste",
          ].map((p) => (
            <li key={p} className="flex items-center gap-3 text-foreground">
              <span className="w-6 h-6 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                <BadgeCheck className="w-4 h-4 text-primary" />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <Link
          to="/trainer"
          className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-105 transition-transform"
        >
          View Full Profile <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default TrainerSection;

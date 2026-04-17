import heroImg from "@/assets/hero-fitness.jpg";
import { MessageCircle, Phone, ChevronDown } from "lucide-react";
import { telLink, waLink } from "@/lib/contact";

const Hero = () => (
  <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Intense workout at GO FIT Nashik" className="w-full h-full object-cover object-center" width={1280} height={1600} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
    </div>

    <div className="relative container-px max-w-7xl mx-auto py-16 md:py-24">
      <div className="max-w-2xl animate-fade-in-up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Now Coaching in Nashik
        </span>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
          Transform Your <br />
          Body With <span className="text-gradient">GO FIT</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
          Personal Training & Nutrition Plans That Deliver <span className="text-foreground font-semibold">Real Results</span>. Coached by certified trainer Ajinkya Sangale.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-primary text-primary-foreground font-bold text-base shadow-glow hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> Book on WhatsApp
          </a>
          <a
            href={telLink}
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border-2 border-foreground/20 bg-background/40 backdrop-blur text-foreground font-bold text-base hover:border-primary hover:text-primary transition-all"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>

        <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border/50 max-w-md">
          {[
            { n: "500+", l: "Lives Changed" },
            { n: "8+", l: "Years Coaching" },
            { n: "100%", l: "Result Driven" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl text-primary">{s.n}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <a href="#services" aria-label="Scroll to services" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hidden sm:block">
      <ChevronDown className="w-6 h-6" />
    </a>
  </section>
);

export default Hero;

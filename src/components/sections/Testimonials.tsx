import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Sneha D.", role: "Online Client", text: "Ajinkya sir's diet plans are sustainable and Indian-friendly. I lost 12 kg without ever feeling starved. Highly recommended!" },
  { name: "Vikram J.", role: "Personal Training", text: "Best trainer in Nashik, hands down. Pushed me past every excuse I had. I'm in the best shape of my life at 38." },
  { name: "Aarti K.", role: "Weight Loss Program", text: "Postpartum I was lost. GO FIT brought my confidence back. The coaching is personal, never generic." },
  { name: "Mehul R.", role: "Muscle Building", text: "Gained 7 kg of clean muscle in 4 months. Programming and form correction is next level." },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-px max-w-4xl mx-auto text-center">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Testimonials</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-10">
          What Clients <span className="text-gradient">Say</span>
        </h2>

        <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card">
          <div className="flex justify-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-lg md:text-2xl text-foreground leading-relaxed font-medium mb-6 min-h-[120px] flex items-center justify-center">
            "{t.text}"
          </p>
          <div className="font-display text-xl text-primary tracking-wide">{t.name}</div>
          <div className="text-sm text-muted-foreground">{t.role}</div>

          <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Go to testimonial ${idx + 1}`} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

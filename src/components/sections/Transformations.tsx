import t1 from "@/assets/transform-1.jpg";
import t2 from "@/assets/transform-2.jpg";
import t3 from "@/assets/transform-3.jpg";

const stories = [
  { img: t1, name: "Rohan P.", goal: "Fat Loss", result: "Lost 18 kg in 5 months" },
  { img: t2, name: "Karan M.", goal: "Muscle Gain", result: "Gained 9 kg lean mass" },
  { img: t3, name: "Priya S.", goal: "Body Toning", result: "Down 3 sizes, full energy" },
];

const Transformations = () => (
  <section id="results" className="py-20 md:py-28 bg-card">
    <div className="container-px max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Real People · Real Results</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-4">
          Client <span className="text-gradient">Transformations</span>
        </h2>
        <p className="text-muted-foreground">Proof over promises. These are real GO FIT clients.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((s) => (
          <article key={s.name} className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/60 transition-all shadow-card">
            <div className="relative aspect-square overflow-hidden">
              <img src={s.img} alt={`${s.name} ${s.goal} transformation`} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                Before / After
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-display text-xl tracking-wide">{s.name}</h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.goal}</span>
              </div>
              <p className="text-primary font-semibold">{s.result}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Transformations;

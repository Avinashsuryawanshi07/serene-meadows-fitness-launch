import { Link } from "react-router-dom";
import { ArrowLeft, BadgeCheck, MessageCircle, Trophy, Target, Apple, Dumbbell, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import trainerImg from "@/assets/trainer-ajinkya.jpg";
import { waLink } from "@/lib/contact";

const certs = [
  "Certified Personal Trainer (CPT)",
  "Certified Sports Nutritionist",
  "Advanced Strength & Conditioning",
  "Functional Training Specialist",
];

const skills = [
  { icon: Dumbbell, label: "Muscle Building & Hypertrophy" },
  { icon: Target, label: "Fat Loss & Body Recomposition" },
  { icon: Apple, label: "Indian-Diet Nutrition Planning" },
  { icon: Heart, label: "Lifestyle & Habit Coaching" },
];

const achievements = [
  { n: "500+", l: "Clients Transformed" },
  { n: "8+", l: "Years Experience" },
  { n: "50+", l: "Online Clients" },
  { n: "5★", l: "Avg. Rating" },
];

const Trainer = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="pt-24 pb-20">
      <div className="container-px max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <section className="grid lg:grid-cols-5 gap-10 mb-20 items-center">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-border aspect-[4/5] shadow-card">
              <img src={trainerImg} alt="Ajinkya Sangale, certified personal trainer in Nashik" width={1024} height={1280} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <BadgeCheck className="w-3.5 h-3.5" /> Certified Trainer & Nutritionist
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-5">
              Ajinkya <span className="text-gradient">Sangale</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a fitness coach based in Nashik with one mission — to help everyday people build the body, energy and confidence they deserve. Over the past 8 years, I've coached 500+ clients through fat loss, muscle building, strength and lifestyle transformations using science-backed methods built around real Indian living.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {achievements.map((a) => (
                <div key={a.l} className="p-4 rounded-2xl bg-card border border-border text-center">
                  <div className="font-display text-3xl text-primary">{a.n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{a.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          <div className="p-7 rounded-3xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-5">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl tracking-wide">Certifications</h2>
            </div>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-primary shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 rounded-3xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl tracking-wide">Core Skills</h2>
            </div>
            <ul className="space-y-3">
              {skills.map((s) => (
                <li key={s.label} className="flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-primary shrink-0" /> {s.label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="p-7 md:p-10 rounded-3xl bg-card border border-border">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-5">My Coaching Philosophy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>I don't believe in shortcuts, crash diets, or "transformations" you can't sustain. My job is to teach you a system — training, nutrition and habits — that fits your real life.</p>
              <p>Every plan is built from scratch around your goals, body type, schedule and food preferences. You'll never feel like you're starving, lost or doing this alone.</p>
              <p className="text-foreground font-semibold">Show up. Trust the process. Get results that last.</p>
            </div>
          </div>
        </section>

        <section className="text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/15 via-card to-card border border-primary/40 shadow-glow">
          <h2 className="font-display text-3xl md:text-5xl mb-3">Ready to Start?</h2>
          <p className="text-muted-foreground mb-7 max-w-lg mx-auto">Book a free consultation and let's design your transformation plan together.</p>
          <a
            href={waLink("Hi Ajinkya, I'd like to book a training session with GO FIT")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> Book Training Session
          </a>
        </section>
      </div>
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Trainer;

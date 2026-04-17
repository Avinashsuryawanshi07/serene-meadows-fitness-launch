import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Where is GO FIT located?", a: "We're based in Serene Meadows, Nashik, Maharashtra 422010. Easy to reach from anywhere in the city." },
  { q: "Do you offer online coaching?", a: "Yes! Online coaching includes a custom workout plan, personalized nutrition, and weekly WhatsApp check-ins from anywhere in India." },
  { q: "How quickly will I see results?", a: "Most clients see visible changes within 4-6 weeks of consistent training and nutrition. Real transformation happens in 3-6 months." },
  { q: "Is the diet plan vegetarian-friendly?", a: "Absolutely. We build plans around your eating preferences — veg, non-veg, eggetarian or Jain." },
  { q: "Do I need prior gym experience?", a: "Not at all. We coach beginners to advanced. Form, technique and progression are taught from day one." },
  { q: "How do I book a session?", a: "Just tap the WhatsApp button or call 9623103101. We'll set up a free consultation call." },
];

const FAQ = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container-px max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">FAQ</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-4">
          Common <span className="text-gradient">Questions</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/60"
          >
            <AccordionTrigger className="text-left font-display text-lg tracking-wide hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;

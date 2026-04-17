import { MapPin, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { ADDRESS, telLink, waLink, SOCIALS } from "@/lib/contact";

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 bg-card">
    <div className="container-px max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Get In Touch</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-4">
          Let's Start Your <span className="text-gradient">Transformation</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <div className="p-6 md:p-10 rounded-3xl bg-background border border-border space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Address</div>
              <p className="text-foreground font-medium">{ADDRESS}</p>
            </div>
          </div>

          <a href={telLink} className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
              <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Call Us</div>
              <p className="text-foreground font-medium group-hover:text-primary">9623103101</p>
            </div>
          </a>

          <a href={waLink()} target="_blank" rel="noopener" className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
              <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</div>
              <p className="text-foreground font-medium group-hover:text-primary">Tap to chat instantly</p>
            </div>
          </a>

          <div className="pt-4 border-t border-border">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Follow</div>
            <div className="flex gap-3">
              <a href={SOCIALS.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Instagram className="w-5 h-5" /></a>
              <a href={SOCIALS.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Facebook className="w-5 h-5" /></a>
              <a href={SOCIALS.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="block text-center w-full h-14 leading-[3.5rem] rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-[1.02] transition-transform"
          >
            Book Free Consultation
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border min-h-[400px] shadow-card">
          <iframe
            title="GO FIT Nashik Location"
            src="https://www.google.com/maps?q=Serene+Meadows,+Nashik,+Maharashtra+422010&output=embed"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

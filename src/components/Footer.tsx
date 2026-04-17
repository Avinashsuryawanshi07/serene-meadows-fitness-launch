import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Phone, MapPin } from "lucide-react";
import { ADDRESS, telLink, waLink, SOCIALS } from "@/lib/contact";

const Footer = () => (
  <footer className="bg-secondary border-t border-border pt-14 pb-8">
    <div className="container-px max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center font-display text-xl text-primary-foreground">G</div>
          <span className="font-display text-2xl tracking-wider">GO <span className="text-primary">FIT</span></span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Personal training & nutrition that transforms bodies and lives — proudly serving Nashik.
        </p>
      </div>

      <div>
        <h4 className="font-display text-xl mb-4 text-primary">Get In Touch</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {ADDRESS}</li>
          <li><a href={telLink} className="flex items-center gap-3 hover:text-primary"><Phone className="w-4 h-4 text-primary" /> 9623103101</a></li>
          <li><a href={waLink()} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-primary"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp Chat</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-xl mb-4 text-primary">Follow Us</h4>
        <div className="flex gap-3">
          <a href={SOCIALS.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
            <Instagram className="w-5 h-5" />
          </a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
            <Facebook className="w-5 h-5" />
          </a>
          <a href={SOCIALS.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp" className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
        <Link to="/trainer" className="inline-block mt-6 text-sm text-primary hover:underline">Meet the Trainer →</Link>
      </div>
    </div>

    <div className="container-px max-w-7xl mx-auto mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} GO FIT Nashik. All rights reserved.</p>
      <p>Best gym trainer in Nashik · Designed to transform.</p>
    </div>
  </footer>
);

export default Footer;

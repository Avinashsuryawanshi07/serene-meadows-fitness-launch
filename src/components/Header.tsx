import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { telLink, waLink } from "@/lib/contact";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Trainer", href: "/#trainer" },
  { label: "Results", href: "/#results" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== "/" ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-px max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center font-display text-xl text-primary-foreground shadow-glow">
            G
          </div>
          <span className="font-display text-2xl tracking-wider text-foreground">
            GO <span className="text-primary">FIT</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" /> 9623103101
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center px-5 h-10 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm shadow-glow hover:scale-105 transition-transform"
          >
            Book Now
          </a>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container-px py-6 flex flex-col gap-4">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary py-2"
              >
                {n.label}
              </a>
            ))}
            <a
              href={telLink}
              className="inline-flex items-center gap-2 text-foreground font-semibold pt-2 border-t border-border"
            >
              <Phone className="w-4 h-4 text-primary" /> 9623103101
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

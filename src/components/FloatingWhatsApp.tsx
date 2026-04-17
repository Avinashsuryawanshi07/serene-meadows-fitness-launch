import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

const FloatingWhatsApp = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noopener"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-glow animate-pulse-glow hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-7 h-7" fill="currentColor" />
    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
  </a>
);

export default FloatingWhatsApp;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import TrainerSection from "@/components/sections/TrainerSection";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <TrainerSection />
      <Transformations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;

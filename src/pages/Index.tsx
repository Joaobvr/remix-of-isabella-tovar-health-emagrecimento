import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import HeroSection from "@/components/landing/HeroSection";

import AboutSection from "@/components/landing/AboutSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;

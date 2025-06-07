
import LandingNavigation from '@/components/LandingNavigation';
import HeroSection from '@/components/HeroSection';
import USPBar from '@/components/USPBar';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import CaseStudySection from '@/components/CaseStudySection';
import PricingTeaser from '@/components/PricingTeaser';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavigation />
      <HeroSection />
      <USPBar />
      <BenefitsSection />
      <CaseStudySection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingTeaser />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;

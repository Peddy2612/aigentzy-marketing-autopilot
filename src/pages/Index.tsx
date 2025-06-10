
import LandingNavigation from '@/components/LandingNavigation';
import HeroSection from '@/components/HeroSection';
import WhyAigentzySection from '@/components/WhyAigentzySection';
import ProductStagingSection from '@/components/ProductStagingSection';
import PerformanceSection from '@/components/PerformanceSection';
import CaseStudySection from '@/components/CaseStudySection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="relative z-10">
        <LandingNavigation />
        <HeroSection />
        <WhyAigentzySection />
        <ProductStagingSection />
        <PerformanceSection />
        <CaseStudySection />
        <FinalCTASection />
        <Footer />
        <ExitIntentPopup />
      </div>
    </div>
  );
};

export default Index;

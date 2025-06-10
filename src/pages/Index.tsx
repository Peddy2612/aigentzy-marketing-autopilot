
import LandingNavigation from '@/components/LandingNavigation';
import HeroSection from '@/components/HeroSection';
import WhyAigentzySection from '@/components/WhyAigentzySection';
import ProductStagingSection from '@/components/ProductStagingSection';
import PerformanceSection from '@/components/PerformanceSection';
import SocialProofSection from '@/components/SocialProofSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <div className="relative z-10">
        <LandingNavigation />
        <HeroSection />
        <WhyAigentzySection />
        <ProductStagingSection />
        <PerformanceSection />
        <SocialProofSection />
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

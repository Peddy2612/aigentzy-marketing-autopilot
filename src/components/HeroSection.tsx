
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-aigentzy-light-violet/20 to-aigentzy-medium-blue/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Marketing auf 
                <span className="gradient-text"> Autopilot </span>
                für Ihr KMU
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unsere KI-Agenten erstellen, planen und veröffentlichen Ihren Content – 
                in Minuten statt Tagen.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={() => scrollToSection('beta-signup')}
                className="bg-aigentzy-medium-blue hover:bg-aigentzy-deep-violet text-white px-8 py-4 text-lg rounded-full transition-all-smooth shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Kostenlosen Frühzugang sichern
              </Button>
              <p className="text-sm text-gray-500">Keine Kreditkarte nötig</p>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-aigentzy-light-violet to-aigentzy-medium-blue/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-aigentzy-deep-violet/20 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-aigentzy-deep-violet rounded-full"></div>
                  </div>
                  <p className="text-aigentzy-deep-violet font-semibold">AI Dashboard Preview</p>
                  <div className="grid grid-cols-3 gap-2 max-w-48 mx-auto">
                    <div className="h-2 bg-aigentzy-medium-blue/30 rounded"></div>
                    <div className="h-2 bg-aigentzy-deep-violet/30 rounded"></div>
                    <div className="h-2 bg-aigentzy-light-violet/60 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-aigentzy-medium-blue" />
      </div>
    </section>
  );
};

export default HeroSection;

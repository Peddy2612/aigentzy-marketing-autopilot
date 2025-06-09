import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const LandingNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all-smooth ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold gradient-text">Aigentzy</span>
          </div>
          
          <Button onClick={() => scrollToSection('beta-signup')} className="bg-aigentzy-medium-blue hover:bg-aigentzy-deep-violet text-white px-6 py-2 rounded-full transition-all-smooth shadow-lg hover:shadow-xl">Early Access sichern</Button>
        </div>
      </div>
    </nav>;
};
export default LandingNavigation;
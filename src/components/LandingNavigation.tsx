
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const LandingNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-2xl bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet flex items-center justify-center relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="text-white font-bold text-lg relative z-10">A</span>
                </motion.div>
                <span className="text-2xl font-bold text-white">Aigentzy</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('early-access-signup')} 
                  className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-white/20 relative group overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Early Access sichern
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default LandingNavigation;


import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white via-aigentzy-light-violet/20 to-aigentzy-medium-blue/10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Marketing-Autopilot statt 
                <span className="gradient-text"> Marketing-Agentur.</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Unsere KI-Agenten erstellen, planen und veröffentlichen Ihren Content – 
                in Minuten statt Tagen, ab 99 €/Monat.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    onClick={() => scrollToSection('early-access-signup')}
                    className="bg-aigentzy-medium-blue hover:bg-aigentzy-deep-violet text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform"
                  >
                    Early Access-Platz sichern
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    variant="outline"
                    className="border-aigentzy-deep-violet text-aigentzy-deep-violet hover:bg-aigentzy-deep-violet hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    2-Minuten-Demo ansehen
                  </Button>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Badge className="bg-aigentzy-light-violet text-aigentzy-deep-violet border-none">
                  DSGVO-konform 🇩🇪🇦🇹🇨🇭 · Server in der EU
                </Badge>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="aspect-video bg-gradient-to-br from-aigentzy-light-violet to-aigentzy-medium-blue/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-3">
                  <motion.div 
                    className="w-16 h-16 bg-aigentzy-deep-violet/20 rounded-full flex items-center justify-center mx-auto"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-8 h-8 bg-aigentzy-deep-violet rounded-full"></div>
                  </motion.div>
                  <p className="text-aigentzy-deep-violet font-semibold">AI Dashboard Preview</p>
                  <div className="grid grid-cols-3 gap-2 max-w-48 mx-auto">
                    {[0, 1, 2].map((i) => (
                      <motion.div 
                        key={i}
                        className="h-2 bg-aigentzy-medium-blue/30 rounded"
                        animate={{ scaleX: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-aigentzy-medium-blue" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

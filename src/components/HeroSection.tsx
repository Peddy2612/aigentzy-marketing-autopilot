
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Subtle animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 20%, rgba(201, 202, 250, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(45, 135, 227, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(105, 77, 251, 0.2) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Fokussierte Headline */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-aigentzy-deep-violet leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Marketing. Endlich automatisiert.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Aigentzy denkt mit, plant vor und liefert Content, der wirkt.
            </motion.p>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={() => scrollToSection('demo-section')}
                className="bg-aigentzy-medium-blue hover:bg-blue-600 text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-aigentzy-medium-blue/25 w-full md:w-auto"
              >
                Beta sichern
              </Button>
            </motion.div>
          </motion.div>

          {/* Kompakte Produktvisualisierung */}
          <motion.div 
            className="pt-16 pb-8"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 relative max-w-3xl mx-auto"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aigentzy-light-violet/10 to-aigentzy-medium-blue/10 rounded-2xl blur-xl opacity-60" />
              
              <div className="aspect-video bg-gradient-to-br from-aigentzy-light-violet/5 to-white rounded-xl flex items-center justify-center relative overflow-hidden border border-gray-50">
                <div className="text-center space-y-6">
                  <motion.div 
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-2xl flex items-center justify-center mx-auto shadow-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center">
                      <span className="text-aigentzy-deep-violet font-bold text-lg md:text-xl">A</span>
                    </div>
                  </motion.div>
                  
                  <p className="text-aigentzy-deep-violet font-semibold text-lg md:text-xl">KI Marketing Dashboard</p>
                  
                  {/* Kompakte Metriken */}
                  <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                    {[
                      { label: "Content erstellt", value: "847" },
                      { label: "Neue Leads", value: "+234" },
                      { label: "Zeit gespart", value: "12h" }
                    ].map((metric, i) => (
                      <motion.div 
                        key={metric.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2 + (i * 0.1) }}
                      >
                        <div className="text-aigentzy-medium-blue font-bold text-xl md:text-2xl mb-1">{metric.value}</div>
                        <div className="text-gray-500 text-xs md:text-sm">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div 
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          >
            <p className="text-base md:text-lg text-gray-500 font-medium max-w-2xl mx-auto">
              Was Agenturen in Wochen tun, erledigt Aigentzy in Minuten.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Eleganter Scroll-Indikator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div 
          className="w-5 h-10 border-2 border-aigentzy-deep-violet/20 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-0.5 h-3 bg-aigentzy-deep-violet rounded-full mt-2"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


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
        className="absolute inset-0 opacity-30"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 20%, rgba(201, 202, 250, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(45, 135, 227, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(105, 77, 251, 0.2) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="space-y-20">
          {/* Main headline with Apple-style entrance */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl lg:text-8xl xl:text-9xl font-bold text-aigentzy-deep-violet leading-[1.1] tracking-tight max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              Marketing.
              <br />
              <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">
                Neu gedacht.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Aigentzy ist dein neuer Growth-Agent – powered by echten KI-Agenten.
            </motion.p>
          </motion.div>
          
          {/* Product visualization with elegant design */}
          <motion.div 
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <motion.div 
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aigentzy-light-violet/20 to-aigentzy-medium-blue/20 rounded-3xl blur-xl opacity-50" />
              
              <div className="aspect-video bg-gradient-to-br from-aigentzy-light-violet/10 to-white rounded-2xl flex items-center justify-center relative overflow-hidden border border-gray-100">
                <div className="text-center space-y-8">
                  <motion.div 
                    className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-3xl flex items-center justify-center mx-auto shadow-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center">
                      <span className="text-aigentzy-deep-violet font-bold text-xl lg:text-2xl">A</span>
                    </div>
                  </motion.div>
                  <p className="text-aigentzy-deep-violet font-bold text-xl lg:text-2xl">AI Marketing Dashboard</p>
                  
                  {/* Animated metrics showcase */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-2xl mx-auto">
                    {[
                      { label: "Content erstellt", value: "847" },
                      { label: "Leads generiert", value: "+234" },
                      { label: "Zeit gespart", value: "12h" }
                    ].map((metric, i) => (
                      <motion.div 
                        key={metric.label}
                        className="text-center p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.5 + (i * 0.2) }}
                      >
                        <div className="text-aigentzy-medium-blue font-bold text-2xl lg:text-3xl mb-2">{metric.value}</div>
                        <div className="text-gray-600 text-sm lg:text-base">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Apple-style CTA */}
          <motion.div 
            className="space-y-8 pt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={() => scrollToSection('demo-section')}
                className="bg-aigentzy-medium-blue hover:bg-blue-600 text-white px-12 lg:px-16 py-4 lg:py-6 text-lg lg:text-2xl rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-aigentzy-medium-blue/25 relative group"
              >
                <Play className="w-5 h-5 lg:w-7 lg:h-7 mr-3 lg:mr-4" />
                Demo ansehen
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <motion.div 
        className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div 
          className="w-6 h-12 border-2 border-aigentzy-deep-violet/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-4 bg-aigentzy-deep-violet rounded-full mt-2"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background particles */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 20%, rgba(105, 77, 251, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(45, 135, 227, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(201, 202, 250, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="space-y-12">
          {/* Main headline with staggered animation */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Marketing
              <br />
              <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">
                neu gedacht.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Das erste KI-System, das Ihre Marke versteht.
            </motion.p>
          </motion.div>
          
          {/* Product mockup with glow effect */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 shadow-2xl max-w-4xl mx-auto relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aigentzy-medium-blue/20 to-aigentzy-deep-violet/20 rounded-3xl blur-xl -z-10" />
              
              <div className="aspect-video bg-gradient-to-br from-aigentzy-light-violet/20 to-aigentzy-medium-blue/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-6">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-3xl flex items-center justify-center mx-auto"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                      <span className="text-aigentzy-deep-violet font-bold text-xl">A</span>
                    </div>
                  </motion.div>
                  <p className="text-white font-semibold text-lg">AI Marketing Dashboard</p>
                  
                  {/* Animated metrics */}
                  <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                    {[
                      { label: "Conversion Rate", value: "+284%" },
                      { label: "Time Saved", value: "12h/week" },
                      { label: "Lead Quality", value: "+156%" }
                    ].map((metric, i) => (
                      <motion.div 
                        key={metric.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2 + (i * 0.2) }}
                      >
                        <div className="text-aigentzy-medium-blue font-bold text-lg">{metric.value}</div>
                        <div className="text-gray-400 text-sm">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Floating CTA */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={() => scrollToSection('demo-section')}
                className="bg-white text-black hover:bg-gray-100 px-12 py-6 text-xl rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-white/20 relative group"
              >
                <Play className="w-6 h-6 mr-3" />
                Demo ansehen
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

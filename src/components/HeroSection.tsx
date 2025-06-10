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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Subtle animated background gradient */}
      <motion.div className="absolute inset-0 opacity-30" animate={{
      background: ["radial-gradient(circle at 20% 20%, rgba(201, 202, 250, 0.3) 0%, transparent 50%)", "radial-gradient(circle at 80% 80%, rgba(45, 135, 227, 0.2) 0%, transparent 50%)", "radial-gradient(circle at 50% 50%, rgba(105, 77, 251, 0.2) 0%, transparent 50%)"]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="space-y-16">
          {/* Main headline with Apple-style entrance */}
          <motion.div className="space-y-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1.5,
          ease: "easeOut"
        }}>
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut"
          }} className="text-7xl lg:text-9xl font-bold text-aigentzy-deep-violet leading-tight tracking-tight mx-px my-[100px] py-0">
              Marketing.
              <br />
              <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">
                Neu gedacht.
              </span>
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeOut"
          }} className="lg:text-4xl text-gray-700 leading-relaxed max-w-5xl mx-auto py-0 my-0 text-3xl font-light">Automatisiert. Persönlich. Endlich verständlich.</motion.p>
          </motion.div>
          
          {/* Product visualization with elegant design */}
          <motion.div className="relative max-w-6xl mx-auto" initial={{
          opacity: 0,
          scale: 0.8,
          y: 100
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} transition={{
          duration: 1.5,
          delay: 1.2,
          ease: "easeOut"
        }} style={{
          transform: `translateY(${scrollY * 0.2}px)`
        }}>
            <motion.div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative" whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aigentzy-light-violet/20 to-aigentzy-medium-blue/20 rounded-3xl blur-xl opacity-50" />
              
              <div className="aspect-video bg-gradient-to-br from-aigentzy-light-violet/10 to-white rounded-2xl flex items-center justify-center relative overflow-hidden border border-gray-100">
                <div className="text-center space-y-8">
                  <motion.div className="w-32 h-32 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-3xl flex items-center justify-center mx-auto shadow-lg" animate={{
                  rotate: [0, 360]
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                      <span className="text-aigentzy-deep-violet font-bold text-2xl">A</span>
                    </div>
                  </motion.div>
                  <p className="text-aigentzy-deep-violet font-bold text-2xl">AI Marketing Dashboard</p>
                  
                  {/* Animated metrics showcase */}
                  <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                    {[{
                    label: "Content erstellt",
                    value: "847"
                  }, {
                    label: "Leads generiert",
                    value: "+234"
                  }, {
                    label: "Zeit gespart",
                    value: "12h"
                  }].map((metric, i) => <motion.div key={metric.label} className="text-center" initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.6,
                    delay: 2.5 + i * 0.2
                  }}>
                        <div className="text-aigentzy-medium-blue font-bold text-2xl">{metric.value}</div>
                        <div className="text-gray-600 text-sm">{metric.label}</div>
                      </motion.div>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Apple-style CTA */}
          <motion.div className="space-y-6" initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 2,
          ease: "easeOut"
        }}>
            <motion.div whileHover={{
            scale: 1.05,
            y: -5
          }} whileTap={{
            scale: 0.95
          }} transition={{
            duration: 0.2
          }} className="my-0">
              <Button onClick={() => scrollToSection('demo-section')} className="bg-aigentzy-medium-blue hover:bg-blue-600 text-white px-16 py-6 text-2xl rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-aigentzy-medium-blue/25 relative group">
                <Play className="w-7 h-7 mr-4" />
                Demo ansehen
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 my-0" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <motion.div className="absolute bottom-12 left-1/2 transform -translate-x-1/2" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 3
    }}>
        <motion.div className="w-6 h-12 border-2 border-aigentzy-deep-violet/30 rounded-full flex justify-center" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <motion.div className="w-1 h-4 bg-aigentzy-deep-violet rounded-full mt-2" animate={{
          scaleY: [1, 0.3, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;
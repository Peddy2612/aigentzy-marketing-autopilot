
import { Clipboard, FileText, Bot, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Clipboard,
      step: "1",
      title: "Formular ausfüllen (3 Min.)",
      description: "Teilen Sie uns Ihre Zielgruppe, Branche und Marketing-Ziele mit"
    },
    {
      icon: FileText,
      step: "2", 
      title: "Blueprint-PDF in 10 Min.",
      description: "Erhalten Sie Ihren individuellen 6-seitigen Wachstumsplan"
    },
    {
      icon: Bot,
      step: "3",
      title: "KI generiert Posts & Visuals",
      description: "Unsere KI erstellt maßgeschneiderte Inhalte und ansprechende Grafiken"
    },
    {
      icon: Rocket,
      step: "4",
      title: "Autopilot veröffentlicht + optimiert",
      description: "Automatische Veröffentlichung zur optimalen Zeit mit kontinuierlicher Optimierung"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-aigentzy-light-violet/20 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-16">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">
              So <span className="gradient-text">funktioniert's</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In nur 4 einfachen Schritten zu professionellem Marketing-Autopilot
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-8 relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div key={index} className="relative" variants={itemVariants}>
                <motion.div 
                  className="bg-white rounded-2xl p-6 text-center space-y-4 shadow-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-16 h-16 bg-aigentzy-medium-blue rounded-2xl flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div 
                      className="absolute -top-2 -right-2 w-8 h-8 bg-aigentzy-medium-blue text-white rounded-full flex items-center justify-center text-sm font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
                
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute top-8 -right-4 transform w-8 h-0.5 bg-gray-300"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + (index * 0.3) }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

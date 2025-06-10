
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const PerformanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  const [leads, setLeads] = useState(0);
  const [reach, setReach] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => {
        const interval1 = setInterval(() => {
          setLeads(prev => prev < 182 ? prev + 6 : 182);
        }, 50);
        setTimeout(() => clearInterval(interval1), 2000);
      }, 500);

      const timer2 = setTimeout(() => {
        const interval2 = setInterval(() => {
          setReach(prev => prev < 234 ? prev + 8 : 234);
        }, 50);
        setTimeout(() => clearInterval(interval2), 2000);
      }, 1000);

      const timer3 = setTimeout(() => {
        const interval3 = setInterval(() => {
          setTimeSaved(prev => prev < 72 ? prev + 3 : 72);
        }, 50);
        setTimeout(() => clearInterval(interval3), 2000);
      }, 1500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isInView]);

  const metrics = [
    {
      label: "neue Leads",
      value: leads,
      prefix: "+",
      color: "text-aigentzy-medium-blue",
      bgColor: "from-aigentzy-medium-blue/10 to-aigentzy-medium-blue/5",
      description: "Qualifizierte Interessenten pro Monat"
    },
    {
      label: "Reichweite", 
      value: reach,
      prefix: "+",
      suffix: "%",
      color: "text-aigentzy-deep-violet",
      bgColor: "from-aigentzy-deep-violet/10 to-aigentzy-deep-violet/5",
      description: "Organische Sichtbarkeit gestiegen"
    },
    {
      label: "Zeitaufwand",
      value: timeSaved,
      prefix: "-",
      suffix: "%",
      color: "text-aigentzy-light-violet",
      bgColor: "from-aigentzy-light-violet/20 to-aigentzy-light-violet/10",
      description: "Weniger manuelle Marketing-Arbeit"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-aigentzy-light-violet/5 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-20">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-6xl lg:text-8xl font-bold text-aigentzy-deep-violet leading-tight">
              Zahlen sprechen 
              <br />
              <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">
                lassen
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Durchschnittliche Ergebnisse unserer Kunden in den ersten 30 Tagen
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div 
                key={metric.label}
                className="relative"
                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 100 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <div className={`bg-gradient-to-br ${metric.bgColor} rounded-3xl p-8 border border-white shadow-xl relative overflow-hidden backdrop-blur-sm`}>
                  <div className="relative z-10 space-y-6">
                    <motion.div 
                      className={`text-7xl lg:text-8xl font-bold ${metric.color}`}
                      animate={isInView ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 2, delay: 1 + (index * 0.3), repeat: Infinity, repeatDelay: 3 }}
                    >
                      {metric.prefix}{metric.value}{metric.suffix}
                    </motion.div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-aigentzy-deep-violet">{metric.label}</h3>
                      <p className="text-gray-600">{metric.description}</p>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className={`h-full rounded-full bg-gradient-to-r ${metric.bgColor.replace('/10', '').replace('/5', '/50')}`}
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${Math.min((metric.value / 300) * 100, 90)}%` } : { width: "0%" }}
                        transition={{ duration: 2, delay: 1.5 + (index * 0.3), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;

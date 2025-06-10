
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const PerformanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, margin: "-20%" });
  
  const [conversions, setConversions] = useState(0);
  const [leads, setLeads] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => {
        const interval1 = setInterval(() => {
          setConversions(prev => prev < 284 ? prev + 8 : 284);
        }, 50);
        setTimeout(() => clearInterval(interval1), 2000);
      }, 500);

      const timer2 = setTimeout(() => {
        const interval2 = setInterval(() => {
          setLeads(prev => prev < 156 ? prev + 5 : 156);
        }, 50);
        setTimeout(() => clearInterval(interval2), 2000);
      }, 1000);

      const timer3 = setTimeout(() => {
        const interval3 = setInterval(() => {
          setEfficiency(prev => prev < 89 ? prev + 3 : 89);
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
      label: "Conversions",
      value: conversions,
      suffix: "%",
      color: "text-aigentzy-medium-blue",
      bgColor: "from-aigentzy-medium-blue/20",
      description: "Höhere Conversion Rate"
    },
    {
      label: "Lead-Qualität", 
      value: leads,
      suffix: "%",
      color: "text-aigentzy-deep-violet",
      bgColor: "from-aigentzy-deep-violet/20",
      description: "Qualifiziertere Leads"
    },
    {
      label: "Effizienz",
      value: efficiency,
      suffix: "%",
      color: "text-aigentzy-light-violet",
      bgColor: "from-aigentzy-light-violet/20",
      description: "Zeitersparnis"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-20">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Leistung, die 
              <br />
              <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">
                überzeugt
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Echte Ergebnisse unserer Kunden in den ersten 30 Tagen
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <div className={`bg-gradient-to-br ${metric.bgColor} to-transparent rounded-3xl p-8 border border-gray-800 relative overflow-hidden backdrop-blur-sm`}>
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0 opacity-10"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, currentColor 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, currentColor 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 100%, currentColor 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 0%, currentColor 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <div className="relative z-10 space-y-6">
                    <motion.div 
                      className={`text-7xl font-bold ${metric.color}`}
                      animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, delay: 1 + (index * 0.3), repeat: Infinity, repeatDelay: 3 }}
                    >
                      +{metric.value}{metric.suffix}
                    </motion.div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{metric.label}</h3>
                      <p className="text-gray-400 text-sm">{metric.description}</p>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div 
                        className={`h-full rounded-full bg-gradient-to-r ${metric.bgColor.replace('/20', '')} to-transparent`}
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${(metric.value / 300) * 100}%` } : { width: "0%" }}
                        transition={{ duration: 2, delay: 1.5 + (index * 0.3), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional performance chart */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Performance im Zeitverlauf</h3>
              
              <div className="grid grid-cols-12 gap-2 h-40 items-end">
                {[...Array(12)].map((_, i) => {
                  const height = Math.random() * 60 + 40;
                  return (
                    <motion.div 
                      key={i}
                      className="bg-gradient-to-t from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-t"
                      style={{ height: `${height}%` }}
                      initial={{ height: "0%" }}
                      animate={isInView ? { height: `${height}%` } : { height: "0%" }}
                      transition={{ duration: 0.8, delay: 2 + (i * 0.1), ease: "easeOut" }}
                    />
                  );
                })}
              </div>
              
              <div className="flex justify-between mt-4 text-gray-500 text-sm">
                <span>Jan</span>
                <span>Dez</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;

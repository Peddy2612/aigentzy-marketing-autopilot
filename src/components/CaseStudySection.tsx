
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-aigentzy-light-violet" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2 
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="gradient-text">Metallbau Meyer: +28% Anfragen in 4 Wochen</span>
          </motion.h2>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Das 12-köpfige Familienunternehmen steigerte seine Online-Leads um 28%. 
                AIgentzy übernahm täglich LinkedIn-Posts & Newsletter vollautomatisch. 
                <strong className="text-aigentzy-deep-violet"> »Ich spare 10 Stunden pro Woche und bekomme mehr qualifizierte Anfragen denn je«</strong>, 
                sagt Geschäftsführerin Laura Meyer.
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center space-x-4"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-aigentzy-neutral-gray rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-sm font-semibold text-aigentzy-deep-violet">LM</span>
                </motion.div>
                <div className="text-left">
                  <p className="font-semibold">Laura Meyer</p>
                  <p className="text-gray-600 text-sm">Geschäftsführerin</p>
                  <motion.div 
                    className="flex space-x-1 mt-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.8 + (index * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star className="w-4 h-4 fill-aigentzy-deep-violet text-aigentzy-deep-violet" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

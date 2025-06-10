
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-aigentzy-light-violet/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <blockquote className="text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed italic">
                „Endlich eine Lösung, die mein Marketing nicht nur automatisiert – sondern versteht."
              </blockquote>
              
              <motion.div 
                className="flex items-center justify-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MK
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-aigentzy-deep-violet">Maria Kowalski</div>
                  <div className="text-gray-600">Marketing Director, TechFlow GmbH</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;

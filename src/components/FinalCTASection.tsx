
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Vielen Dank! Sie wurden zur Early Access-Warteliste hinzugefügt.');
    setEmail('');
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + (i * 0.2),
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="early-access-signup" className="py-20 bg-gradient-to-br from-aigentzy-medium-blue via-aigentzy-deep-violet to-aigentzy-light-violet" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Bereit, Ihr Marketing zu automatisieren?
            </motion.h2>
            <motion.p 
              className="text-xl opacity-90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Schließen Sie sich über 500 Unternehmen an, die bereits auf der Warteliste stehen. 
              Sichern Sie sich jetzt Ihren kostenlosen Early Access-Zugang.
            </motion.p>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-6 py-4 text-lg rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:bg-white focus:text-gray-900 transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="submit"
                    className="bg-white text-aigentzy-deep-violet hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    Jetzt Early Access-Einladung holen
                  </Button>
                </motion.div>
              </div>
            </motion.form>
            
            <motion.div 
              className="flex items-center justify-center space-x-8 text-sm opacity-75"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {['Kostenloser Early Access', 'Keine Kreditkarte', 'DSGVO-konform'].map((text, i) => (
                <motion.div 
                  key={text}
                  className="flex items-center space-x-2"
                  variants={benefitVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i}
                >
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

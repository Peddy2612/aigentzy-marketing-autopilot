
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
    alert('Perfekt! Du bist jetzt auf der Beta-Warteliste.');
    setEmail('');
  };

  return (
    <section 
      id="early-access-signup" 
      ref={ref}
      className="min-h-screen bg-white flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Subtle animated background */}
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-16">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-6xl lg:text-8xl font-bold leading-tight text-aigentzy-deep-violet">
                Jetzt ist dein
                <br />
                <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">
                  Marketing dran.
                </span>
              </h2>
              
              <motion.p 
                className="text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Schließe dich über 500 Unternehmen an, die bereits auf der Warteliste stehen.
              </motion.p>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Input
                      type="email"
                      placeholder="Deine E-Mail-Adresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="px-8 py-6 text-xl rounded-2xl border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-aigentzy-medium-blue transition-all duration-300 shadow-sm"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      type="submit"
                      className="bg-aigentzy-medium-blue hover:bg-blue-600 text-white px-12 py-6 text-xl rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-aigentzy-medium-blue/25 whitespace-nowrap"
                    >
                      Beta sichern
                    </Button>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <p className="text-lg text-gray-600 mb-4">
                    ⚡ <span className="font-semibold text-aigentzy-deep-violet">Nur 83 Plätze</span> in der Early Access Phase
                  </p>
                  
                  <div className="flex items-center justify-center space-x-10 text-gray-500">
                    {['Kostenloser Beta-Zugang', 'Keine Kreditkarte', 'DSGVO-konform'].map((text, i) => (
                      <motion.div 
                        key={text}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 1 + (i * 0.1) }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-aigentzy-medium-blue rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                        <span className="text-sm font-medium">{text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.form>
            
            {/* Floating decoration elements */}
            <motion.div 
              className="absolute top-20 left-10 w-24 h-24 bg-aigentzy-light-violet/20 rounded-full blur-xl"
              animate={{ 
                y: [0, -40, 0],
                x: [0, 30, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-32 h-32 bg-aigentzy-medium-blue/10 rounded-full blur-xl"
              animate={{ 
                y: [0, 50, 0],
                x: [0, -40, 0],
                scale: [1, 0.7, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

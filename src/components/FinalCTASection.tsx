
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

  return (
    <section 
      id="early-access-signup" 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-aigentzy-light-violet via-white to-aigentzy-medium-blue/20 flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(105, 77, 251, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(45, 135, 227, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(201, 202, 250, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Bereit für Ihr
                <br />
                <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">
                  Marketing-Upgrade?
                </span>
              </h2>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Schließen Sie sich über 500 Unternehmen an, die bereits auf der Warteliste stehen. 
                Sichern Sie sich jetzt Ihren kostenlosen Early Access-Zugang.
              </motion.p>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="flex flex-col sm:flex-row gap-6">
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
                      className="px-6 py-4 text-lg rounded-xl border-gray-200 bg-white/90 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-aigentzy-medium-blue transition-all duration-300 shadow-lg"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet hover:from-aigentzy-deep-violet hover:to-aigentzy-medium-blue text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-aigentzy-medium-blue/25 whitespace-nowrap"
                    >
                      Jetzt Demo sichern
                    </Button>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <p className="text-sm text-gray-600 mb-3">
                    Early Access ist begrenzt. <span className="font-semibold text-aigentzy-deep-violet">83 Plätze noch verfügbar.</span>
                  </p>
                  
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                    {['Kostenloser Early Access', 'Keine Kreditkarte', 'DSGVO-konform'].map((text, i) => (
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
                        <span>{text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.form>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-20 left-10 w-20 h-20 bg-aigentzy-light-violet/30 rounded-full blur-xl"
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-32 h-32 bg-aigentzy-deep-violet/20 rounded-full blur-xl"
              animate={{ 
                y: [0, 40, 0],
                x: [0, -25, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

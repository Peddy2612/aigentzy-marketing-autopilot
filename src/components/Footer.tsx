
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.05),
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <footer className="bg-gray-900 text-white py-12" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-sm">A</span>
              </motion.div>
              <span className="text-xl font-bold">Aigentzy</span>
            </motion.div>
            <p className="text-gray-400">
              KI-gestützte Marketing-Automatisierung für kleine und mittlere Unternehmen.
            </p>
          </motion.div>
          
          {[
            {
              title: "Produkt",
              links: ["Features", "Preise", "Integration"]
            },
            {
              title: "Unternehmen", 
              links: ["Über uns", "Karriere", "Kontakt"]
            },
            {
              title: "Rechtliches",
              links: ["Datenschutz", "Impressum", "AGB"]
            }
          ].map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 + (sectionIndex * 0.1) }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    variants={linkVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={linkIndex}
                  >
                    <motion.a 
                      href="#" 
                      className="hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>&copy; 2025 Aigentzy. Alle Rechte vorbehalten.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

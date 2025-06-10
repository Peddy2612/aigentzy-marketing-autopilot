
import { FileText, Target, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProductStagingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const features = [
    {
      icon: FileText,
      name: "Content Generator",
      subtitle: "Beiträge, bevor du sie brauchst.",
      description: "KI schreibt Posts, erstellt Visuals und plant deine Content-Pipeline.",
      color: "from-aigentzy-medium-blue to-blue-500"
    },
    {
      icon: Target,
      name: "HyperTarget Engine", 
      subtitle: "Zielgruppen, die wirklich kaufen.",
      description: "Präzise Audience-Analyse und automatische Kampagnen-Optimierung.",
      color: "from-aigentzy-deep-violet to-purple-600"
    },
    {
      icon: User,
      name: "Blueprint Architect",
      subtitle: "Dein 6-seitiger Wachstumsplan.",
      description: "Komplette Marketing-Strategie als PDF – personalisiert für dein Business.",
      color: "from-aigentzy-light-violet to-indigo-400"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-20">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-6xl lg:text-8xl font-bold text-aigentzy-deep-violet leading-tight">
              Was steckt in <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">Aigentzy?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Drei KI-Agenten arbeiten rund um die Uhr für dein Marketing
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.3 + (index * 0.2), 
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl overflow-hidden">
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative z-10 space-y-8">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-aigentzy-deep-violet">{feature.name}</h3>
                      <p className="text-xl font-semibold text-aigentzy-medium-blue">{feature.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                    
                    {/* Feature preview */}
                    <motion.div 
                      className="aspect-video bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                    >
                      <div className="text-center space-y-3">
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mx-auto flex items-center justify-center`}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <p className="text-sm text-gray-500 font-medium">Live Preview</p>
                      </div>
                    </motion.div>
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

export default ProductStagingSection;

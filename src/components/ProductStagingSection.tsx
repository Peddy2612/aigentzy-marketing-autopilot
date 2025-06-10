
import { FileText, Target, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProductStagingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, margin: "-20%" });

  const features = [
    {
      icon: FileText,
      name: "Content Generator",
      description: "Posts & Visuals in Sekunden",
      color: "from-aigentzy-medium-blue to-blue-600"
    },
    {
      icon: Target,
      name: "HyperTarget Engine", 
      description: "Präzise Zielgruppen-KI",
      color: "from-aigentzy-deep-violet to-purple-600"
    },
    {
      icon: User,
      name: "Blueprint Architect",
      description: "6-seitiger Wachstumsplan",
      color: "from-aigentzy-light-violet to-indigo-400"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-20">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Das ist <span className="bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet bg-clip-text text-transparent">drin</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Drei KI-Agenten arbeiten rund um die Uhr für Ihr Marketing
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 45 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.3 + (index * 0.2), 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -20,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: "1000px" }}
              >
                {/* 3D Card Effect */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 overflow-hidden transform-gpu">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white">{feature.name}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                    
                    {/* Feature preview */}
                    <motion.div 
                      className="aspect-video bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                    >
                      <div className="text-center space-y-2">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl mx-auto`}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <p className="text-sm text-gray-500">Live Preview</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Animated border */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${feature.color.includes('blue') ? '#2D87E3' : feature.color.includes('violet') ? '#694DFB' : '#C9CAFA'}, transparent)`
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                  />
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

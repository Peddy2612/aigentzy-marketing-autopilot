
import { FileText, User, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: FileText,
      title: "Content-Generator",
      description: "Posts + Bilder automatisch."
    },
    {
      icon: User,
      title: "Blueprint-Architect", 
      description: "6-seitiger Wachstumsplan als PDF."
    },
    {
      icon: Search,
      title: "HyperTarget Analytics",
      description: "Live-KPIs & AI-Tipps."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-16">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">
              Ihre <span className="gradient-text">KI-Agenten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alles was Sie für erfolgreiches Marketing brauchen, in einer Plattform
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  
                  {/* Screenshot placeholder with animation */}
                  <motion.div 
                    className="aspect-video bg-gray-50 border-2 border-dashed border-aigentzy-neutral-gray rounded-xl flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center space-y-2">
                      <motion.div 
                        className="w-8 h-8 bg-aigentzy-neutral-gray rounded-lg mx-auto"
                        animate={{ rotateY: [0, 180, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <p className="text-sm text-gray-500">Screenshot Preview</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyAigentzySection = () => {
  const statements = [
    {
      id: 'speed',
      headline: 'Schneller als jede Agentur.',
      description: 'Was Agenturen Wochen kostet, erledigt Aigentzy in Minuten.',
      visual: 'speed'
    },
    {
      id: 'efficiency', 
      headline: 'Kampagnen in Minuten, nicht Tagen.',
      description: 'Von der Idee zum fertigen Content – vollautomatisch.',
      visual: 'efficiency'
    },
    {
      id: 'conversion',
      headline: 'Content, der konvertiert.',
      description: 'KI analysiert Ihre Zielgruppe und optimiert jeden Post.',
      visual: 'conversion'
    }
  ];

  return (
    <div className="bg-black">
      {statements.map((statement, index) => (
        <StatementSection key={statement.id} statement={statement} index={index} />
      ))}
    </div>
  );
};

const StatementSection = ({ statement, index }: { statement: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.6, margin: "-20%" });

  const getVisualContent = (visual: string) => {
    switch (visual) {
      case 'speed':
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-red-400 text-sm">Agentur:</div>
              <div className="bg-red-400/20 rounded-full h-2 flex-1">
                <motion.div 
                  className="bg-red-400 h-full rounded-full"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 4, delay: 0.5 }}
                />
              </div>
              <div className="text-red-400 text-sm">4 Wochen</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-aigentzy-medium-blue text-sm">Aigentzy:</div>
              <div className="bg-aigentzy-medium-blue/20 rounded-full h-2 flex-1">
                <motion.div 
                  className="bg-aigentzy-medium-blue h-full rounded-full"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "15%" } : { width: "0%" }}
                  transition={{ duration: 0.6, delay: 1 }}
                />
              </div>
              <div className="text-aigentzy-medium-blue text-sm">3 Minuten</div>
            </div>
          </div>
        );
      case 'efficiency':
        return (
          <div className="grid grid-cols-3 gap-4">
            {['Briefing', 'Erstellung', 'Veröffentlichung'].map((step, i) => (
              <motion.div 
                key={step}
                className="bg-aigentzy-deep-violet/20 rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.2) }}
              >
                <div className="text-aigentzy-light-violet text-sm">{step}</div>
                <motion.div 
                  className="text-2xl font-bold text-white mt-2"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1 + (i * 0.2) }}
                >
                  ✓
                </motion.div>
              </motion.div>
            ))}
          </div>
        );
      case 'conversion':
        return (
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-6xl font-bold text-aigentzy-medium-blue">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2, delay: 1 }}
              >
                +284%
              </motion.span>
            </div>
            <div className="text-gray-400">Durchschnittliche Conversion-Steigerung</div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 sticky top-0"
      style={{ zIndex: 10 - index }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              {statement.headline}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {statement.description}
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-aigentzy-medium-blue/10 to-aigentzy-deep-violet/10 rounded-3xl blur-xl" />
              <div className="relative">
                {getVisualContent(statement.visual)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAigentzySection;

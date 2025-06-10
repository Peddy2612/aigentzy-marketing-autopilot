import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const WhyAigentzySection = () => {
  const statements = [{
    id: 'speed',
    headline: 'Schneller als jede Agentur.',
    description: 'Was andere Wochen kostet, erledigt Aigentzy in Minuten.',
    visual: 'speed'
  }, {
    id: 'efficiency',
    headline: 'Automatisch optimiert.',
    description: 'KI lernt deine Zielgruppe und verbessert sich kontinuierlich.',
    visual: 'efficiency'
  }, {
    id: 'conversion',
    headline: 'Klickstark vom ersten Tag.',
    description: 'Content, der konvertiert – ohne Experimente, ohne Wartezeiten.',
    visual: 'conversion'
  }];
  return <div className="bg-white">
      {statements.map((statement, index) => <StatementSection key={statement.id} statement={statement} index={index} />)}
    </div>;
};
const StatementSection = ({
  statement,
  index
}: {
  statement: any;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20%"
  });
  const getVisualContent = (visual: string) => {
    switch (visual) {
      case 'speed':
        return <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-lg">Traditionell:</div>
              <div className="bg-gray-200 rounded-full h-3 flex-1">
                <motion.div className="bg-gray-400 h-full rounded-full" initial={{
                width: "0%"
              }} animate={isInView ? {
                width: "100%"
              } : {
                width: "0%"
              }} transition={{
                duration: 4,
                delay: 0.5
              }} />
              </div>
              <div className="text-gray-400 text-lg">4 Wochen</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-aigentzy-medium-blue text-lg font-semibold">Aigentzy:</div>
              <div className="bg-aigentzy-light-violet/30 rounded-full h-3 flex-1">
                <motion.div className="bg-aigentzy-medium-blue h-full rounded-full" initial={{
                width: "0%"
              }} animate={isInView ? {
                width: "15%"
              } : {
                width: "0%"
              }} transition={{
                duration: 0.6,
                delay: 1
              }} />
              </div>
              <div className="text-aigentzy-medium-blue text-lg font-semibold">3 Minuten</div>
            </div>
          </div>;
      case 'efficiency':
        return <div className="grid grid-cols-3 gap-6">
            {['Analyse', 'Optimierung', 'Umsetzung'].map((step, i) => <motion.div key={step} className="bg-aigentzy-light-violet/20 rounded-2xl p-6 text-center" initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 30
          }} transition={{
            duration: 0.6,
            delay: 0.5 + i * 0.2
          }}>
                <div className="text-aigentzy-deep-violet text-sm font-medium mb-2">{step}</div>
                <motion.div className="text-3xl font-bold text-aigentzy-deep-violet" animate={isInView ? {
              scale: [1, 1.2, 1]
            } : {}} transition={{
              duration: 0.5,
              delay: 1 + i * 0.2
            }}>
                  ✓
                </motion.div>
              </motion.div>)}
          </div>;
      case 'conversion':
        return <motion.div className="text-center space-y-6" initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {
          opacity: 0
        }} transition={{
          duration: 1,
          delay: 0.5
        }}>
            <div className="text-8xl font-bold text-aigentzy-medium-blue">
              <motion.span initial={{
              opacity: 0
            }} animate={isInView ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              duration: 2,
              delay: 1
            }}>
                +234%
              </motion.span>
            </div>
            <div className="text-gray-600 text-lg">Durchschnittliche Reichweiten-Steigerung</div>
          </motion.div>;
      default:
        return null;
    }
  };
  return <section ref={ref} style={{
    zIndex: 10 - index
  }} className="min-h-screen flex items-center justify-center sticky top-0 bg-aigentzy-light-violet/10 py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div className="space-y-8" initial={{
          opacity: 0,
          x: -100
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -100
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }}>
            <h2 className="text-6xl lg:text-8xl font-bold text-aigentzy-deep-violet leading-tight py-0">
              {statement.headline}
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed">
              {statement.description}
            </p>
          </motion.div>
          
          <motion.div className="relative" initial={{
          opacity: 0,
          x: 100,
          scale: 0.8
        }} animate={isInView ? {
          opacity: 1,
          x: 0,
          scale: 1
        } : {
          opacity: 0,
          x: 100,
          scale: 0.8
        }} transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeOut"
        }}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-aigentzy-medium-blue/10 to-aigentzy-deep-violet/10 rounded-3xl blur-xl" />
              <div className="relative">
                {getVisualContent(statement.visual)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default WhyAigentzySection;
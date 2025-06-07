
import { Lock, Clock, Brain } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Lock,
      title: "Keine Agentur-Fesseln",
      description: "Volle Kontrolle, null versteckte Kosten."
    },
    {
      icon: Clock,
      title: "10 h/Woche gespart",
      description: "Automatisierte Content-Pipelines statt Handarbeit."
    },
    {
      icon: Brain,
      title: "KI lernt Ihre Branche",
      description: "Agenten passen Inhalte laufend an Ihre Zielgruppe an."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Warum <span className="gradient-text">AIgentzy?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mehr Zeit für Ihr Geschäft, weniger Zeit für Marketing-Aufgaben
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center space-y-4 transition-all-smooth hover:shadow-lg hover:scale-105"
              >
                <div className="w-16 h-16 bg-aigentzy-deep-violet rounded-2xl flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

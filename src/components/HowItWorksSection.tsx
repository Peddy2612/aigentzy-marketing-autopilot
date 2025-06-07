
import { FileText, User, Check } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      step: "1",
      title: "Kurzfragebogen ausfüllen (3 Min.)",
      description: "Teilen Sie uns Ihre Zielgruppe, Branche und Marketing-Ziele mit"
    },
    {
      icon: User,
      step: "2", 
      title: "KI-Agenten bauen Kampagne & Visuals",
      description: "Unsere KI erstellt maßgeschneiderte Inhalte und ansprechende Grafiken"
    },
    {
      icon: Check,
      step: "3",
      title: "Ein Klick – alles live auf Ihren Kanälen",
      description: "Automatische Veröffentlichung zur optimalen Zeit auf allen Plattformen"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-aigentzy-light-violet/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              So <span className="gradient-text">funktioniert's</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In nur 3 einfachen Schritten zu professionellem Marketing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 text-center space-y-6 shadow-lg transition-all-smooth hover:shadow-xl">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-aigentzy-deep-violet text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-aigentzy-medium-blue to-aigentzy-deep-violet"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

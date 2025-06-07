
import { Clipboard, FileText, Bot, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Clipboard,
      step: "1",
      title: "Formular ausfüllen (3 Min.)",
      description: "Teilen Sie uns Ihre Zielgruppe, Branche und Marketing-Ziele mit"
    },
    {
      icon: FileText,
      step: "2", 
      title: "Blueprint-PDF in 10 Min.",
      description: "Erhalten Sie Ihren individuellen 6-seitigen Wachstumsplan"
    },
    {
      icon: Bot,
      step: "3",
      title: "KI generiert Posts & Visuals",
      description: "Unsere KI erstellt maßgeschneiderte Inhalte und ansprechende Grafiken"
    },
    {
      icon: Rocket,
      step: "4",
      title: "Autopilot veröffentlicht + optimiert",
      description: "Automatische Veröffentlichung zur optimalen Zeit mit kontinuierlicher Optimierung"
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
              In nur 4 einfachen Schritten zu professionellem Marketing-Autopilot
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center space-y-4 shadow-lg transition-all-smooth hover:shadow-xl">
                  <div className="relative">
                    <div className="w-16 h-16 bg-aigentzy-medium-blue rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-aigentzy-medium-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 transform w-8 h-0.5 bg-gray-300"></div>
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

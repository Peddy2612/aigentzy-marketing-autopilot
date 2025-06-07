
import { FileText, User, Search } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Content-Generator",
      description: "KI erstellt automatisch Posts, Artikel und Stories basierend auf Ihren Unternehmensdaten",
      highlights: ["Blog-Artikel", "Social Media Posts", "Newsletter-Inhalte"]
    },
    {
      icon: User,
      title: "Blueprint-Builder", 
      description: "Individuelle Marketing-Strategien entwickelt speziell für Ihre Branche und Zielgruppe",
      highlights: ["Zielgruppen-Analyse", "Content-Kalender", "Kanal-Optimierung"]
    },
    {
      icon: Search,
      title: "Kampagnen-Analyse (HyperTarget)",
      description: "Datengetriebene Insights und Optimierungen für maximale Reichweite und Conversion",
      highlights: ["Performance-Tracking", "A/B-Testing", "ROI-Optimierung"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Kraftvolle <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alles was Sie für erfolgreiches Marketing brauchen, in einer Plattform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 transition-all-smooth hover:shadow-xl hover:scale-105"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all-smooth">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  
                  {/* Screenshot placeholder */}
                  <div className="aspect-video bg-gray-50 border-2 border-dashed border-aigentzy-neutral-gray rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 bg-aigentzy-neutral-gray rounded-lg mx-auto"></div>
                      <p className="text-sm text-gray-500">Screenshot Preview</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-aigentzy-deep-violet rounded-full"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

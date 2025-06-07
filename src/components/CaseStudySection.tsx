
import { Star } from 'lucide-react';

const CaseStudySection = () => {
  return (
    <section className="py-20 bg-aigentzy-light-violet">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Fallstudie: <span className="gradient-text">Metallbau Meyer</span>
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Nach nur 4 Wochen konnte Metallbau Meyer durch automatisierte KI-Kampagnen 
                <strong className="text-aigentzy-deep-violet"> +28% mehr Website-Anfragen</strong> generieren. 
                Die Zeitersparnis von 8 Stunden pro Woche ermöglichte es dem Team, sich vollständig 
                auf Kundenprojekte zu konzentrieren, während die KI kontinuierlich hochwertigen 
                Content für LinkedIn und Facebook erstellte.
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-aigentzy-neutral-gray rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-aigentzy-deep-violet">MM</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Marcus Meyer</p>
                  <p className="text-gray-600 text-sm">Geschäftsführer</p>
                  <div className="flex space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-aigentzy-deep-violet text-aigentzy-deep-violet" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;


import { Star } from 'lucide-react';

const CaseStudySection = () => {
  return (
    <section className="py-20 bg-aigentzy-light-violet">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Metallbau Meyer: +28% Anfragen in 4 Wochen</span>
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Das 12-köpfige Familienunternehmen steigerte seine Online-Leads um 28%. 
                AIgentzy übernahm täglich LinkedIn-Posts & Newsletter vollautomatisch. 
                <strong className="text-aigentzy-deep-violet"> »Ich spare 10 Stunden pro Woche und bekomme mehr qualifizierte Anfragen denn je«</strong>, 
                sagt Geschäftsführerin Laura Meyer.
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-aigentzy-neutral-gray rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-aigentzy-deep-violet">LM</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Laura Meyer</p>
                  <p className="text-gray-600 text-sm">Geschäftsführerin</p>
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

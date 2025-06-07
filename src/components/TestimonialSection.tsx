
const TestimonialSection = () => {
  return (
    <section className="py-20 bg-aigentzy-light-violet/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="space-y-8">
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-6 h-6 text-aigentzy-deep-violet">
                    ★
                  </div>
                ))}
              </div>
              
              <blockquote className="text-2xl font-medium text-gray-800 leading-relaxed">
                "Seit wir Aigentzy nutzen, haben wir 80% mehr Leads generiert und 
                sparen dabei jede Woche 12 Stunden. Unser Social Media läuft jetzt 
                wie eine gut geölte Maschine – völlig automatisch."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-aigentzy-neutral-gray rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-aigentzy-medium-blue to-aigentzy-deep-violet rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MH</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Markus Hofmann</div>
                  <div className="text-gray-600">Geschäftsführer, TechStart GmbH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

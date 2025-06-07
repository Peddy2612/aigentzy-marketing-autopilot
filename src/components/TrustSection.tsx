
const TrustSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <p className="text-gray-600 font-medium">
            Von ersten Pilot-Kunden in Deutschland, Österreich und der Schweiz getestet
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="bg-aigentzy-neutral-gray rounded-lg h-16 flex items-center justify-center transition-all-smooth hover:shadow-md"
              >
                <div className="text-gray-400 font-semibold">Logo {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

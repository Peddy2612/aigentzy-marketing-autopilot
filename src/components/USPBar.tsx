
const USPBar = () => {
  const uspItems = [
    "✅ End-to-End KI-Agenten",
    "✅ Ab 99 €/Monat – monatlich kündbar", 
    "✅ DSGVO-konform & EU-Hosting"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {uspItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white px-6 py-3 rounded-full text-gray-800 font-medium border border-gray-200 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPBar;

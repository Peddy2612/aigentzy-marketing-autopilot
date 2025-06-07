
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Ist Aigentzy DSGVO-konform?",
      answer: "Ja, absolut. Alle Daten werden auf deutschen Servern gespeichert und verarbeitet. Wir halten uns strikt an die DSGVO-Richtlinien und geben keine Daten an Dritte weiter."
    },
    {
      question: "Was kostet Aigentzy nach der Beta-Phase?",
      answer: "Unsere Preise starten bei 49€/Monat für kleine Unternehmen. Während der Beta-Phase erhalten Sie 3 Monate kostenlos und anschließend 50% Rabatt für die ersten 6 Monate."
    },
    {
      question: "Welche Social Media Kanäle werden unterstützt?",
      answer: "Aktuell unterstützen wir Facebook, Instagram, LinkedIn, Twitter und Google My Business. Weitere Plattformen wie TikTok und YouTube sind in Planung."
    },
    {
      question: "Wie schnell erhalte ich Support?",
      answer: "Unser deutschsprachiger Support antwortet innerhalb von 2 Stunden während der Geschäftszeiten (Mo-Fr 9-18 Uhr). Beta-Nutzer erhalten bevorzugten Support."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">
              Häufige <span className="gradient-text">Fragen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles was Sie über Aigentzy wissen müssen
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

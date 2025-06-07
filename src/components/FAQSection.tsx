
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Wo liegen Ihre Server?",
      answer: "In deutschen & EU-Rechenzentren (ISO-27001), vollständig DSGVO-konform."
    },
    {
      question: "Was kostet AIgentzy nach der Beta?",
      answer: "Launch-Preis ab 99 €/Monat, alles inklusive."
    },
    {
      question: "Welche Netzwerke werden unterstützt?",
      answer: "LinkedIn, X, Instagram, Facebook; TikTok & Shopify folgen."
    },
    {
      question: "Kann ich jederzeit kündigen?",
      answer: "Ja, monatliche Laufzeit, 1-Klick-Kündigung im Dashboard."
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
              Alles was Sie über AIgentzy wissen müssen
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

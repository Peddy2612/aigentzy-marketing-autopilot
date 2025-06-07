
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const FinalCTASection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise das Typeform-Popup geöffnet oder zur Warteliste hinzugefügt
    console.log('Email submitted:', email);
    alert('Vielen Dank! Sie wurden zur Beta-Warteliste hinzugefügt.');
    setEmail('');
  };

  return (
    <section id="beta-signup" className="py-20 bg-gradient-to-br from-aigentzy-medium-blue via-aigentzy-deep-violet to-aigentzy-light-violet">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Bereit, Ihr Marketing zu automatisieren?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Schließen Sie sich über 500 Unternehmen an, die bereits auf der Warteliste stehen. 
              Sichern Sie sich jetzt Ihren kostenlosen Beta-Zugang.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 text-lg rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:bg-white focus:text-gray-900"
                />
                <Button 
                  type="submit"
                  className="bg-white text-aigentzy-deep-violet hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold transition-all-smooth shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Jetzt Beta-Einladung holen
                </Button>
              </div>
            </form>
            
            <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Kostenlose Beta</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Keine Kreditkarte</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>DSGVO-konform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

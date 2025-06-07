
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Gift } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 768) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle email submission here
      console.log('Email submitted:', email);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-center">
            <Gift className="w-6 h-6 text-aigentzy-deep-violet" />
            <span>7 kostenlose KI-Post-Ideen</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-center text-gray-600">
            PDF sichern und Warteliste beitreten
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button 
              type="submit"
              className="w-full bg-aigentzy-deep-violet hover:bg-aigentzy-deep-violet/90 text-white"
            >
              PDF herunterladen & Beta beitreten
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 text-center">
            Kostenlos, keine Verpflichtung, jederzeit abmeldbar
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;

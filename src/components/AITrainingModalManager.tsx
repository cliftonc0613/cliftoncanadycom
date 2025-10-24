import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AITrainingModalManager() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Separate effect for one-time 5-second timer
  useEffect(() => {
    // Auto-open modal after 5 seconds (ONLY runs once on mount)
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array = runs only once on mount

  // Separate effect for exit intent that depends on 'open' state
  useEffect(() => {
    // Exit intent detection - triggers EVERY time user tries to leave (if modal not already open)
    const handleMouseOut = (e: MouseEvent) => {
      // Detect when cursor moves to top of page (like closing tab or changing URL)
      const mouseY = e.clientY;

      if (
        !open && // Only trigger if modal is NOT currently open
        mouseY <= 5 && // Very close to top of viewport
        !e.relatedTarget // Cursor left document
      ) {
        setOpen(true);
      }
    };

    // Use mouseout on document to detect leaving viewport
    document.documentElement.addEventListener('mouseout', handleMouseOut);

    // Global event listener for button clicks
    const handleOpenModal = () => {
      setOpen(true);
    };

    window.addEventListener('openAITrainingModal', handleOpenModal);

    return () => {
      document.documentElement.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('openAITrainingModal', handleOpenModal);
    };
  }, [open]); // Re-run effect when 'open' state changes (but timer not affected)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email
    };

    try {
      await fetch('https://services.leadconnectorhq.com/hooks/O3A0THtKcMOzi34vEwru/webhook-trigger/ea87379e-7aea-4ff8-9f70-5e1a0c5631df', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
    } catch (error) {
      console.error('Webhook error:', error);
    }

    window.location.href = '/ai-training-course-thank-you';
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full md:w-3/4 lg:w-1/2 max-w-none bg-gradient-to-br from-primary to-primary text-primary-foreground border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-white">
            Express Your Interest in AI Training
          </DialogTitle>
          <DialogDescription className="text-center text-white/90">
            Join our pilot course and get AI-certified in 6 weeks
          </DialogDescription>
        </DialogHeader>

        <div className="text-center mb-6">
          <p className="text-2xl font-bold text-accent mb-2">$750</p>
          <p className="text-sm opacity-90 text-white">Early-Bird Pilot Pricing</p>
          <p className="text-xs opacity-70 text-white">Limited to first 15 participants</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="your@email.com"
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-6 text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Express Interest
          </Button>
        </form>

        <div className="space-y-2 text-sm opacity-90 text-center mt-6 text-white">
          <p>Early-bird $750 pricing ends after first course fills</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

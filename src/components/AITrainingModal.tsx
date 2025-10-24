import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AITrainingModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
      <DialogTrigger asChild>
        <Button className="orange-btn inline-flex items-center justify-center text-lg px-8 py-4 font-semibold rounded-md shadow-lg transform hover:scale-105 transition-all duration-200">
          Claim Your Pilot Spot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-white">
            Express Your Interest in AI Training
          </DialogTitle>
          <DialogDescription className="text-center text-white/90">
            Join our pilot course and get AI-certified in 6 weeks
          </DialogDescription>
        </DialogHeader>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6">
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
            <p>Limited to 15 participants per course</p>
            <p>Early-bird $750 pricing ends after first course fills</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

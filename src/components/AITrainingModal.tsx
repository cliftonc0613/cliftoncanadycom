import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { gsap } from "gsap"

export function AITrainingModal() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("ai-training-modal-seen")

    if (!hasSeenModal) {
      // Open modal after 7 seconds
      const timer = setTimeout(() => {
        setOpen(true)
      }, 7000)

      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Listen for custom event to open modal from buttons
    const handleOpenModal = () => {
      setOpen(true)
    }

    window.addEventListener('openAITrainingModal', handleOpenModal)

    return () => {
      window.removeEventListener('openAITrainingModal', handleOpenModal)
    }
  }, [])

  // Exit intent detection - show modal when user tries to leave
  useEffect(() => {
    let exitIntentTriggered = false

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the viewport
      if (e.clientY <= 0 && !exitIntentTriggered && !open) {
        exitIntentTriggered = true
        setOpen(true)
      }
    }

    // Add event listener for mouse leaving viewport
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [open])

  // GSAP animation when modal opens
  useEffect(() => {
    if (open && modalRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        if (modalRef.current) {
          // Animate from top with GSAP using pixels for smoother animation
          gsap.fromTo(
            modalRef.current,
            {
              y: "-100vh",
              opacity: 0,
              scale: 0.95
            },
            {
              y: "-50%",
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              force3D: true
            }
          )
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate fields
    if (!formData.name || !formData.email) {
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return
    }

    setIsSubmitting(true)

    try {
      // Send to webhook
      const response = await fetch('https://services.leadconnectorhq.com/hooks/O3A0THtKcMOzi34vEwru/webhook-trigger/ea87379e-7aea-4ff8-9f70-5e1a0c5631df', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          source: "AI Training Course Landing Page - Modal"
        })
      })

      // Mark modal as seen in localStorage
      localStorage.setItem("ai-training-modal-seen", "true")

      // Redirect to thank you page regardless of webhook response
      window.location.href = '/ai-training-thank-you'
    } catch (error) {
      console.error('Form submission error:', error)

      // Mark modal as seen in localStorage
      localStorage.setItem("ai-training-modal-seen", "true")

      // Still redirect even if webhook fails
      window.location.href = '/ai-training-thank-you'
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent ref={modalRef} className="sm:max-w-[600px] border-0 p-0 overflow-hidden">
        <div
          style={{
            background: "linear-gradient(135deg, #46597e 0%, #5a6f93 100%)"
          }}
          className="p-8"
        >
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-white text-center">
              Don't Miss Out!
            </DialogTitle>
            <DialogDescription className="text-white/90 text-center text-base">
              Get early access to our AI Training Program. Limited spots available.
            </DialogDescription>
          </DialogHeader>

          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your@email.com"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                style={{
                  backgroundColor: "#f66733",
                  color: "white"
                }}
              >
                {isSubmitting ? "Submitting..." : "Claim Your Spot"}
              </Button>
            </form>
          ) : (
            <div className="mt-6 text-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p className="text-white text-xl font-semibold">Thank you!</p>
              <p className="text-white/80 mt-2">We'll be in touch soon.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

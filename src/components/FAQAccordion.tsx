import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Do we need AI experience to attend?</AccordionTrigger>
        <AccordionContent>
          No! This method is designed for tech company leaders who want to leverage AI for strategic thinking, regardless of current AI knowledge.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2">
        <AccordionTrigger>Is this just for Upstate SC companies?</AccordionTrigger>
        <AccordionContent>
          Yes! These exclusive in-person sessions are designed specifically for Upstate SC (Greenville-Spartanburg-Anderson) tech company leaders. The intimate, face-to-face format requires us to focus on one region to build genuine strategic relationships among local peers.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-3">
        <AccordionTrigger>How much time does this require?</AccordionTrigger>
        <AccordionContent>
          The AI Boardroom method is designed for busy executives. The AI Boardroom Fundamentals will last 90 minutes.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-4">
        <AccordionTrigger>What's different about this versus other business consulting?</AccordionTrigger>
        <AccordionContent>
          I've worked inside multiple Upstate tech companies and seen these exact challenges firsthand. This isn't theoretical - it's based on real patterns I've observed across multiple organizations.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-5">
        <AccordionTrigger>Can multiple people from our company attend?</AccordionTrigger>
        <AccordionContent>
          Yes! Leadership teams often benefit from attending together. Contact us about team rates for 2+ attendees from the same company.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
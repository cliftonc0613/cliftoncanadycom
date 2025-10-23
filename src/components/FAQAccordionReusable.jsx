import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordionReusable({ faqs }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs && faqs.map((faq, index) => (
        <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

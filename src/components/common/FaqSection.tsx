import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/constants/staticStats";

function FaqSection() {
  return (
    <section className="w-full px-6 pb-12 lg:px-16" id="faq">
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
        <h2 className="bg-[image:var(--gradient-2)] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          Still Got Doubts
        </h2>
        <h2 className="text-center text-3xl font-bold text-black lg:text-left lg:text-6xl">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-10 w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger className="py-5 text-xl font-[400] text-[var(--dark-blue)] no-underline hover:no-underline lg:text-3xl">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="h-full text-lg font-light text-[var(--dark-blue)]/80">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FaqSection;

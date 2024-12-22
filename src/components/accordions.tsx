import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ModernAccordionItem from "./ui/modernAccordionItem";

const fadeIn = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

interface AccordionItemData {
  title: string;
  content: string;
}

interface AccordionProps {
  type?: "single" | "multiple";
  items: AccordionItemData[]; 
  cardStyle?: boolean;
  modernStyle?: boolean;
}

const AccordionComponent: React.FC<AccordionProps> = ({
  type = "single",
  items = [], 
  cardStyle = false,
  modernStyle = true,
}) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Default Accordion */}
      <div>
        <h3 className="mb-4 font-medium text-sm">Default Accordion</h3>
        <Accordion type={type} collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Card Style Accordion */}
      <div>
        <h3 className="mb-4 font-medium text-sm">Card Style Accordion</h3>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-zinc-200 dark:border-zinc-800 border rounded-lg"
            >
              <AccordionTrigger className="px-4">{item.title}</AccordionTrigger>
              <AccordionContent className="px-4">{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Modern Style Accordion */}
      <div>
        <h3 className="mb-4 font-medium text-sm">Modern Style Accordion</h3>
        <div className="space-y-2">
          {items.map((item, index) => (
            <ModernAccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;

import React from 'react';
import { AccordionPanel, AccordionTitle, AccordionContent, Accordion } from "flowbite-react";

// Generic AccordionPanel Component
const ReusableModule = ({ title, content }) => {
  return (

    <Accordion collapseAll>
    <AccordionPanel>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionContent>
        {content}
      </AccordionContent>
    </AccordionPanel>
    </Accordion>
  );
};

export default ReusableModule;

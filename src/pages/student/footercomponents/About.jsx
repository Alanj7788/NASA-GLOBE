import React from 'react';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

// The Accordion Component
const About = () => {
  return (
    <Accordion collapseAll>
      
      <AccordionPanel>
        <AccordionTitle>What is Our Platform?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Our platform is a dedicated resource for students who want to learn coding, focusing on university syllabus labs. 
            We currently cover labs for C, OOPS (Java), Data Structures, DBMS, OS, MASM, Compiler, and System Software.
            Whether you're looking for examples, explanations, or troubleshooting tips, our platform provides comprehensive support to enhance your learning experience.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>Our Mission</AccordionTitle>
        <AccordionContent>
          <p className="text-gray-500 dark:text-gray-400">
            Our mission is to create an accessible, high-quality educational resource that supports students in mastering coding and lab work. 
            We aim to bridge the gap between theoretical knowledge and practical application by offering well-crafted, syllabus-aligned lab codes and resources.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>Meet the Team</AccordionTitle>
        <AccordionContent>
          <p className="text-gray-500 dark:text-gray-400">
            Our platform is made possible by a dedicated team of individuals:
          </p>
          <ul className="list-disc ml-5 text-gray-500 dark:text-gray-400">
            <li>Alan Jose - WebApp Developer and Code Contributor</li>
            <li>Adithya E - Code Contributor</li>
            <li>Alwin Mathew - Code Contributor</li>
            <li>Annrose Watson - Content Insertion</li>
            <li>Evin Babu - Logo Designer</li>
          </ul>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>How Can You Contribute?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            If you encounter any issues or bugs in the lab codes, we encourage you to contribute to improving our resources.
            Your feedback is invaluable in ensuring the accuracy and quality of the content we provide.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Please reach out to us via email at labguide100@gmail.com to inform us of any problems or suggestions for improvement. 
            We also welcome code contributions from anyone who wishes to share their work. 
            However, please note that any code provided will become part of our platform, and contributors will not retain ownership of the submitted codes.
            Together, we can create a better learning environment for everyone.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>Future Plans</AccordionTitle>
        <AccordionContent>
          <p className="text-gray-500 dark:text-gray-400">
            We are continuously working to expand our platform. Our future plans include adding more lab subjects, enhancing our user interface, and providing more interactive learning tools.
            Stay tuned for updates, and feel free to share any suggestions for features you'd like to see.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>Contact Us</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            If you have any questions or need further assistance, don't hesitate to contact us. 
            We're here to help you with your lab code needs.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            You can email us directly at labguide100@gmail.com to inform us of any issues or suggestions. 
            We're committed to providing the best possible support for your lab work.
          </p>
        </AccordionContent>
      </AccordionPanel>

    </Accordion>
  );
};

export default About;

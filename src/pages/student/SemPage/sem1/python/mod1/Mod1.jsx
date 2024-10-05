import React from 'react';
import { Accordion } from "flowbite-react";
import ReusableModule from '../../../ReusableModule';

// Main Component
const Mod1 = () => {
  // Data for each panel about Python
  const panels = [
    {
      title: "Introduction",
      content: (
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Python is a high-level, easy-to-read programming language used for web development, data analysis, AI, and more.
        </p>
      )
    },
    {
      title: "Basics",
      content: (
        <p className="text-gray-500 dark:text-gray-400">
          Learn about Python syntax, variables, data types, and control flow like loops and conditionals.
        </p>
      )
    },
    {
      title: "Functions",
      content: (
        <p className="text-gray-500 dark:text-gray-400">
          Functions are defined using `def` and are used to create reusable blocks of code.
        </p>
      )
    },
    {
      title: "OOP",
      content: (
        <p className="text-gray-500 dark:text-gray-400">
          Python supports object-oriented programming with classes and objects to model real-world scenarios.
        </p>
      )
    },
    {
      title: "Resources",
      content: (
        <p className="text-gray-500 dark:text-gray-400">
          Explore Python tutorials, documentation, and online courses to deepen your knowledge.
        </p>
      )
    }
  ];

  return (
    <Accordion>
      {panels.map((panel, index) => (
        <ReusableModule key={index} title={panel.title} content={panel.content} />
      ))}
    </Accordion>
  );
};

export default Mod1;

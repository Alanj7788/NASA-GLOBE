// components/ProgramAccordion.js
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from "flowbite-react";

const ProgramTable = ({ programs }) => {
  const [codeContents, setCodeContents] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const contents = await Promise.all(programs.map(async (program) => {
          const response = await fetch(program.file);
          const text = await response.text();
          return { id: program.id, text };
        }));

        const initialContents = contents.reduce((acc, { id, text }) => {
          acc[id] = text;
          return acc;
        }, {});
        setCodeContents(initialContents);
      } catch (err) {
        console.error('Error fetching code:', err);
      }
    };
    fetchCode();
  }, [programs]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter programs based on the search query
  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search programs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <Accordion collapseAll>
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program) => (
            <AccordionPanel key={program.id}>
              <AccordionTitle><div className='flex justify-between items-center'>{program.title}</div></AccordionTitle>
              
              <AccordionContent>
                <pre className="mt-2 p-2 border rounded bg-gray-100 dark:bg-gray-900 overflow-x-auto text-sm sm:text-base">
                  {codeContents[program.id]}
                </pre>
              </AccordionContent>
            </AccordionPanel>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No programs found
          </p>
        )}
      </Accordion>
    </div>
  );
};

export default ProgramTable;

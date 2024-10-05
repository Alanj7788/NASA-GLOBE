import React from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Semcards = () => {
  const semesters = [
    { id: 1, description: 'Mars Exploration' },
    { id: 2, description: 'Alien Life Detection' },
    { id: 3, description: 'Cosmic Climate Impact' },
    { id: 4, description: 'Terraforming Planets' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 grid-auto-rows-[1fr]">
  {semesters.map((semester) => (
    <Link key={semester.id} to={`/btech/sem${semester.id}`}>
      <Card
  style={{
    border: '2px solid rgba(159, 122, 234, 0.2)', // Even more transparent border color
    boxShadow: '0 2px 4px rgba(159, 122, 234, 0.1)', // Softer shadow
  }}
  className="mx-auto max-w-sm p-4 rounded-lg shadow-md h-full"
>

        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {semester.description}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          
        </p>
      </Card>
    </Link>
  ))}
</div>

  );
};

export default Semcards;

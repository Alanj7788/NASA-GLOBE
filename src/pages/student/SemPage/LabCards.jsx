// components/LabCardGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "flowbite-react";

const LabCards = ({ labs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {labs.map((lab, index) => (
        <Link key={index} to={lab.route}>
          <Card
  style={{
    border: '2px solid rgba(159, 122, 234, 0.2)', // Even more transparent border color
    boxShadow: '0 2px 4px rgba(159, 122, 234, 0.1)', // Softer shadow
  }}
  className="mx-auto max-w-sm p-4 rounded-lg shadow-md h-full"
>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {lab.title}
            </h5>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default LabCards;

import React from 'react';
import LabCards from '../LabCards';

const Sem6 = () => {
  const labs = [
    { title: 'Network Lab', route: '/btech/sem6/networklab'},
    // Add more labs as needed
  ];

  return (
    <div>
      <LabCards labs={labs} />      
    </div>
  );
};

export default Sem6;

import React from 'react';
import LabCards from '../LabCards';

const Sem2 = () => {
  const labs = [
    { title: 'C Lab', route: '/btech/sem2/'},
    { title: 'Introduction to C', route: '/btech/sem2/introc'},
    // Add more labs as needed
  ];

  return (
    <div>
      <LabCards labs={labs} />      
    </div>
  );
};

export default Sem2;

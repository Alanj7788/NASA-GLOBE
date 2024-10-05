import React from 'react';
import LabCards from '../LabCards';

const Sem4 = () => {
  const labs = [
    { title: 'Operating System Lab', route: '/btech/sem4/oslab'},
    { title: 'Shell Script Lab', route: '/btech/sem4/shelllab'},

    // Add more labs as needed
  ];

  return (
    <div>
      <LabCards labs={labs} />      
    </div>
  );
};

export default Sem4;

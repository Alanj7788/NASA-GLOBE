import React from 'react';
import LabCards from '../LabCards';

const Sem3 = () => {
  const labs = [
    { title: 'Microprocessor and MicroController Lab', route: '/btech/sem5/masmlab'},
    //{ title: 'Introduction to Microprocessor and MicroController Lab', route: '/btech/sem5/intromasmlab'},
    { title: 'System Software Lab', route: '/btech/sem5/sslab'},
    { title: 'DBMS Lab', route: '/btech/sem5/introdbms'},
    // Add more labs as needed
  ];

  return (
    <div>
      <LabCards labs={labs} />      
    </div>
  );
};

export default Sem3;

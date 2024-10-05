import React from 'react';
import LabCards from '../LabCards';

const Sem7 = () => {
  const labs = [
    { title: 'Compiler Lab', route: '/btech/sem7/compilerlab'},
    { title: 'Compiler Lab Algorithm', route: '/btech/sem7/compileralgorithm'},
    // Add more labs as needed
  ];

  return (
    <div>
      <LabCards labs={labs} />      
    </div>
  );
};

export default Sem7;

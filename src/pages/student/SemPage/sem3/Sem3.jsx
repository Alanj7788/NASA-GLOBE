import React from 'react';
import LabCards from '../LabCards';

const Sem3 = () => {
  const labs = [
    { title: 'Java Lab', route: '/btech/sem3/javalab'},
    { title: 'Data Structures Lab', route: '/btech/sem3/dslab'},
    { title: 'Data Structures Lab Algorithms', route: '/btech/sem3/dsalgorithm'},
    // Add more labs as needed
  ];

  return (
    <div>
      <LabCards labs={labs} />      
    </div>
  );
};

export default Sem3;

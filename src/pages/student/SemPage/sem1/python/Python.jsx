import React from 'react';
import LabCards from '../../LabCards';

const Python = () => {
  const labs = [
    { title: 'Module-1', route: '/btech/sem1/python/mod1'},
    { title: 'Module-2', route: '/btech/sem1/python/mod2'},
    { title: 'Module-3', route: '/btech/sem1/python/mod3'},
    { title: 'Module-4', route: '/btech/sem1/python/mod4'},
    { title: 'Module-5', route: '/btech/sem1/python/mod5'},
    
    // Add more labs as needed
  ];

  return (
    <div>
      <LabCards labs={labs} />      
    </div>
  );
};

export default Python;

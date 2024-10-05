import React from 'react';
import LabCards from '../LabCards';

const Sem1 = () => {
  const labs = [
    { title: 'Python', route: '/btech/sem1/python'},
    { title: 'Python Lab (Syllabus lab ques)', route: '/btech/sem1/pythonlab'},
    { title: 'Python Lab Algorithms (Syllabus lab ques)', route: '/btech/sem1/pythonlabalgorithm'},
    // Add more labs as needed
  ];

  return (
    <div>
      <LabCards labs={labs} />      
    </div>
  );
};

export default Sem1;

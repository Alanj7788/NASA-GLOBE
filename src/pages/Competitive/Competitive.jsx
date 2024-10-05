import React from 'react';
import pdf1 from './Pythonfile.pdf';

const Competitive = () => {
  return (
    <div>
      <h1>Competitive Programming using Python</h1>
      <iframe
        src={pdf1} // Adjust the path according to your folder structure
        title="Competitive Programming PDF"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Competitive;

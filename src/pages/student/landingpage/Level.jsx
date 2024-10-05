import React from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from './assets/python-01.png'
import img2 from './assets/hss-01.png'
import img3 from './assets/btech-01.png'


const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const Level = () => {
  const levels = [
    
    {      id: 3,url:'btech',image:img3, description: 'GLOBE Protocol Quiz' },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 p-2">
      {levels.map((level) => (
        <Link key={level.id} to={`/${level.url}`}>
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card
            
            style={{
              border: '2px solid rgba(159, 122, 234, 0.2)', // Even more transparent border color
              boxShadow: '0 2px 4px rgba(159, 122, 234, 0.1)', // Softer shadow
            }}
            
              className="mx-auto max-w-xs p-2 border rounded-lg shadow-md"
              imgAlt=""
              imgSrc={level.image}
            >
              <h1  className="font-bold text-3xl">
                {level.description}
              </h1>
              
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Level;
{/* { id: 1,url:'competitive-python',image:img1, description: 'Python' },
    { id: 2,url:'hss',image:img2, description: 'Higher Secondary' }, */}
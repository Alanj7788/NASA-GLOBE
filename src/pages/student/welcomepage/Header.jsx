import React from 'react';
import { Carousel } from 'flowbite-react';
import Bannertop from './Bannertop';
import ad1 from '../../carousal-ads/ad1.svg';

const Header = () => {
  return (
    <div>
      <Bannertop />
      <div className="flex justify-center mt-4">
        <iframe 
          width="672" 
          height="378" 
          src="https://www.youtube.com/embed/6pyUUVhC4-o" 
          title="Challenge: GLOBE Protocol Games | NASA Space Apps Challenge" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Header;

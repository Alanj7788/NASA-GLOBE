import { useState, useEffect } from "react";
//import headerImg from "./assets/header-img.svg";
import TrackVisibility from 'react-on-screen';
import './Header.css';

export const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Welcome to GLOBE"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner bg-cover bg-center py-5">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-opacity-50 text-black px-4 py-2 font-bold text-lg mb-4 border border-white border-opacity-50">
                    GenTech
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold leading-none mb-4">
                    <span className="txt-rotate" dataPeriod="0">
                      <span className="wrap border-r-2 border-gray-600">{text}</span>
                    </span>
                  </h1>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                    Global Learning And Observation to Benefit the Environment
                  </p>
                </div>
              )}
            </TrackVisibility>
          </div>
         {/* <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
            
                  <img src={headerImg} alt="Header Img" className="mx-auto md:mx-0 animate-updown" />
                
            
          </div>  */}
        </div>
      </div>
    </section>
  );
};

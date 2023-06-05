import React from "react"
import data from "../data.json"
import { useState, useEffect  } from 'react'


function Rockets() {

const [selectedRocket, setselectedRocket] = useState(0);
const [imageSrc, setImageSrc] = useState('');

  const handleButtonClick = (index) => {
    setselectedRocket(index);
  };

  useEffect(() => {
    const handleResize = () => {
      const isPortrait = window.innerWidth >= 769;

      if (isPortrait) {
        setImageSrc(data.technology[selectedRocket].images.portrait);
      } else {
        setImageSrc(data.technology[selectedRocket].images.landscape);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedRocket, data]);

  const SelectedComponent = ({ id, name, description }) => (
    <div className="TechContainer">
          <div className="Tech-img">
            <img alt='' src={imageSrc}/>
          </div>
          <div className="TechDetails">
              
                <h2>the terminology...</h2>
                <h3>{name}</h3>
                <p>{description}</p>
                </div>
    </div>
  );

  return (
    <div className="Tech-nav">
      <SelectedComponent {...data.technology[selectedRocket]} />
      <div className="TechButtons">
      <button 
      className={selectedRocket === 0 ? 'TechButtonClicked' : 'TechButtonNotClicked'}
      onClick={() => handleButtonClick(0)}>1</button>
      <button 
      className={selectedRocket === 1 ? 'TechButtonClicked' : 'TechButtonNotClicked'}
      onClick={() => handleButtonClick(1)}>2</button>
      <button
      className={selectedRocket === 2 ? 'TechButtonClicked' : 'TechButtonNotClicked'}
      onClick={() => handleButtonClick(2)}>3</button>
    </div>
    </div>
  );
}



export default function Technology () {
  return (
    <div className="TechnologyBox">
    <h1><span>03</span> Space launch 101</h1>
      <Rockets />
    </div>
  )
}
import React from "react"
import data from "../../data.json"
import { useState } from 'react';






function Planets() {

const [selectedIndex, setSelectedIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedIndex(index);
  };

  const SelectedComponent = ({ id, name, description, distance, travel }) => (
    <div className="planetContainer">
          <div className="planet-img">
            <img alt='' src={data.destinations[selectedIndex].images.png}/>
          </div>
            <div className="planetDetails">
              <h2>{name}</h2>
              <p>{description}</p>
              <div className="Pline"></div>
                <div className="Time">
                  <div>
                    <h3>avg. distance</h3>
                    <h4>{distance}</h4>
                </div>
                <div>
                    <h3>est. travel time</h3>
                    <h4>{travel}</h4>
                </div>
              </div>
            </div>
    </div>
  );

  return (
    <div className="planet-nav">
      <SelectedComponent {...data.destinations[selectedIndex]} />
      <div className="planet-links">  
      <button onClick={() => handleButtonClick(0)}
        className={selectedIndex === 0 ? 'plantetButtonsClicked' : 'planetButtonsNotClicked'}
      >Moon</button>

      <button onClick={() => handleButtonClick(1)}
        className={selectedIndex === 1 ? 'plantetButtonsClicked' : 'planetButtonsNotClicked'}
      >Mars</button>

      <button onClick={() => handleButtonClick(2)}
        className={selectedIndex === 2 ? 'plantetButtonsClicked' : 'planetButtonsNotClicked'}
      >Europa</button>

      <button onClick={() => handleButtonClick(3)}
        className={selectedIndex === 3 ? 'plantetButtonsClicked' : 'planetButtonsNotClicked'}
      >Titan</button>
      </div>
    </div>
  );
}


export default function Destination() {
  return(
    <div className="destinationBox">
    <h1><span>01</span> Pick your Destination</h1>
      <Planets />
    </div>
  )
}



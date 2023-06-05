import React from "react"
import data from "../data.json"
import { useState } from 'react'


function Avatars() {

  const [selectedPeople, setSelectedPeople] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedPeople(index);
  };

  const SelectedComponent = ({ id, name, role, bio }) => (
    <div className="crewContainer">
          <div className="crew-img">
            <img alt='' src={data.crew[selectedPeople].images.png}/>
          </div>
            <div className="crewbio">
                <h2>{role}</h2>
                <h3>{name}</h3>
                <p>{bio}</p>
            </div>
    </div>
  );

  return (
    <div className="crew-nav">
      <SelectedComponent {...data.crew[selectedPeople]} />
      <div className="avatarsHandles">
      <button
      className={selectedPeople === 0 ? 'crewButtonClicked' : 'crewButtonNotClicked'}
      onClick={() => handleButtonClick(0)}></button>

      <button
      className={selectedPeople === 1 ? 'crewButtonClicked' : 'crewButtonNotClicked'}
      onClick={() => handleButtonClick(1)}></button>
      
      <button
      className={selectedPeople === 2 ? 'crewButtonClicked' : 'crewButtonNotClicked'} 
      onClick={() => handleButtonClick(2)}></button>

      <button
      className={selectedPeople === 3 ? 'crewButtonClicked' : 'crewButtonNotClicked'} 
      onClick={() => handleButtonClick(3)}></button>
      </div>
    </div>
  );
}



export default function Crew () {
  return (
    <div className="CrewBox">
    <h1><span>02</span> Meet your Crew</h1>
       <Avatars />
     </div>
  )
}
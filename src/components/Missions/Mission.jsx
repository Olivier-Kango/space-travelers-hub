import React from 'react';
import './Missions.css';

const Mission = (mission) => {
  const { id, name, description } = mission;

  return (
    <div key={name} id={id} className="mission">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="member"><button type="button">NOT A MEMBER</button></div>
      <div className="join"><button type="button">Join Mission</button></div>
    </div>
  );
};

export default Mission;

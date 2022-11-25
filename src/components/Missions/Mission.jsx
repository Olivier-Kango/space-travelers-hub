import React from 'react';
import { useDispatch } from 'react-redux';
import './Missions.css';
import { MissionStatus } from '../../redux/missions/missions';

const Mission = (mission) => {
  const {
    id, name, description, text, member,
  } = mission;

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(MissionStatus(id));
  };

  return (
    <div key={name} className="mission">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="member">
        <button
          type="button"
          className={member === 'Active Member' ? 'active' : 'inactive'}
        >
          {member}
        </button>
      </div>
      <div className="join">
        <button
          type="button"
          id={id}
          onClick={() => handleClick(id)}
          className={text === 'Leave Mission' && 'change'}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Mission;

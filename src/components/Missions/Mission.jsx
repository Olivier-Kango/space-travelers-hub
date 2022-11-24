import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { reservedMission } from '../../redux/missions/reservedMission';
import './Missions.css';
import { MissionStatus } from '../../redux/missions/missions';

const Mission = (mission) => {
  const {
    id, name, description,
  } = mission;
  const status = useSelector((state) => state.reducerReservedMission);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    console.log(id);
    dispatch(MissionStatus(id));
  };

  return (
    <div key={name} id={id} className="mission">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="member"><button type="button">NOT A MEMBER</button></div>
      <div className="join">
        <button
          type="button"
          id={`button-${id}`}
          onClick={() => handleClick(id)}
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default Mission;

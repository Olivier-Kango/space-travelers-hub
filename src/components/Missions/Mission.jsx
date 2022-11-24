import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservedMission } from '../../redux/missions/reservedMission';
import './Missions.css';

let reserved = false;
const Mission = (mission) => {
  const { id, name, description } = mission;
  const status = useSelector((state) => state.reducerReservedMission);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    reserved = !reserved;
    if (reserved) {
      e.target.classList.add('change');
      return dispatch(reservedMission('Leave Mission'));
    }
    e.target.classList.remove('change');
    return dispatch(reservedMission('Join Mission'));
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
          onClick={(e) => handleClick(e)}
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default Mission;

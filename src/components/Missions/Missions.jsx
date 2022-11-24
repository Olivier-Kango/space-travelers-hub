import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { loadMissions } from '../../redux/missions/missions';
import './Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMissions());
  }, []);

  return (
    <section className="container">
      <div className="title">
        <h3>Mission</h3>
        <h3>Description</h3>
        <h3>Status</h3>
        <h3>{}</h3>
      </div>
      <div className="missions">
        {Array.from(missions).map((mission) => (
          <Mission
            id={mission.mission_id}
            key={`${mission.mission_id}`}
            name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </div>
    </section>
  );
};

export default Missions;

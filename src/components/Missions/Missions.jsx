import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { loadMissions } from '../../redux/missions/missions';
import './Missions.css';

const Missions = () => {
  const { mission } = useSelector((state) => state.missions);
  console.log(mission);
  const dispatch = useDispatch();

  useEffect(() => { if (mission.length === 0) { dispatch(loadMissions()); } }, []);

  return (
    <section className="container">
      <div className="title">
        <h3>Mission</h3>
        <h3>Description</h3>
        <h3>Status</h3>
        <h3>{}</h3>
      </div>
      <div className="missions">
        {mission.map((mission) => (
          <Mission
            id={mission.mission_id}
            key={`${mission.mission_id}`}
            name={mission.mission_name}
            description={mission.description}
            text={mission.reserved ? 'Leave Mission' : 'Join Mission'}
            member={mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
          />
        ))}
      </div>
    </section>
  );
};

export default Missions;

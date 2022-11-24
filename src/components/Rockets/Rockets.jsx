import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket/Rocket';
import { fetchRockets } from '../../redux/rockets/rockets';
import styles from './styles';

const Rockets = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <section>
      <Box sx={styles.box}>
        {selector.map((rocket) => (
          <Rocket rocket={rocket} key={rocket.id} />
        ))}
      </Box>
    </section>
  );
};

export default Rockets;

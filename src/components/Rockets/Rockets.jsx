import React from 'react';
import { Box } from '@mui/material';
import Rocket from './Rocket/Rocket';
import styles from './styles';

const Rockets = () => (
  <section>
    <Box sx={styles.box}>
      <Rocket />
      <Rocket />
      <Rocket />
    </Box>
  </section>
);

export default Rockets;

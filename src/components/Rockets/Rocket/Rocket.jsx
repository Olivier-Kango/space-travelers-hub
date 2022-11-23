import React from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Button,
} from '@mui/material';
import logo from '../../../assets/images/planet.png';
import styles from './styles';

const Rocket = ({ rocket }) => (
  <Card sx={styles.card}>
    <CardMedia sx={styles.media} image={rocket.flickr_images[0]} title="Rocket" />
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {rocket.rocket_name}
      </Typography>
      <Typography variant="body2">{rocket.description}</Typography>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Reserve Rocket
        </Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default Rocket;

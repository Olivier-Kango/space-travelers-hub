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

const Rocket = () => (
  <Card sx={styles.card}>
    <CardMedia src={logo} title="Rocket" />
    <CardContent>
      <Typography variant="h5" gutterBottom>Title</Typography>
      <Typography variant="body2">Description</Typography>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Reserve Rocket
        </Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default Rocket;

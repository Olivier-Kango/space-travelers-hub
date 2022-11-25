import React from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Button,
  Badge,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRockets, cancelReserve } from '../../../redux/rockets/rockets';
import styles from './styles';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={styles.card}>
      <CardMedia sx={styles.media} image={rocket.image} title="Rocket" />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {rocket.name}
        </Typography>
        {rocket.reserved && (
          <Badge
            sx={styles.badge}
            overlap="rectangular"
            badgeContent="Reserved"
            color="success"
          />
        )}
        <Typography variant="body2">{rocket.description}</Typography>
        <CardActions>
          {rocket.reserved ? (
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => dispatch(cancelReserve(rocket.id))}
            >
              Cancel Reservation
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => dispatch(reserveRockets(rocket.id))}
            >
              Reserve Rocket
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.objectOf(PropTypes.object()).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Rocket;

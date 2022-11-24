import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { reserveRockets } from "../../../redux/rockets/rockets";
import styles from "./styles";

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={styles.card}>
      <CardMedia sx={styles.media} image={rocket.image} title="Rocket" />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {rocket.name}
        </Typography>
        <Typography variant="body2">{rocket.description}</Typography>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => dispatch(reserveRockets(rocket.id))}
          >
           {rocket.reserved ? "Cancel Reservation" : "Reserve Rocket"} 
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Rocket;

import React from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

const myprofile = () => {
  const rockets = useSelector((state) => state.rockets);
  const { mission } = useSelector((state) => state.missions);

  return (
    <section>
      <Container maxWidth="lg" sx={{ display: 'flex', columnGap: '20px' }}>
        <Container>
          <Typography variant="h5">My Missions</Typography>
          <Table sx={{ border: '0.5px solid black' }}>
            <TableBody>
              {Array.from(mission).map(
                (mission) => mission.reserved && (
                  <TableRow key={mission.mission_id}>
                    <TableCell key={mission.mission_id}>{mission.mission_name}</TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </Container>
        <Container>
          <Typography variant="h5">My Rockets</Typography>
          <Table sx={{ border: '0.5px solid black' }}>
            <TableBody>
              {rockets.map(
                (rocket) => rocket.reserved && (
                  <TableRow key={rocket.id}>
                    <TableCell key={rocket.id}>{rocket.name}</TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </Container>
      </Container>
    </section>
  );
};

export default myprofile;

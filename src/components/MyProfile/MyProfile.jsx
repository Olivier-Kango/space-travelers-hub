import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const myprofile = () => {
const rockets = useSelector(state => state.rockets);
  return (
    <section>
      <Container maxWidth="lg" sx={{ display: "flex", columnGap: "20px" }}>
        <Container>
          <Typography variant="h5">My Missions</Typography>
          <Table sx={{ border: "0.5px solid black" }}>
            <TableBody>
              {rockets.map((rocket) => {
                return (
                  rocket.reserved && (
                    <TableRow key={rocket.id}>
                      <TableCell key={rocket.id}>{rocket.name}</TableCell>
                    </TableRow>
                  )
                );
              })}
            </TableBody>
          </Table>
        </Container>
        <Container>
          <Typography variant="h5">My Rockets</Typography>
          <Table sx={{ border: "0.5px solid black" }}>
            <TableBody>
              {rockets.map((rocket) => {
                return (
                  rocket.reserved && (
                    <TableRow key={rocket.id}>
                      <TableCell key={rocket.id}>{rocket.name}</TableCell>
                    </TableRow>
                  )
                );
              })}
            </TableBody>
          </Table>
        </Container>
      </Container>
    </section>
  );
};

export default myprofile;
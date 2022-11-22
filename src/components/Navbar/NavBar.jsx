import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from "react-router-dom";
import styles from './styles';

const NavBar = () => (
  <>
    <AppBar position="static" sx={styles.appbar}>
      <Toolbar variant="dense" sx={styles.toolbar}>
        <Link to="/" className="link">
          Rockets
        </Link>
        <Link to="/missions" className="link">
          Missions
        </Link>
        <Link to="/my-profile" className="link">
          My profile
        </Link>
      </Toolbar>
    </AppBar>
  </>
);

export default NavBar;

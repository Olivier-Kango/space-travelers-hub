import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './styles';
import logo from '../../assets/images/planet.png';

const NavBar = () => (
  <>
    <AppBar position="static" sx={styles.appbar}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <Typography variant="h5" sx={styles.logoTitle}>
          Space Travelers&apos; Hub
        </Typography>
      </div>
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

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';
import Rockets from './components/Rockets/Rockets';
import NavBar from './components/Navbar/NavBar';

const App = () => (
  <>
    <NavBar />
    <div className="spacer" />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;

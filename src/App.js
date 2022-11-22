import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import NavBar from './components/Navbar/NavBar';
import './App.css';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </div>
);

export default App;

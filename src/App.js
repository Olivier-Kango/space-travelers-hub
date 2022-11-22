import NavBar from './components/Navbar/NavBar';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}
const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </div>
);

export default App;

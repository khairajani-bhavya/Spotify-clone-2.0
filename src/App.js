import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import AudioPlayer from './components/AudioPlayer';
import RightBar from './components/RightBar';
import Home from './pages/Home';
import Search from './pages/Search';
import Album from './pages/Album';
import Genre from './pages/Genre';
import Playlist from './pages/Playlist';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <Navbar />
      </aside>

      {/* Main Routed Pages */}
      <main className="main-content">
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/genre/:genre" element={<Genre />} />
          <Route path="/playlist/:id" element={<Playlist />} />

        </Routes>
      </main>

      {/* Right Sidebar */}
      <aside className="right-bar">
        <RightBar />
      </aside>

      {/* Bottom Player */}
      <AudioPlayer />
    </div>
  );
};

export default App;

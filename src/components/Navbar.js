import React from 'react';
import { NavLink } from 'react-router-dom';
// Optional if you want to isolate styling

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">SPOTIFY2.0</h1>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          <span role="img" aria-label="discover">🏠</span> Discover
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => isActive ? 'active' : ''}>
          <span role="img" aria-label="search">🔍</span> Search
        </NavLink>
        <NavLink to="/playlist/rock" className={({ isActive }) => isActive ? 'active' : ''}>
          <span role="img" aria-label="playlist">🎶</span> My Playlist
        </NavLink>
        <NavLink to="/genre/rock" className={({ isActive }) => isActive ? 'active' : ''}>
          <span role="img" aria-label="genre">🎧</span> Genres
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

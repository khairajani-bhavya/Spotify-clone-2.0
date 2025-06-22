// src/components/SearchBar.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="search-bar"
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        borderRadius: '20px',
        padding: '6px 14px',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
      }}
    >
      <FaSearch color="#ccc" style={{ marginRight: '10px' }} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for songs, artists..."
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'white',
          width: '100%',
          fontSize: '14px',
        }}
      />
    </form>
  );
};

export default SearchBar;

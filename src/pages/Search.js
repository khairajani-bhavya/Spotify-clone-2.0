import React, { useState, useEffect } from 'react';
import { searchSongs } from '../utils/shazamAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setTrack, setPlay } from '../store/playerSlice';
import SearchBar from '../components/SearchBar';

const trendingTerms = ['Arijit Singh', 'Taylor Swift', 'Shubh', 'Rema', 'The Weeknd', 'Diljit'];

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { currentTrack } = useSelector(state => state.player);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(saved);
  }, []);

  const updateSearchHistory = (term) => {
    let updated = [term, ...recentSearches.filter(q => q !== term)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const songs = await searchSongs(query);
    setResults(songs);
    updateSearchHistory(query);
    setLoading(false);
  };

  const playSong = (song) => {
    if (song.url) {
      dispatch(setTrack(song));
      dispatch(setPlay(true));
    } else {
      alert('No preview available.');
    }
  };

  const quickSearch = (term) => {
    setQuery(term);
    handleSearch({ preventDefault: () => {} });
  };

  return (
    <div className="main-content">
      <div className="top-bar">
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      </div>

      {recentSearches.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ fontSize: '16px' }}>Recent Searches:</h4>
          {recentSearches.map((term, i) => (
            <button
              key={i}
              onClick={() => quickSearch(term)}
              style={{
                marginRight: '10px',
                marginTop: '6px',
                background: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '6px 12px',
                cursor: 'pointer'
              }}
            >
              {term}
            </button>
          ))}
        </div>
      )}

      <div style={{ marginBottom: '16px' }}>
        <h4 style={{ fontSize: '16px' }}>Trending Now:</h4>
        {trendingTerms.map((term, i) => (
          <button
            key={i}
            onClick={() => quickSearch(term)}
            style={{
              marginRight: '10px',
              marginTop: '6px',
              background: '#1db954',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '6px 12px',
              cursor: 'pointer'
            }}
          >
            {term}
          </button>
        ))}
      </div>

      {loading && <p>Loading results...</p>}

      <div className="grid">
        {results.map((song, i) => (
          <div
            className={`card ${currentTrack?.title === song.title ? 'active-card' : ''}`}
            key={i}
            onClick={() => playSong(song)}
          >
            <img src={song.image} alt={song.title} />
            <div className="card-title">{song.title}</div>
            <div className="card-subtitle">{song.artist}</div>
            <button className="play-button">▶</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

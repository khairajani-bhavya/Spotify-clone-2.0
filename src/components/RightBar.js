import React, { useEffect, useState } from 'react';
import { getTopCharts } from '../utils/shazamAPI';
import { useDispatch } from 'react-redux';
import { setTrack, setPlay } from '../store/playerSlice';

const topArtists = [
  "https://artistsimages.b-cdn.net/arijit-singh/arijit-singh-1.jpg?width=3840&quality=100&format=webp&flop=false",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6ZFvKRW8UoO4iXgoCevOsz3klWv01P3lrQ&s",
  "https://m.media-amazon.com/images/M/MV5BYWYwYzYzMjUtNWE0MS00NmJlLTljNGMtNzliYjg5NzQ1OWY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8pnltlT3IdfiC8HrPew8TtIQ2Iix4h-30A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDD2JYkew0DJTJS0IAgs7LHepFEBzIURAaA&s",
];

const RightBar = () => {
  const [top, setTop] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const topSongs = await getTopCharts();
      setTop(topSongs);
    };
    fetchData();
  }, []);

  const playSong = (song) => {
    if (song.url) {
      dispatch(setTrack(song));
      dispatch(setPlay(true));
    } else {
      alert('No preview available for this song.');
    }
  };

  return (
    <aside className="right-bar">
      <h3 className="right-bar-title">Top Charts</h3>
      <div className="top-chart-list">
        {top.map((song, i) => (
          <div className="top-chart-item" key={i}>
            <img src={song.image} alt={song.title} className="chart-cover" />
            <div className="chart-info">
              <div className="chart-title">{i + 1}. {song.title}</div>
              <div className="chart-artist">{song.artist}</div>
            </div>
            <button className="chart-play" onClick={() => playSong(song)}>▶</button>
          </div>
        ))}
      </div>

      <h3 className="right-bar-title" style={{ marginTop: '20px' }}>Top Artists</h3>
      <div className="top-artists">
        {topArtists.map((url, i) => (
          <img key={i} src={url} alt={`Artist ${i + 1}`} className="artist-avatar" />
        ))}
      </div>
    </aside>
  );
};

export default RightBar;

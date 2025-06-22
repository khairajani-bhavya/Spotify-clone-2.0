import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrack, setPlay } from '../store/playerSlice';

const Genre = () => {
  const { genre } = useParams();
  const dispatch = useDispatch();

  const sampleSongs = [
    { title: 'Rock You Like A Hurricane', artist: 'Scorpions', url: '/songs/hurricane.mp3' },
    { title: 'Highway to Hell', artist: 'AC/DC', url: '/songs/highway.mp3' },
  ];

  const playSong = (song) => {
    dispatch(setTrack(song));
    dispatch(setPlay(true));
  };

  return (
    <div>
      <h2 className="section-title">Genre: {genre}</h2>
      {sampleSongs.map((song, i) => (
        <div key={i} onClick={() => playSong(song)} style={{ marginBottom: '10px', cursor: 'pointer' }}>
          🎧 {song.title} - <span style={{ color: '#aaa' }}>{song.artist}</span>
        </div>
      ))}
    </div>
  );
};

export default Genre;

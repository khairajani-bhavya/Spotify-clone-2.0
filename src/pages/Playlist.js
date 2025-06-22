import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrack, setPlay } from '../store/playerSlice';

const Playlist = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const songs = [
    { title: 'Believer', artist: 'Imagine Dragons', url: '/songs/believer.mp3' },
    { title: 'Thunder', artist: 'Imagine Dragons', url: '/songs/thunder.mp3' },
  ];

  const playSong = (song) => {
    dispatch(setTrack(song));
    dispatch(setPlay(true));
  };

  return (
    <div>
      <h2 className="section-title">Playlist: {id}</h2>
      {songs.map((song, index) => (
        <div key={index} onClick={() => playSong(song)} style={{ marginBottom: '10px', cursor: 'pointer' }}>
          🎼 {song.title} - <span style={{ color: '#aaa' }}>{song.artist}</span>
        </div>
      ))}
    </div>
  );
};

export default Playlist;

import React from 'react';
import { useDispatch } from 'react-redux';
import { setTrack, setPlay } from '../store/playerSlice';

const sampleAlbum = {
  title: 'Rock Classics',
  songs: [
    { title: 'Dream On', artist: 'Aerosmith', url: '/songs/dream-on.mp3' },
    { title: 'Sweet Child O’ Mine', artist: 'Guns N’ Roses', url: '/songs/sweet-child.mp3' },
    { title: 'Livin’ on a Prayer', artist: 'Bon Jovi', url: '/songs/livin-on-a-prayer.mp3' },
  ],
};

const Album = () => {
  const dispatch = useDispatch();

  const playSong = (song) => {
    dispatch(setTrack(song));
    dispatch(setPlay(true));
  };

  return (
    <div>
      <h2 className="section-title">{sampleAlbum.title}</h2>
      <ul>
        {sampleAlbum.songs.map((song, index) => (
          <li
            key={index}
            onClick={() => playSong(song)}
            style={{ marginBottom: '10px', cursor: 'pointer' }}
          >
            🎵 {song.title} - <span style={{ color: '#aaa' }}>{song.artist}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Album;

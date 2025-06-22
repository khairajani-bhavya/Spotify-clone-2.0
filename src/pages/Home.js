import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrack, setPlay } from '../store/playerSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { currentTrack } = useSelector(state => state.player);

  const songs = [
    {
      title: 'Somewhere Only We Know',
      artist: 'Keane',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/96/83/b1/9683b142-2c92-8c78-6906-6f961f83eaf3/520910.jpg/400x400bb.webp',
      url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      title: 'Dream On',
      artist: 'Aerosmith',
      image: 'https://i.scdn.co/image/ab67616d0000b273b11078ee23dcd99e085ac33e',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
     {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    },
    {
      title: 'Peaches',
      artist: 'Justin Bieber',
      image: 'https://i1.sndcdn.com/artworks-3GiGenn3TFnM-0-t500x500.jpg',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    },
      {
      title: 'Senorita',
      artist: 'Shawn Mendes & Camila Cabello',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Shawn_Mendes_and_Camila_Cabello_-_Se%C3%B1orita.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    },
     {
      title: 'Heat Waves',
      artist: 'Glass Animals',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    },
    {
      title: 'Perfect',
      artist: 'Ed Sheeran',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    },
    {
      title: 'Let Me Love You',
      artist: 'DJ Snake ft. Justin Bieber',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a5/DJSnakeLetMeLoveYou.jpg',
      url: '',
    },
    // ➕ Add more songs here
  ];

  const handlePlay = (song) => {
    if (song.url) {
      dispatch(setTrack(song));
      dispatch(setPlay(true));
    } else {
      alert('No audio available for this track.');
    }
  };

  return (
    <div className="grid">
      {songs.map((song, i) => (
        <div
          className={`card ${currentTrack?.title === song.title ? 'active-card' : ''}`}
          key={i}
          onClick={() => handlePlay(song)}
        >
          <img src={song.image} alt={song.title} />
          <div className="card-title">{song.title}</div>
          <div className="card-subtitle">{song.artist}</div>
          <button className="play-button">▶</button>
        </div>
      ))}
    </div>
  );
};

export default Home;

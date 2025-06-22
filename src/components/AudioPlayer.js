import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlay } from '../store/playerSlice';

const AudioPlayer = () => {
  const { currentTrack, isPlaying } = useSelector(state => state.player);
  const dispatch = useDispatch();

  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const handlePlayPause = () => {
    dispatch(setPlay(!isPlaying));
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(setPlay(false));
    }
  };

  const formatTime = (sec) => {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (!currentTrack) return null;

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="track-info">
        <strong>{currentTrack.title}</strong> - <em>{currentTrack.artist}</em>
      </div>

      <div className="controls">
        <button onClick={() => setIsShuffle(!isShuffle)} className={isShuffle ? 'active' : ''}>🔀</button>
        <button onClick={handlePlayPause}>{isPlaying ? '⏸' : '▶️'}</button>
        <button onClick={() => setIsRepeat(!isRepeat)} className={isRepeat ? 'active' : ''}>🔁</button>
      </div>

      <div className="seek-bar">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTrack: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    setPlay: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setTrack, setPlay } = playerSlice.actions;
export default playerSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: [],
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
    addPlaylist: (state, action) => {
      state.playlists.push(action.payload);
    },
  },
});

export const { setPlaylists, addPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
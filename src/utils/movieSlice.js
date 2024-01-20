import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    NowPlayingmovies: null,
    PopularMovies: null,
    TopRatedMovies: null,
    TrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingmovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
} = movieSlice.actions;

export default movieSlice.reducer;

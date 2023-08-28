import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from './actions';

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { addSong, removeSong, addMovie, removeMovie, reset }

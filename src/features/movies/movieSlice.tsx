import { createSlice, EnhancedStore } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface MovieState {
  movies: Object;
}

const initialState: MovieState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies
export default movieSlice.reducer;

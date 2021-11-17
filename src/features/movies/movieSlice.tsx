import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { RootState } from "../store";

interface State {
  movies: Object;
  shows: Object;
}

const movieText: string = "Harry";
const showText: string = "Cars";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await MovieApi.get(
      `?s=${movieText}&type=movie&apikey=${APIkey}`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const response = await MovieApi.get(
      `?s=${showText}&type=series&apikey=${APIkey}`
    );
    return response.data;
  }
);

const initialState: State = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  // 'Builder callback' approach required for TypeScript to correctly infer types
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("Pending");
    });

    builder.addCase(fetchAsyncMovies.fulfilled, (state: State, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, movies: payload };
    });

    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("Rejected");
    });

    builder.addCase(fetchAsyncShows.fulfilled, (state: State, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, shows: payload };
    });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies;
export const getAllShows = (state: RootState) => state.movies.shows;
export default movieSlice.reducer;

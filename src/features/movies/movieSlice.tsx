import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Params } from "react-router-dom";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { RootState } from "../store";

interface State {
  movies: Object;
  shows: Object;
  details: any;
}

const movieText: string = "Cars";
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

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id: any) => {
    const response = await MovieApi.get(
      `?i=${id}&plot=full&apikey=${APIkey}`
    );
    return response.data;
  }
);

const initialState: State = {
  movies: {},
  shows: {},
  details: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    removeDetails: (state) => {
      state.details = {}
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

    builder.addCase(fetchAsyncDetails.fulfilled, (state: State, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, details: payload };
    });
  },
});

export const { removeDetails } = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies;
export const getAllShows = (state: RootState) => state.movies.shows;
export const getDetails = (state: RootState) => state.movies.details;
export default movieSlice.reducer;

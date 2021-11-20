import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Params } from "react-router-dom";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { RootState } from "../store";

interface State {
  movies: Object;
  shows: Object;
  details: any;
  loading: boolean;
}

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (movieText: string = "Mission") => {
    const response = await MovieApi.get(
      `?s=${movieText}&type=movie&apikey=${APIkey}`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (showText: string = "Friends") => {
    const response = await MovieApi.get(
      `?s=${showText}&type=series&apikey=${APIkey}`
    );
    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id: any) => {
    const response = await MovieApi.get(`?i=${id}&plot=full&apikey=${APIkey}`);
    return response.data;
  }
);

const initialState: State = {
  movies: {},
  shows: {},
  details: {},
  loading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    removeDetails: (state) => {
      state.details = {};
    },
  },
  // 'Builder callback' approach required for TypeScript to correctly infer types
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state: State) => {
      console.log("Pending");
      return { ...state, loading: true };
    });

    builder.addCase(fetchAsyncMovies.fulfilled, (state: State, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, movies: payload, loading: false };
    });

    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("Rejected");
    });

    builder.addCase(fetchAsyncShows.fulfilled, (state: State, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, shows: payload, loading: false };
    });

    builder.addCase(
      fetchAsyncDetails.fulfilled,
      (state: State, { payload }) => {
        console.log("Fetched Successfully");
        return { ...state, details: payload };
      }
    );
  },
});

export const { removeDetails } = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies;
export const getAllShows = (state: RootState) => state.movies.shows;
export const getDetails = (state: RootState) => state.movies.details;
export const getLoadingState = (state: RootState) => state.movies.loading;
export default movieSlice.reducer;

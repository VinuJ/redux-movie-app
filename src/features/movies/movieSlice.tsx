import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { RootState } from "../store";

interface MovieState {
  movies: Object;
}

const movieText: string = "Harry";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await MovieApi.get(
      `?s=${movieText}&type=movie&apikey=${APIkey}`
    )
    return response.data
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("Pending")
    })

    builder.addCase(fetchAsyncMovies.fulfilled, (state: MovieState, { payload }) => {
      console.log("Fetched Successfully")
      return { ...state, movies: payload}
    })
    
    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("Rejected")
    })
  }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies;
export default movieSlice.reducer;

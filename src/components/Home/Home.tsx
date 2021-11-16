import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText: string = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?s=${movieText}&type=movie&apikey=${APIkey}`
      ).catch((error) => {
        console.log("Error: " + error);
      });
      //Check if response is not void
      if (response) {
        dispatch(addMovies(response.data));
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

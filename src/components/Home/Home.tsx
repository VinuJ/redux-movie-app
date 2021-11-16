import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText: string = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?s=${movieText}&type=movie&apikey=${APIkey}`
      ).catch((error) => {
        console.log("Error: " + error);
      });
      console.log("API Response: " + response);
    };
    fetchMovies()
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

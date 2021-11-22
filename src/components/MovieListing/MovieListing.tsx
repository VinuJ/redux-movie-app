import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { settings } from "../../settings";

interface Data {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const MovieListing = () => {
  const movies: any = useSelector(getAllMovies);
  const shows: any = useSelector(getAllShows);
  console.log(movies);

  let renderMovies,
    renderShows: string | JSX.Element = "";

  if (movies.Response === "True") {
    renderMovies = movies.Search.map((movie: Data, index: number) => {
      return <MovieCard key={index} data={movie} />;
    });
  } else {
    renderMovies = <div className="movies-error">{movies.Error}</div>;
  }

  if (shows.Response === "True") {
    renderShows = shows.Search.map((show: Data, index: number) => {
      return <MovieCard key={index} data={show} />;
    });
  } else {
    renderShows = <div className="shows-error">{shows.Error}</div>;
  }

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;

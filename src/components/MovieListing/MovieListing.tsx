import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"

interface MovieData {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const MovieListing = () => {
  const movies: any = useSelector(getAllMovies);
  console.log(movies);

  let renderMovies: string | JSX.Element = "";

  if (movies.Response === 'True') {
    renderMovies = movies.Search.map((movie: MovieData, index: number) => {
      return <MovieCard key={index} data={movie} />
    })
  } else {
    renderMovies = <div className="movies-error">{movies.Error}</div>;
  }

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  )
};

export default MovieListing;

import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss"

interface Props {
  key: number;
  data: MovieData;
}

interface MovieData {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const MovieCard = (props: Props) => {
  const data = props.data;
  return (
    <div className="card-item">
      <Link to={`/redux-movie-app/movie/${data.imdbID}`} >
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
};

export default MovieCard;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLoadingState } from "../../features/movies/movieSlice";
import "./MovieCard.scss";
import noImage from "../../images/noImage.png";

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
  const loadingFlag = useSelector(getLoadingState);

  return (
    <div key={data.Title} className="card-item">
      {loadingFlag ? (
        <div className="card-inner"></div>
      ) : (
        <>
          <Link to={`/redux-movie-app/movie/${data.imdbID}`}>
            <div className="card-inner" onClick={() => window.scrollTo(0,0)}>
              <div className="card-top">
                {data.Poster == "N/A" ? (
                  <img id="no-image" src={noImage} alt="No image" />
                ) : (
                  <img src={data.Poster} alt={data.Title} />
                )}
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <h4>{data.Title}</h4>
                  <p>{data.Year}</p>
                </div>
              </div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default MovieCard;

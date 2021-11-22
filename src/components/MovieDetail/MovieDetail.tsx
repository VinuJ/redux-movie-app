import React, { useEffect } from "react";
import { Params, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  getDetails,
  removeDetails,
} from "../../features/movies/movieSlice";
import {
  faStar,
  faThumbsUp,
  faFilm,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MovieDetail.scss";
import noImage from "../../images/noImage.png"

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID));

    return () => {
      dispatch(removeDetails());
    };
  }, [dispatch, imdbID]);
  return (
    <div key={data.Title} className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Fetching...</div>
      ) : (
        <>
          <div className="left-section">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-stats">
              <div className="stat-box">
                IMDB Rating<FontAwesomeIcon id="star" icon={faStar} />
                {data.imdbRating}
              </div>
              <div className="stat-box">
                IMDB Votes<FontAwesomeIcon id="thumbs-up" icon={faThumbsUp} />
                {data.imdbVotes}
              </div>
              <div className="stat-box">
                Runtime<FontAwesomeIcon id="film" icon={faFilm} />
                {data.Runtime}
              </div>
              <div className="stat-box">
                Year <FontAwesomeIcon id="calendar" icon={faCalendar} />
                {data.Year}
              </div>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <div>{data.Director}</div>
              </div>
            </div>
            <div className="movie-info">
              <div>
                <span>Stars</span>
                <div>{data.Actors}</div>
              </div>
            </div>
            <div className="movie-info">
              <div>
                <span>Genres</span>
                <div>{data.Genre}</div>
              </div>
            </div>
            <div className="movie-info">
              <div>
                <span>Languages</span>
                <div>{data.Language}</div>
              </div>
            </div>
            <div className="movie-info">
              <div>
                <span>Awards</span>
                <div>{data.Awards}</div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="movie-image">
            {data.Poster == "N/A" ? (
              <img id="no-image" src={noImage} alt="No image" />
            ) : (
              <img src={data.Poster} alt={data.Title} />
            )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
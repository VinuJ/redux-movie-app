import React, { useEffect } from "react";
import { Params, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncDetails, getDetails } from "../../features/movies/movieSlice";
import { faStar, faThumbsUp, faFilm, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MovieDetail.scss"

const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails)
  console.log(data)
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID))
  }, [dispatch, imdbID])
  return (
    <div className="movie-section">
      <div className="left-section">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-stats">
          <span>
            IMDB Rating <FontAwesomeIcon id='star' icon={faStar} /> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <FontAwesomeIcon id='thumbs-up' icon={faThumbsUp} /> : {data.imdbVotes}
          </span>
          <span>
            Runtime <FontAwesomeIcon id='film' icon={faFilm} /> : {data.Runtime}
          </span>
          <span>
            Year <FontAwesomeIcon id='calendar' icon={faCalendar} /> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <data className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
        </data>
        <data className="movie-info">
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
        </data>
        <data className="movie-info">
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
        </data>
        <data className="movie-info">
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
        </data>
        <data className="movie-info">
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </data>
      </div>
      <div className="right-section">
        <div className="movie-image">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    </div>
  )
};

export default MovieDetail;

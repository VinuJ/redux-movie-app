import React, { useEffect } from "react";
import { Params, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncDetails, getDetails } from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails)
  console.log(data)
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID))
  }, [dispatch, imdbID])
  return <div>MovieDetail</div>;
};

export default MovieDetail;

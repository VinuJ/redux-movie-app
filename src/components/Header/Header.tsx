import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);

    dispatch(fetchAsyncMovies(input));
    dispatch(fetchAsyncShows(input));
    setInput("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link id="logo-link" to="/redux-movie-app/">
          Movie App
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={input}
            placeholder="Search..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
          <button type="submit">
            <FontAwesomeIcon id="search" icon={faSearch} />
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;

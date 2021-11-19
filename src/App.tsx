import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";


/* 
  TO-DO:
  - Make MovieDetails responsive
  - Add loader animation for normal search and loading movie details
  - Nicer colours styling overall
  - Fix home page margins for mobile screen width
*/

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/redux-movie-app/" element={<Home />} />
          <Route path="/redux-movie-app/movie/:imdbID" element={<MovieDetail />} />
          <Route path="/redux-movie-app/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

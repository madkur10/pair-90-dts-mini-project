import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import MovieHorizontalCard from "../components/MovieHorizontalCard";
import MovieVerticalCard from "../components/MovieVerticalCard";
import axios from "axios";
import CardMovieDetail from "../components/cardMovieDetail";
const DetailFilm = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <h1>ini dari detail film</h1>
        <CardMovieDetail />
        <MovieHorizontalCard name="Popular" paramsCar="sort_by=popularity.desc" />
        <MovieHorizontalCard
          name="User, Continue Watching"
          shortBy="vote_average"
        />
        <MovieVerticalCard name="On the agenda" shortBy="release_date" />
        <MovieHorizontalCard name="Top 10 Indonesian Movies" />
      </body>
      <footer></footer>
    </div>
  );
};

export default DetailFilm;

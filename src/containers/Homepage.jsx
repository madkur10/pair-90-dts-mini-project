import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieHorizontalCard from "../components/MovieHorizontalCard";
import MovieVerticalCard from "../components/MovieVerticalCard";
import axios from "axios";
import CardMovieMain from "../components/cardMovieMain";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=2dd5257e492f59c8f1f807a5dc299773&language=en-US&sort_by=popularity.desc`
        );

        setMovies(response.data.results);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);

  // const randomMoviesNumber = Math.floor(Math.random() * movies.length);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        {/* <CardMovieMain
          title={movies[1].title}
          // poster_path={movies[1].poster_path} */}
        {/* /> */}
        <MovieHorizontalCard
          name="Popular"
          paramsCar="sort_by=popularity.desc"
        />
        <MovieHorizontalCard
          name="top Rated"
          paramsCar="sort_by=vote_average.desc"
        />
        <MovieVerticalCard
          name="New Release"
          paramsCar="sort_by=release_date.desc"
        />
        <MovieHorizontalCard name="belum kepikiran" />
      </body>
      <footer></footer>
    </div>
  );
};

export default Homepage;

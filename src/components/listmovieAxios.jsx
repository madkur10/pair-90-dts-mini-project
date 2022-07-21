import React from "react";
import CardMov from "./cardmovie";

const ListmovieAxios = (props) => {
  const movies = props.movies;

  const startSlice = parseInt(props.page) * 5;
  const endSlice = startSlice + 5;
  return (
    <>
      {props.page}
      {movies.slice(startSlice, endSlice).map((movies) => {
        return (
          <CardMov
            poster_path={movies.poster_path}
            key={movies.id}
            title={movies.title}
            id={movies.id}
          />
        );
      })}
    </>
  );
};

export default ListmovieAxios;

import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import { Card, CardMedia, CardActionArea } from "@mui/material";
import { MovieIdContext } from "../contexts/MovieIdContext";
import CardMovieDetail from "./cardMovieDetail";

const CardMov = (props) => {
  const baseURLLokal = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <CardActionArea>
        <Link to="/detail">
          <Card>
            <CardMedia
              component="img"
              image={`${baseURLLokal}${props.poster_path}`}
              // sx={{
              //   height: "140",
              //   width: "340",
              // }}
            />
          </Card>
          <h1> {props.id}</h1>
        </Link>
      </CardActionArea>
    </>
  );
};

export default CardMov;

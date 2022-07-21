import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const CardMovieMain = (props) => {
  //   const baseURLLokal = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <Link to="/detail">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="display image"
              //   image={`${baseURLLokal}${props.poster_path}`}
            ></CardMedia>
            <CardContent>
              <Typography variant="body1">{props.title}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};

export default CardMovieMain;

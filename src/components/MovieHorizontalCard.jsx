import React, { useEffect, useState } from "react";
import { Container, Card, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ListmovieAxios from "./listmovieAxios";
import axios from "axios";
const MovieHorizontalCard = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const paramsCar = props.paramsCar;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=2dd5257e492f59c8f1f807a5dc299773&language=id-ID&${paramsCar}`
        );

        setMovies(response.data.results);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        {" "}
        <Typography variant="h6">{props.name}</Typography>
        <Carousel sx={{ maxHeight: "150" }}>
          <Card sx={{ display: "flex", flexDirection: "row" }}>
            <ListmovieAxios page="0" movies={movies} />
          </Card>
          <Card sx={{ display: "flex", flexDirection: "row" }}>
            <ListmovieAxios page="1" movies={movies} />
          </Card>
          <Card sx={{ display: "flex", flexDirection: "row" }}>
            <ListmovieAxios page="2" movies={movies} />
          </Card>
          <Card sx={{ display: "flex", flexDirection: "row" }}>
            <ListmovieAxios page="3" movies={movies} />
          </Card>
        </Carousel>
      </Container>
    </>
  );
};

export default MovieHorizontalCard;

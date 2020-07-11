import React from "react";
import Movie from "./movie";

const ListMovies = (props) => {
  return props.movies.map(movie =>
      <Movie movie={movie}/>
  )
}
export default ListMovies;
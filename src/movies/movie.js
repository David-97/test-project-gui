import React from "react";

const Movie = ({movie}) => {
  return (
      <React.Fragment key={movie._id}>
        <h3>{movie.title}</h3>
        <h4>{movie.director}</h4>
        <h5>{movie.releaseDate}</h5>
        <span>{movie.description}</span>
        <p>{movie.genres.join(", ")}</p>
        <p>{movie.length} minutes</p>
      </React.Fragment>
  );
}
export default Movie;
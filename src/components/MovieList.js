import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="flex-row">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default MovieList;

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.NowPlayingmovies} />
        <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"Latest"} movies={movies.NowPlayingmovies} />
        <MovieList title={"Horror"} movies={movies.NowPlayingmovies} />
        <MovieList title={"Upcoming movies"} movies={movies.NowPlayingmovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

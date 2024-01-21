import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { backgroundPhoto } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 bg-gradient-to-t from-black ">
        <img
          className="h-screen object-cover"
          src={backgroundPhoto}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;

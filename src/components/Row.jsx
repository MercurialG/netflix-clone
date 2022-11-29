import axios from "../axios";
import React, { useEffect, useState } from "react";
import "../styles/Rows.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <>
      <h2 className="row__title">{title}</h2>
      <div className="row">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              // <div className="row__poster__container">
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "poster--large"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              // {/* <h4 className="row__poster__text">
              // {movie?.tilte || movie?.name || movie?.original_title}
              // </h4> */}
              // </div>
            )
        )}
      </div>
    </>
  );
}

export default Row;

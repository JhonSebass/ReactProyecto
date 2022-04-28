import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";

import styles from "./MoviesGrid.module.css"

export function MoviesGrid() {
  
  const [movies, setMovie] = useState([]);
  

  useEffect(() => {
   get("/discover/movie").then((data) => {
       setMovie(data.results);
    });
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails(){
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        get("/movie/" +  movieId).then(data => {
            setMovie(data)
        }) 
    }, [movieId]);

    if(!movie){
        return null;
    }

    const imagenUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    return (
    <div className={styles.detailsContainer}>
    <img className={`${styles.col} ${styles.movieImage}`} src={ imagenUrl } alt={movie.title} />
    <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
            <strong>Titulo: </strong>{movie.title}</p>
        <p>
           <strong>Generos: </strong> {movie.genres.map(gener => gener.name).join(", ")}
        </p>
        <p><strong>Descripción: </strong>{movie.overview}</p>
    </div>
    </div>
    );
}
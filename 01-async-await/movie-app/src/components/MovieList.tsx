import { useEffect, useState } from "react";
import { Movie } from "../types/movie";
import ErrorMessage from "./ErrorMessage";

function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    "https://www.omdbapi.com/?apikey=8c9d4c40&s=batman"
                );
                const data = await response.json();

                if (data.Response === "False") {
                    throw new Error(data.Error);
                }

                setMovies(data.Search as Movie[]);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) return <p>로딩 중...</p>;

    return (
        <>
            <ErrorMessage message={error} />
            <ul>
                {movies.map((movie) => (
                    <li key={movie.imdbID}>
                        {movie.Title} ({movie.Year})
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MovieList;

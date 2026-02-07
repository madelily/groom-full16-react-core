import { useEffect, useState } from "react";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("MovieList 마운트됨");

        const fetchMovies = async () => {
            setLoading(true);

            const response = await fetch(
                "https://www.omdbapi.com/?apikey=8c9d4c40&s=batman"
            );
            const data = await response.json();

            setMovies(data.Search);
            setLoading(false);
        };

        fetchMovies();

        return () => {
            console.log("MovieList 언마운트됨");
        };
    }, []);

    if (loading) return <p>로딩 중...</p>;

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.imdbID}>
                    {movie.Title} ({movie.Year})
                </li>
            ))}
        </ul>
    );
}

export default MovieList;

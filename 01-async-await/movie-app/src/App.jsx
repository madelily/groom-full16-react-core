import { useEffect, useState } from "react";

function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovies = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                "https://www.omdbapi.com/?apikey=8c9d4c40&s=batman"
            );

            if (!response.ok) {
                throw new Error("네트워크 오류");
            }

            const data = await response.json();

            if (data.Response === "False") {
                throw new Error(data.Error);
            }

            setMovies(data.Search);
        } catch (err) {
            setError("영화 정보를 불러오지 못했습니다.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>영화 목록</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.imdbID}>
                        {movie.Title} ({movie.Year})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
}

async function getMovies(): Promise<Movie[]> {
    const res = await fetch(
        "https://www.omdbapi.com/?apikey=8c9d4c40&s=batman",
        { cache: "no-store" }
    );
    const data = await res.json();
    return data.Search;
}

export default async function MoviesPage() {
    const movies = await getMovies();

    return (
        <div style={{ padding: "20px" }}>
            <h1>영화 목록 페이지</h1>
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

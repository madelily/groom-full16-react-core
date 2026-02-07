import { useState } from "react";
import MovieList from "./components/MovieList";
import Section from "./components/Section";
import Button from "./components/Button";

function App() {
    const [showMovies, setShowMovies] = useState(true);
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: "20px" }}>
            <h1>컴포넌트 재사용성</h1>

            <Section title="영화 목록 영역">
                <Button
                    label={showMovies ? "영화 숨기기" : "영화 보이기"}
                    onClick={() => setShowMovies((prev) => !prev)}
                />
                {showMovies && <MovieList />}
            </Section>

            <Section title="카운터 영역">
                <Button label="증가" onClick={() => setCount((c) => c + 1)} />
                <Button label="감소" onClick={() => setCount((c) => c - 1)} />
                <p>현재 값: {count}</p>
            </Section>
        </div>
    );
}

export default App;

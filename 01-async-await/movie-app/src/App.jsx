import { useState } from "react";
import MovieList from "./components/MovieList";

function App() {
    const [show, setShow] = useState(true);

    return (
        <div style={{ padding: "20px" }}>
            <h1>useEffect 라이프사이클 테스트</h1>

            <button onClick={() => setShow((prev) => !prev)}>
                {show ? "컴포넌트 숨기기" : "컴포넌트 보이기"}
            </button>

            <hr />

            {show && <MovieList />}
        </div>
    );
}

export default App;

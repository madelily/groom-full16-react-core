import LoginStatus from "./components/LoginStatus";
import Section from "./components/Section";
import MovieList from "./components/MovieList";

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>React Context 전역 상태 관리</h1>

            <LoginStatus />

            <Section title="영화 목록">
                <MovieList />
            </Section>
        </div>
    );
}

export default App;

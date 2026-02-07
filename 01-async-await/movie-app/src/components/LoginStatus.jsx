import { useUser } from "../context/UserContext";

function LoginStatus() {
    const { isLoggedIn, login, logout } = useUser();

    return (
        <div style={{ marginBottom: "20px" }}>
            <p>
                현재 상태:{" "}
                <strong>{isLoggedIn ? "로그인됨" : "로그아웃됨"}</strong>
            </p>

            {isLoggedIn ? (
                <button onClick={logout}>로그아웃</button>
            ) : (
                <button onClick={login}>로그인</button>
            )}
        </div>
    );
}

export default LoginStatus;

function ErrorMessage({ message }) {
    if (!message) return null;

    return (
        <p style={{ color: "red", fontWeight: "bold" }}>
            에러 발생: {message}
        </p>
    );
}

export default ErrorMessage;

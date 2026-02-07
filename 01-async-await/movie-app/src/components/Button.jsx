function Button({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{ marginRight: "10px", padding: "6px 12px" }}
        >
            {label}
        </button>
    );
}

export default Button;

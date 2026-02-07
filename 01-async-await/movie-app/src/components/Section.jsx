function Section({ title, children }) {
    return (
        <section style={{ margin: "20px 0" }}>
            <h2>{title}</h2>
            <div>{children}</div>
            <hr />
        </section>
    );
}

export default Section;

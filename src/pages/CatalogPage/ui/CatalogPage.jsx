export const CatalogPage = () => {
    return (
        <div>
            <h2>Каталог</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginTop: "16px",
                }}
            >
                <div
                    style={{
                        background: "#fff",
                        padding: "16px",
                        borderRadius: "8px",
                        color: "black",
                    }}
                >
                    Товар 1
                </div>
                <div
                    style={{
                        background: "#fff",
                        padding: "16px",
                        borderRadius: "8px",
                        color: "black",
                    }}
                >
                    Товар 2
                </div>
                <div
                    style={{
                        background: "#fff",
                        padding: "16px",
                        borderRadius: "8px",
                        color: "black",
                    }}
                >
                    Товар 3
                </div>
            </div>
        </div>
    );
};

import Overlay from "./Overlay";

const Error404 = () => {
  return (
    <>
      <Overlay />
      <div className="OfferMain">
        <h1
          style={{
            color: "rgba(255, 12, 12, 0.623)",
            fontWeight: "500",
            marginTop: "10%",
          }}
        >
          ❌ Error 404 - Nie znaleziono strony ❌
        </h1>
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            top: "50px",
            fontSize: "200%",
          }}
          href="#/"
        >
          Wróć do strony głownej
        </a>
        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default Error404;

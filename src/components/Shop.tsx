import Overlay from "./Overlay";
import { useEffect } from "react";
//import drillIMG from "../assets/drill.svg";
//import grinderIMG from "../assets/grinder.png";

const Shop = () => {
  useEffect(() => {
    document.getElementById("Hud1")!.style.color = "orange";
  }, []);
  return (
    <>
      <Overlay />
      <div className="OfferMain">
        <h1
          style={{
            color: "rgba(255, 12, 12, 0.623)",
            fontWeight: "500",
          }}
        >
          Przepraszamy, lecz jeszcze nad tym pracujemy!
        </h1>
        <h2 style={{ textShadow: "-4px -2px 6px black" }}>🚧 🚧 🚧</h2>
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            top: "50px",
            fontSize: "200%",
          }}
          href="/"
        >
          Wróć do strony głownej
        </a>
        {/*<div className="OptionsToChooseFromService">
          <div className="OptionDrills">
            <img src={drillIMG} />
            <p>Wiertarki</p>
          </div>
          <div className="OptionDrills">
            <img src={grinderIMG} />
            <p>Szlifierki</p>
  </div>*/}
        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default Shop;

import ToolinRepair from "../assets/Tool-in-Repair.png";
import Shop from "../assets/shop.png";
import Overlay from "./Overlay";
import { useEffect } from "react";
import MlotoWiertarka from "../assets/MlotowiertarkaMakita.jpg";
import Osprzet from "../assets/Osprzet.jpg";
import OsprzetMikro from "../assets/OsprzetDoMikronarzedzi.jpg";
import MikroNarzedzie from "../assets/MikronarzędzieMakita.jpg";
import ZestawnarzedziakumulatorowychMAKITA from "../assets/Zestaw-narzedzi-akumulatorowych-MAKITA.jpg";

const OurOffer = () => {
  useEffect(() => {
    document.getElementById("Hud1")!.style.color = "orange";
  }, []);
  return (
    <>
      <Overlay />
      <div className="OfferMain">
        <h1>
          <span style={{ color: "#333" }}>↓</span> Wybierz co Cię interesuje{" "}
          <span style={{ color: "#333" }}>↓</span>
        </h1>
        <div className="OfferOptions">
          <div id="OfferPicFirst">
            <a href="/Oferta/Serwis">
              <img src={ToolinRepair}></img>
              <p>Naprawa</p>
            </a>
          </div>
          <div id="OfferPicSecond">
            <a href="/Oferta/Sklep">
              <img src={Shop}></img>
              <p>Sklep Online</p>
            </a>
          </div>
        </div>
        <div className="Equip">
          <h1>
            <span style={{ color: "#333" }}>↓</span> Nasz asortyment{" "}
            <span style={{ color: "#333" }}>↓</span>{" "}
          </h1>
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "4px 4px 10px orange",
              marginRight: "30px",
            }}
          >
            <img
              src={ZestawnarzedziakumulatorowychMAKITA}
              className="card-img-top"
              alt="..."
              style={{ width: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Elektronarzędzia akumulatorowe</h5>
              <a href="#" className="CheckLink">
                » Sprawdź
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "4px 4px 10px orange",
              marginRight: "30px",
            }}
          >
            <img
              src={MlotoWiertarka}
              className="card-img-top"
              alt="..."
              style={{ width: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Elektronarzędzia sieciowe</h5>
              <a href="#" className="CheckLink">
                » Sprawdź
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "4px 4px 10px orange",
              marginRight: "30px",
            }}
          >
            <img
              src={Osprzet}
              className="card-img-top"
              alt="..."
              style={{ width: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Osprzęt do elektronarzędzi</h5>
              <a href="#" className="CheckLink">
                » Sprawdź
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "4px 4px 10px orange",
              marginRight: "30px",
            }}
          >
            <img
              src={MikroNarzedzie}
              className="card-img-top"
              alt="..."
              style={{ width: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Mikronarzędzia</h5>
              <a href="#" className="CheckLink">
                » Sprawdź
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "4px 4px 10px orange",
              marginRight: "30px",
            }}
          >
            <img
              src={OsprzetMikro}
              className="card-img-top"
              alt="..."
              style={{ width: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Osprzęt do mikronarzędzi</h5>
              <a href="#" className="CheckLink">
                » Sprawdź
              </a>
            </div>
          </div>
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default OurOffer;

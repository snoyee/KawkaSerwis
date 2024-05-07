import "../index.scss";
import MakitaLogo from "../assets/Makita-Logo.png";
import HikokiLogo from "../assets/hikoki_logo.png";
import Stanley from "../assets/stanley.png";
import deWalt from "../assets/deWalt.png";
import stihl from "../assets/stihl.png";
import stiga from "../assets/stiga.png";

const Hud = () => {
  const CopyAlertEmail = () => {
    navigator.clipboard.writeText("kawka.serwis@xyz.com");
    alert("Adres E-mail został skopiowany do schowka");
  };

  return (
    <>
      <div className="UpMain">
        <div className="Contact">
          <ul>
            <li>
              <a href="tel:52 342 13 44">📞 52 342 13 44</a>
            </li>
            <div id="Line"></div>
            <li>
              <a href="mailto:kawka.serwis@xyz.com" onClick={CopyAlertEmail}>
                📧 kawka.serwis@xyz.com
              </a>
            </li>
          </ul>
        </div>

        <div className="NameAndQuote">
          <h1 onClick={() => (document.location.href = "/")}>KAWKA SERWIS</h1>
          <p>serwis elektronarzędzi w Bydgoszczy 🛠️</p>
        </div>
        <div className="Navbar">
          <a id="Hud1" href="/">
            Nasza Oferta
          </a>
          <a id="Hud2" href="/Lokalizacja">
            Lokalizacja
          </a>
          <a id="Hud3" href="/FAQ">
            FAQ
          </a>
          <a id="Hud4" href="/OFirmie">
            o firmie
          </a>
        </div>
      </div>
      <div className="FooterMain">
        <div className="Logos">
          <p> Nasi Producenci: </p>
          <img src={MakitaLogo}></img>
          <img src={Stanley}></img>
          <img src={HikokiLogo}></img>
          <img src={deWalt}></img>
          <h3 style={{ margin: "0", color: "black", fontWeight: "400" }}>
            KAWKA Serwis™
          </h3>
        </div>
      </div>
    </>
  );
};

export default Hud;

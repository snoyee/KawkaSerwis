import Overlay from "./Overlay";
import { useEffect } from "react";

const Repair = () => {
  const handleClickNumber = () => {
    document.getElementById("NumberCopySuccess")!.style.display = "block";
    setTimeout(() => {
      document.getElementById("NumberCopySuccess")!.style.display = "none";
    }, 2000);
    return navigator.clipboard.writeText("52 342 13 44");
  };

  const handleClickEmail = () => {
    document.getElementById("EmailCopySuccess")!.style.display = "block";
    setTimeout(() => {
      document.getElementById("EmailCopySuccess")!.style.display = "none";
    }, 2000);
    return navigator.clipboard.writeText("kawka.serwis@xyz.com");
  };

  useEffect(() => {
    document.getElementById("Hud1")!.style.color = "orange";
  }, []);
  return (
    <>
      <Overlay />
      <div className="OfferMain">
        <h1>
          Skontaktuj się z nami, a powiemy Ci co da się zrobić z Twoim
          uszkodzonym sprzętem!
        </h1>
        <div className="ContactInfoRepair">
          <h2>
            📞 Nr telefonu: +52 342 13 44
            <button
              type="button"
              onClick={handleClickNumber}
              onTouchMove={handleClickNumber}
            >
              Kopiuj
            </button>
          </h2>
          <div className="NumberCopySuccessDiv">
            <p id="NumberCopySuccess">Numer został skopiowany ✅</p>
          </div>
          <h2>
            📧 Adres e-mail: kawka.serwis@xyz.com
            <button
              type="button"
              onClick={handleClickEmail}
              onTouchMove={handleClickEmail}
            >
              Kopiuj
            </button>
          </h2>
          <div className="EmailCopySuccessDiv">
            <p id="EmailCopySuccess">Adres e-mail został skopiowany ✅</p>
          </div>
          <p>Jesteśmy dostępni:</p>
          <p>poniedziałek 8:00 - 16:00</p>
          <p>wtorek 8:00 - 16:00</p>
          <p>środa 8:00 - 16:00</p>
          <p>czwartek 8:00 - 16:00</p>
          <p>piątek 8:00 - 16:00</p>
          <p>------------------------</p>
          <p>sobota nieczynne</p>
          <p>niedziela nieczynne</p>
          <div style={{ height: "200px" }}></div>
        </div>
      </div>
    </>
  );
};

export default Repair;

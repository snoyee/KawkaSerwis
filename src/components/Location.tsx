import { useEffect } from "react";
import Overlay from "./Overlay";

const OurOffer = () => {
  useEffect(() => {
    document.getElementById("Hud2")!.style.color = "orange";
  }, []);
  return (
    <>
      <Overlay />
      <div className="OfferMain">
        <h1>⬇️ Tutaj nas znajdziesz ⬇️</h1>
        <div className="GoogleMapLocation">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.1419540429683!2d18.061003499999995!3d53.125597299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703140e29c5b437%3A0x392abb22228e1c49!2sP.W.Andrzej%20Kawka.%20Sklep%20i%20Serwis%20Elektronarz%C4%99dzi!5e0!3m2!1spl!2spl!4v1714948249631!5m2!1spl!2spl"
            width="600"
            height="450"
            style={{ border: "0" }}
          ></iframe>
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default OurOffer;

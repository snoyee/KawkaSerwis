import { useEffect } from "react";
import Overlay from "./Overlay";

const OurOffer = () => {
  useEffect(() => {
    document.getElementById("Hud3")!.style.color = "orange";
  }, []);
  return (
    <>
      <Overlay />
      <div className="OfferMain">
        <h1>FAQ 🔎</h1>
        <div className="QuestionDiv">
          <div className="Question">
            <h2>1. Dlaczego jesteśmy zajebiści?</h2>
            <p>Bo pracuje tu Sławomir Cieślicki</p>
          </div>
          <div className="Question">
            <h2>2. Czy naprawimy twój sprzęt?</h2>
            <p>Człowiekuu my nie wiemy co to elektronarzędzie nawet</p>
          </div>
          <div className="Question">
            <h2>3. Jakie koszty?</h2>
            <p>Zadzwoń dogadamy się ;v</p>
          </div>
          <div className="Question">
            <h2>4. Ile średnio trwa naprawa?</h2>
            <p>Jak nam się zachce naprawić</p>
          </div>
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default OurOffer;

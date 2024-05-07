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
            <h2>1. Pytanie?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              cursus turpis massa tincidunt dui ut ornare lectus sit. Erat
              pellentesque adipiscing commodo elit at imperdiet dui accumsan.
              Diam vel quam elementum pulvinar etiam. Mattis ullamcorper velit
              sed ullamcorper. Turpis egestas sed tempus urna et pharetra
              pharetra. Ac turpis egestas sed tempus urna et. At tempor commodo
              ullamcorper a lacus vestibulum sed. Vulputate enim nulla aliquet
              porttitor lacus luctus. Pretium vulputate sapien nec sagittis
              aliquam malesuada bibendum. Velit sed ullamcorper morbi tincidunt.
              Odio
            </p>
          </div>
          <div className="Question">
            <h2>2. Pytanie?</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              cursus turpis massa tincidunt dui ut ornare lectus sit. Erat
              pellentesque adipiscing commodo elit at imperdiet dui accumsan.
              Diam vel quam elementum pulvinar etiam. Mattis ullamcorper velit
              sed ullamcorper. Turpis egestas sed tempus urna et pharetra
              pharetra. Ac turpis egestas sed tempus urna et. At tempor commodo
              ullamcorper a lacus vestibulum sed. Vulputate enim nulla aliquet
              porttitor lacus luctus. Pretium vulputate sapien nec sagittis
              aliquam malesuada bibendum. Velit sed ullamcorper morbi tincidunt.
              Odio
            </p>
          </div>
          <div className="Question">
            <h2>3. Pytanie?</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              cursus turpis massa tincidunt dui ut ornare lectus sit. Erat
              pellentesque adipiscing commodo elit at imperdiet dui accumsan.
              Diam vel quam elementum pulvinar etiam. Mattis ullamcorper velit
              sed ullamcorper. Turpis egestas sed tempus urna et pharetra
              pharetra. Ac turpis egestas sed tempus urna et. At tempor commodo
              ullamcorper a lacus vestibulum sed. Vulputate enim nulla aliquet
              porttitor lacus luctus. Pretium vulputate sapien nec sagittis
              aliquam malesuada bibendum. Velit sed ullamcorper morbi tincidunt.
              Odio
            </p>
          </div>
          <div className="Question">
            <h2>4. Pytanie?</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              cursus turpis massa tincidunt dui ut ornare lectus sit. Erat
              pellentesque adipiscing commodo elit at imperdiet dui accumsan.
              Diam vel quam elementum pulvinar etiam. Mattis ullamcorper velit
              sed ullamcorper. Turpis egestas sed tempus urna et pharetra
              pharetra. Ac turpis egestas sed tempus urna et. At tempor commodo
              ullamcorper a lacus vestibulum sed. Vulputate enim nulla aliquet
              porttitor lacus luctus. Pretium vulputate sapien nec sagittis
              aliquam malesuada bibendum. Velit sed ullamcorper morbi tincidunt.
              Odio
            </p>
          </div>
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default OurOffer;

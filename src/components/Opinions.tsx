import { useEffect } from "react";
import Overlay from "./Overlay";

const Opinions = () => {
  useEffect(() => {
    document.getElementById("Hud5")!.style.color = "orange";
  }, []);
  return (
    <>
      <Overlay />
      <div
        className="elfsight-app-2ad6dd5e-3aa9-461d-9376-eaea66ff5758"
        data-elfsight-app-lazy
        id="Opinions"
      ></div>
    </>
  );
};

export default Opinions;

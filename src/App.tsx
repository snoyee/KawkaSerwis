import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/OurOffer";
import Shop from "./components/Shop";
import Repair from "./components/Repair";
import Location from "./components/Location";
import About from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Error404 from "./components/Error404";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/KawkaSerwis/" element={<Home />}></Route>
          <Route path="/Oferta" element={<Home />}></Route>
          <Route path="/Oferta/Sklep" element={<Shop />}></Route>
          <Route path="/Oferta/Serwis" element={<Repair />}></Route>
          <Route path="/Lokalizacja" element={<Location />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/OFirmie" element={<About />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

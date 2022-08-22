import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
const RouteSwitch = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;